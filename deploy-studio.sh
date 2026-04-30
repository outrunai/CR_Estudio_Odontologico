#!/bin/bash
# Despliega el Sanity Studio a sanity.studio
#
# ANTES de correr este script necesitás:
# 1. Ir a: https://www.sanity.io/manage/project/tus5kiby/api
# 2. Ir a "Tokens" → "Add API token"
# 3. Nombre: "Deploy Studio", Permisos: "Editor" o "Deploy Studio"
# 4. Copiar el token y pasarlo como argumento:
#
#   bash deploy-studio.sh sk-tu-token-aqui
#
# El Studio quedará en: https://cr-estudio-odontologico.sanity.studio

set -e

if [ -z "$1" ] && [ -z "$SANITY_AUTH_TOKEN" ]; then
  echo "❌  Falta el token de Sanity."
  echo ""
  echo "Uso: bash deploy-studio.sh <tu-token>"
  echo ""
  echo "Obtené el token en:"
  echo "  https://www.sanity.io/manage/project/tus5kiby/api"
  echo "  → Tokens → Add API token → Editor → copiar"
  exit 1
fi

export SANITY_AUTH_TOKEN="${1:-$SANITY_AUTH_TOKEN}"
export PATH="/opt/alt/alt-nodejs22/root/usr/bin:$PATH"

cd "$(dirname "$0")"

echo "==> Paso 1: Corrigiendo IDs de documentos singleton en Sanity..."
node scripts/fix-singleton-ids.mjs
echo ""

echo "==> Paso 2: Construyendo el Studio..."
NEXT_TEST_WASM=1 UV_THREADPOOL_SIZE=2 RAYON_NUM_THREADS=1 \
  node node_modules/.bin/sanity build dist/studio --yes 2>&1 || true

echo ""
echo "==> Paso 3: Desplegando el Studio..."
node node_modules/.bin/sanity deploy --yes 2>&1

echo ""
echo "✅ Studio desplegado en: https://cr-estudio-odontologico.sanity.studio"
echo ""
echo "Para darle acceso a la cliente, invitarla desde:"
echo "  https://www.sanity.io/manage/project/tus5kiby/members"
