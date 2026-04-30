/**
 * Migra los documentos singleton (siteConfig, doctorProfile, contactInfo)
 * para que tengan los IDs fijos que Sanity Studio espera.
 *
 * Uso:
 *   SANITY_AUTH_TOKEN=<tu-token> node scripts/fix-singleton-ids.mjs
 *
 * El token se obtiene en: https://www.sanity.io/manage/project/tus5kiby/api
 * → "API" → "Add API token" → Editor → copiar el token
 */

import { createClient } from "@sanity/client";

if (!process.env.SANITY_AUTH_TOKEN) {
  console.error("❌  Falta SANITY_AUTH_TOKEN.");
  console.error("   Obtené el token en: https://www.sanity.io/manage/project/tus5kiby/api");
  process.exit(1);
}

const client = createClient({
  projectId: "tus5kiby",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
});

async function migrateToFixedId(type, targetId) {
  console.log(`\nMigrando "${type}" → id "${targetId}"...`);

  // Buscar documento existente (cualquier ID)
  const existing = await client.fetch(`*[_type == $type][0]`, { type });
  if (!existing) {
    console.log(`  ⚠️  No se encontró ningún documento de tipo "${type}". Saltando.`);
    return;
  }

  // Si ya tiene el ID correcto, no hacer nada
  if (existing._id === targetId) {
    console.log(`  ✅ Ya tiene el ID correcto (${targetId}). Sin cambios.`);
    return;
  }

  console.log(`  ID actual: ${existing._id} → nuevo: ${targetId}`);

  // Crear/reemplazar con el ID correcto
  const { _id, _rev, _createdAt, _updatedAt, ...data } = existing;
  await client.createOrReplace({ ...data, _id: targetId, _type: type });
  console.log(`  ✅ Documento creado con id "${targetId}"`);

  // Eliminar el documento con ID antiguo
  await client.delete(existing._id);
  console.log(`  🗑️  Documento antiguo (${existing._id}) eliminado`);
}

async function main() {
  console.log("=== Migración de IDs singleton: CR Estudio Odontológico ===");

  await migrateToFixedId("siteConfig", "siteConfig");
  await migrateToFixedId("doctorProfile", "doctorProfile");
  await migrateToFixedId("contactInfo", "contactInfo");

  console.log("\n✅ Migración completada. El Studio ahora mostrará el contenido correctamente.");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
