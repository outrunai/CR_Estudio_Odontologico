// Singleton – configuración global del sitio y Hero
export const siteConfigSchema = {
  name: "siteConfig",
  title: "Configuración del Sitio",
  type: "document",
  fields: [
    {
      name: "siteName",
      title: "Nombre del sitio",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "heroTitle",
      title: "Título principal (Hero)",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "heroSubtitle",
      title: "Subtítulo del Hero",
      type: "text",
      rows: 4,
    },
    {
      name: "heroCta",
      title: "Texto del botón principal",
      type: "string",
    },
    {
      name: "heroBackgroundImage",
      title: "Imagen de fondo del Hero",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "aboutTitle",
      title: "Título sección Perfil",
      type: "string",
    },
    {
      name: "servicesTitle",
      title: "Título sección Servicios",
      type: "string",
    },
    {
      name: "resultsTitle",
      title: "Título sección Resultados",
      type: "string",
    },
    {
      name: "contactTitle",
      title: "Título sección Contacto",
      type: "string",
    },
  ],
  __experimental_actions: ["update", "publish"],
};
