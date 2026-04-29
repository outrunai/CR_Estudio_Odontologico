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
            S.listItem()
              .title("Configuración del Sitio")
              .id("siteConfig")
              .child(
                S.document()
                  .schemaType("siteConfig")
                  .documentId("siteConfig")
              ),
            S.listItem()
              .title("Perfil del Doctor")
              .id("doctorProfile")
              .child(
                S.document()
                  .schemaType("doctorProfile")
                  .documentId("doctorProfile")
              ),
            S.listItem()
              .title("Información de Contacto")
              .id("contactInfo")
              .child(
                S.document()
                  .schemaType("contactInfo")
                  .documentId("contactInfo")
              ),
            S.divider(),
            S.documentTypeListItem("service").title("Servicios"),
            S.documentTypeListItem("caseStudy").title("Casos / Galería"),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
