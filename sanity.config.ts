import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "cr-estudio-odontologico",
  title: "CR Estudio Odontológico",

  projectId: "tus5kiby",
  dataset: "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenido")
          .items([
            S.documentTypeListItem("siteConfig").title("⚙️ Configuración del Sitio"),
            S.documentTypeListItem("doctorProfile").title("👩‍⚕️ Perfil de la Doctora"),
            S.documentTypeListItem("contactInfo").title("📞 Información de Contacto"),
            S.divider(),
            S.documentTypeListItem("service").title("🦷 Servicios"),
            S.documentTypeListItem("caseStudy").title("📸 Casos / Galería"),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
