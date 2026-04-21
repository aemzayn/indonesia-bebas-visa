import { useRef, useEffect, useState, useCallback } from 'react';
import GlobeGL, { type GlobeMethods } from 'react-globe.gl';
import { feature } from 'topojson-client';
import type { Topology, GeometryCollection } from 'topojson-specification';
import type { Feature, Geometry } from 'geojson';
import {
  visaData,
  CATEGORY_COLORS,
  type CountryVisa,
  type Continent,
} from '../data/visa-data';
import CountryTooltip from './CountryTooltip';
import { useIsMobile } from '../hooks/useIsMobile';

interface Props {
  continentFilter: Continent | null;
  onCountryHover: (country: CountryVisa | null) => void;
  onCountryClick: (country: CountryVisa | null) => void;
}

interface GeoFeature extends Feature<Geometry> {
  id?: string | number;
}

interface TooltipState {
  country: CountryVisa;
  x: number;
  y: number;
}

const INDONESIA_ISO = 360;

const isoMap = new Map<number, CountryVisa>(
  visaData.map((c) => [c.isoNumeric, c])
);

export default function Globe({ continentFilter, onCountryHover, onCountryClick }: Props) {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [polygons, setPolygons] = useState<GeoFeature[]>([]);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  // Load world topology
  useEffect(() => {
    import('world-atlas/countries-110m.json').then((mod) => {
      const topo = mod.default as unknown as Topology;
      const geojson = feature(
        topo,
        topo.objects['countries'] as GeometryCollection
      ) as { features: GeoFeature[] };
      setPolygons(
        geojson.features.filter((f) => {
          const id = Number(f.id);
          return isoMap.has(id) || id === INDONESIA_ISO;
        })
      );
    });
  }, []);

  // Resize observer
  useEffect(() => {
    const obs = new ResizeObserver(() => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    });
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  // Initial camera
  useEffect(() => {
    const timer = setTimeout(() => {
      const altitude = isMobile ? 3.0 : 2.2;
      globeRef.current?.pointOfView({ lat: 5, lng: 115, altitude }, 1000);
    }, 200);
    return () => clearTimeout(timer);
  }, [isMobile]);

  // Track mouse for desktop tooltip
  useEffect(() => {
    if (isMobile) return;
    const handler = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setTooltip((prev) => prev ? { ...prev, x: e.clientX, y: e.clientY } : null);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [isMobile]);

  const getCountry = useCallback((f: GeoFeature) => isoMap.get(Number(f.id)), []);

  const isVisible = useCallback(
    (f: GeoFeature) => {
      if (!continentFilter) return true;
      return getCountry(f)?.continent === continentFilter;
    },
    [continentFilter, getCountry]
  );

  const polygonColor = useCallback(
    (feat: object) => {
      const f = feat as GeoFeature;
      const id = Number(f.id);
      if (id === INDONESIA_ISO) {
        return hoveredId === id ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.85)';
      }
      const country = getCountry(f);
      if (!country || !isVisible(f)) return 'rgba(255,255,255,0.04)';
      const base = CATEGORY_COLORS[country.category];
      return hoveredId === id ? base + 'ff' : base + 'bb';
    },
    [getCountry, hoveredId, isVisible]
  );

  const polygonSideColor = useCallback(
    (feat: object) => {
      const f = feat as GeoFeature;
      const id = Number(f.id);
      if (id === INDONESIA_ISO) return 'rgba(255,255,255,0.3)';
      const country = getCountry(f);
      if (!country || !isVisible(f)) return 'rgba(0,0,0,0)';
      return CATEGORY_COLORS[country.category] + '44';
    },
    [getCountry, isVisible]
  );

  const polygonStrokeColor = useCallback(
    (feat: object) => {
      const f = feat as GeoFeature;
      const id = Number(f.id);
      if (id === INDONESIA_ISO) return 'rgba(255,255,255,0.9)';
      return isVisible(f) ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.05)';
    },
    [isVisible]
  );

  const polygonAltitude = useCallback(
    (feat: object) => {
      const f = feat as GeoFeature;
      const id = Number(f.id);
      if (id === INDONESIA_ISO) return hoveredId === id ? 0.018 : 0.009;
      return hoveredId === id ? 0.018 : 0.006;
    },
    [hoveredId]
  );

  // Desktop: hover
  const handlePolygonHover = useCallback(
    (feat: object | null) => {
      if (isMobile) return;
      const f = feat as GeoFeature | null;
      if (!f) {
        setHoveredId(null);
        setTooltip(null);
        onCountryHover(null);
        return;
      }
      const id = Number(f.id);
      setHoveredId(id);
      if (id === INDONESIA_ISO) {
        setTooltip(null);
        onCountryHover(null);
        return;
      }
      const country = getCountry(f);
      if (country && isVisible(f)) {
        setTooltip({ country, x: mousePos.current.x, y: mousePos.current.y });
        onCountryHover(country);
      } else {
        setTooltip(null);
        onCountryHover(null);
      }
    },
    [getCountry, isMobile, isVisible, onCountryHover]
  );

  // Both: click — primary interaction on mobile, secondary on desktop
  const handlePolygonClick = useCallback(
    (feat: object) => {
      const f = feat as GeoFeature;
      const id = Number(f.id);
      if (id === INDONESIA_ISO) return;
      const country = getCountry(f);
      if (country && isVisible(f)) {
        setHoveredId(id);
        onCountryClick(country);
      } else {
        onCountryClick(null);
      }
    },
    [getCountry, isVisible, onCountryClick]
  );

  return (
    <div ref={containerRef} className="w-full h-full">
      <GlobeGL
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        polygonsData={polygons}
        polygonCapColor={polygonColor}
        polygonSideColor={polygonSideColor}
        polygonStrokeColor={polygonStrokeColor}
        polygonAltitude={polygonAltitude}
        onPolygonHover={handlePolygonHover}
        onPolygonClick={handlePolygonClick}
        atmosphereColor="#1a56db"
        atmosphereAltitude={0.18}
        animateIn
      />
      {!isMobile && tooltip && <CountryTooltip {...tooltip} />}
    </div>
  );
}
