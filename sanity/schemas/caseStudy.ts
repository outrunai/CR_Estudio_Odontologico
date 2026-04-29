export const caseStudySchema = {
  name: "caseStudy",
  title: "Casos de Éxito",
  type: "document",
  orderings: [
    {
      title: "Orden manual",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  fields: [
    {
      name: "title",
      title: "Título del caso",
      type: "string",
      description: 'Ej: "Rehabilitación Oral", "Diseño de Sonrisa"',
    },
    {
      name: "image",
      title: "Imagen (antes/después)",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "alt",
      title: "Texto alternativo (accesibilidad)",
      type: "string",
      description: "Descripción breve de la imagen para lectores de pantalla",
    },
    {
      name: "order",
      title: "Orden de aparición",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
