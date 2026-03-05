import type {
  SiteConfig,
  DoctorProfile,
  ContactInfo,
  Service,
  CaseStudy,
} from "../types";

export const siteConfig: SiteConfig = {
  siteName: "CR Estudio Odontológico",
  heroTitle: "CR Estudio Odontológico",
  heroSubtitle:
    "En nuestro consultorio entendemos que cada paciente, cada sonrisa, es única y cumple una función esencial en la salud, la seguridad y la imagen personal de quien la lleva, que detrás de cada motivo de consulta existe una historia, una necesidad funcional y una expectativa estética que merece ser escuchada con atención.",
  heroCta: "Agenda tu valoración",
  aboutTitle: "Dra. Carolina Rico",
  servicesTitle: "Nuestros Servicios",
  resultsTitle: "Casos de Éxito",
  contactTitle: "Contáctanos",
};

export const doctorProfile: DoctorProfile = {
  name: "Dra. Carolina Rico",
  title: "Especialista en Rehabilitación Oral",
  experience: "Más de 13 años de experiencia clínica",
  bio: [
    "Creo que la odontología no debería sentirse como una experiencia fría o intimidante, sino como un espacio donde te sientas acompañado, escuchado y seguro.",
    "Soy Carolina Rico, odontóloga, especialista en rehabilitación oral, con más de 13 años de experiencia clínica, apasionada por estética y la función, con un enfoque basado en la ciencia, precisión y actualización constante, me encanta trabajar con materiales y técnicas de alto nivel que respeten la estructura natural del diente y me permitan resultados funcionales, duraderos y armoniosos. Más allá de la técnica, lo que realmente me importa es la persona que se sienta en mi consultorio. Cada sonrisa tiene una historia, cada tratamiento es un proceso que construimos juntos, me tomo el tiempo de entender tus necesidades, explicarte, de resolver dudas y de diseñar un plan que se adapte a ti y no al revés.",
    "Trabajo con responsabilidad, soy sensible con todos los pacientes, pero demasiado exigente con el resultado, porque entiendo que confiar tu salud  a alguien no es algo menor, mi objetivo es que te sientas tranquilo desde la primera consulta. Creo en la odontología bien hecha, en el trato humano y en los resultados que se ven bien y son duraderos.",
  ],
  teaching:
    "Soy docente universitaria de pregrado de odontología en la universidad CES, la docencia es un rol que valoro profundamente, porque me permite compartir conocimiento, formar criterio y contribuir a la formación de profesionales conscientes y rigurosos, enseñar me reta a mantenerme actualizada, a cuestionar lo establecido y a traducir la ciencia en algo claro, aplicable y humano.",
  personal:
    "Mas allá de la odontología, he sido deportista toda mi vida, esto me ha dado muchas herramientas como: disciplina con propósito, persistencia y un compromiso con el proceso que es imposible de ignorar ya que ahí es donde se forman las mejores versiones de nosotros. Me encantan los animales, me hacen conectar con mi lado sensible, soy muy familiar, ese es mi pilar en mi vida de donde sale toda mi motivación, mi apoyo firme y mi compañía serena, Siempre me ha encantado estudiar, aprender y entender, soy una persona analítica y estructurada, busco siempre entender el \"porque\" de las cosas, encontrar sentido en lo que hago, construir desde la intención y no desde la improvisación.",
  imageSrc: "/images/IMG_2477.JPG",
};

export const contactInfo: ContactInfo = {
  phone: "+57 301 3337563",
  whatsapp: "+573013337563",
  instagram: "@cr_estudioodontologico",
  instagramUrl: "https://www.instagram.com/cr_estudioodontologico/",
  address: "Calle 7 # 39-197 Torre Intermédica Consultorio 1101",
  city: "Medellín, Antioquia",
  googleMapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1!2d-75.57!3d6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCalle+7+%23+39-197+Torre+Interm%C3%A9dica!5e0!3m2!1ses!2sco!4v1",
  googleMyBusinessUrl: "https://share.google/cCszCcr4OsBoKG0l7",
};

export const services: Service[] = [
  {
    id: "corona-porcelana",
    name: "Corona de Porcelana",
    description:
      "Restauración estética que imita la forma y el color natural del diente",
    icon: "crown",
  },
  {
    id: "corona-implante",
    name: "Corona sobre Implante",
    description:
      "Corona que se coloca sobre un implante de titanio para reemplazar dientes perdidos",
    icon: "implant",
  },
  {
    id: "protesis-hibrida",
    name: "Prótesis Híbrida",
    description:
      "Solución de rehabilitación completa sin necesidad de implantes",
    icon: "denture",
  },
  {
    id: "diseno-resina",
    name: "Diseño en Resina (10 dientes)",
    description:
      "Transformación estética de la sonrisa completa usando resina de alta calidad",
    icon: "smile",
  },
  {
    id: "microdiseno",
    name: "Microdiseño (10 dientes)",
    description:
      "Ajustes de alta precisión para lograr armonía y estética en la sonrisa",
    icon: "precision",
  },
  {
    id: "limpieza-dental",
    name: "Limpieza Dental",
    description:
      "Profilaxis profesional para mantener la salud periodontal y el brillo natural",
    icon: "clean",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    src: "/images/IMG_2466.JPG",
    alt: "Caso de éxito - Restauración dental 1",
    title: "Rehabilitación Oral",
  },
  {
    id: "case-2",
    src: "/images/IMG_2467.JPG",
    alt: "Caso de éxito - Restauración dental 2",
    title: "Diseño de Sonrisa",
  },
  {
    id: "case-3",
    src: "/images/IMG_2468.JPG",
    alt: "Caso de éxito - Restauración dental 3",
    title: "Rehabilitación Oral",
  },
  {
    id: "case-4",
    src: "/images/IMG_2470.JPG",
    alt: "Caso de éxito - Restauración dental 4",
    title: "Corona de Porcelana",
  },
  {
    id: "case-5",
    src: "/images/IMG_2471.JPG",
    alt: "Caso de éxito - Restauración dental 5",
    title: "Diseño en Resina",
  },
  {
    id: "case-6",
    src: "/images/IMG_2473.JPG",
    alt: "Caso de éxito - Restauración dental 6",
    title: "Microdiseño",
  },
  {
    id: "case-7",
    src: "/images/IMG_2474.JPG",
    alt: "Caso de éxito - Restauración dental 7",
    title: "Diseño de Sonrisa",
  },
  {
    id: "case-8",
    src: "/images/IMG_2477.JPG",
    alt: "Perfil profesional - Dra. Carolina Rico",
    title: "CR Estudio Odontológico",
  },
];
