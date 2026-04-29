// Singleton – información de contacto
export const contactInfoSchema = {
  name: "contactInfo",
  title: "Información de Contacto",
  type: "document",
  fields: [
    {
      name: "phone",
      title: "Teléfono",
      type: "string",
    },
    {
      name: "email",
      title: "Correo electrónico",
      type: "string",
    },
    {
      name: "whatsapp",
      title: "WhatsApp (con código de país)",
      type: "string",
      description: 'Ej: "+573013337563"',
    },
    {
      name: "instagram",
      title: "Instagram (handle)",
      type: "string",
      description: 'Ej: "@cr_estudioodontologico"',
    },
    {
      name: "instagramUrl",
      title: "URL de Instagram",
      type: "url",
    },
    {
      name: "address",
      title: "Dirección",
      type: "string",
    },
    {
      name: "city",
      title: "Ciudad",
      type: "string",
    },
    {
      name: "googleMapsUrl",
      title: "URL embed Google Maps",
      type: "url",
      description: "URL de embed para el iframe del mapa",
    },
    {
      name: "googleMyBusinessUrl",
      title: "URL Google My Business",
      type: "url",
    },
  ],
  __experimental_actions: ["update", "publish"],
};
