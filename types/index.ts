export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

export interface DoctorProfile {
  name: string;
  title: string;
  experience: string;
  bio: string[];
  teaching: string;
  personal: string;
  imageSrc: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
  instagram: string;
  instagramUrl: string;
  address: string;
  city: string;
  googleMapsUrl: string;
  googleMyBusinessUrl: string;
}

export interface SiteConfig {
  siteName: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  aboutTitle: string;
  servicesTitle: string;
  resultsTitle: string;
  contactTitle: string;
}
