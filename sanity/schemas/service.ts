const ICON_OPTIONS = [
  { title: "Corona (corona de porcelana)", value: "crown" },
  { title: "Implante (llave de implante)", value: "implant" },
  { title: "Prótesis (diente)", value: "denture" },
  { title: "Sonrisa / Resina (pincel)", value: "smile" },
  { title: "Microdiseño (brillo)", value: "precision" },
  { title: "Limpieza (gota)", value: "clean" },
  { title: "Ortodoncia (alineador)", value: "aligner" },
  { title: "Cerámica (diamante)", value: "ceramic" },
  { title: "Extracción (jeringa)", value: "extraction" },
];

export const serviceSchema = {
  name: "service",
  title: "Servicios",
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
      name: "name",
      title: "Nombre del servicio",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 3,
    },
    {
      name: "icon",
      title: "Ícono",
      type: "string",
      options: {
        list: ICON_OPTIONS,
        layout: "dropdown",
      },
    },
    {
      name: "order",
      title: "Orden de aparición",
      type: "number",
      description: "Número menor = aparece primero",
    },
  ],
  preview: {
    select: { title: "name", subtitle: "description" },
  },
};
