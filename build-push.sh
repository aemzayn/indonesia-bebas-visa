#!/usr/bin/env bash
set -euo pipefail

REGISTRY="ghcr.io"
IMAGE="${REGISTRY}/aemzayn/bebas-visa"
TAG="prod"
FULL_IMAGE="${IMAGE}:${TAG}"

echo "==> Building ${FULL_IMAGE}..."
docker build \
  --platform linux/amd64 \
  --tag "${FULL_IMAGE}" \
  --label "build.date=$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  --label "build.version=${TAG}" \
  .

echo ""
echo "==> Pushing ${FULL_IMAGE}..."
docker push "${FULL_IMAGE}"

echo ""
echo "Done: ${FULL_IMAGE}"
echo "Watchtower will pick up the new image within 5 minutes."
