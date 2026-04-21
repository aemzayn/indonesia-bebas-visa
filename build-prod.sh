#!/usr/bin/env bash
set -euo pipefail

IMAGE="bebas-visa"
TAG="prod"

echo "==> Building ${IMAGE}:${TAG}..."
docker build \
  --platform linux/amd64 \
  --tag "${IMAGE}:${TAG}" \
  --label "build.date=$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  --label "build.version=${TAG}" \
  .

echo ""
echo "Build complete: ${IMAGE}:${TAG}"
echo ""
echo "Run locally:  docker-compose up -d"
echo "Push image:   docker push ${IMAGE}:${TAG}"
