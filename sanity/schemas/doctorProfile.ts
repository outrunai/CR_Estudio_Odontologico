// Singleton – perfil de la doctora
export const doctorProfileSchema = {
  name: "doctorProfile",
  title: "Perfil de la Doctora",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nombre completo",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "title",
      title: "Especialidad",
      type: "string",
    },
    {
      name: "experience",
      title: "Años de experiencia (texto)",
      type: "string",
      description: 'Ej: "Más de 13 años de experiencia clínica"',
    },
    {
      name: "bio",
      title: "Biografía (párrafos)",
      type: "array",
      of: [{ type: "text" }],
      description: "Cada elemento es un párrafo independiente",
    },
    {
      name: "teaching",
      title: "Sección Docencia",
      type: "text",
      rows: 5,
    },
    {
      name: "personal",
      title: "Sección Personal",
      type: "text",
      rows: 5,
    },
    {
      name: "image",
      title: "Foto de perfil",
      type: "image",
      options: { hotspot: true },
    },
  ],
  __experimental_actions: ["update", "publish"],
};
