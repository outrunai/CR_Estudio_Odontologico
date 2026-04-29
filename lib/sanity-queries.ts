import { cache } from "react";
import { sanityClient, isSanityConfigured } from "./sanity";
import {
  siteConfig as staticSiteConfig,
  doctorProfile as staticDoctorProfile,
  contactInfo as staticContactInfo,
  services as staticServices,
  caseStudies as staticCaseStudies,
} from "./data";
import type { SiteConfig, DoctorProfile, ContactInfo, Service, CaseStudy } from "@/types";

// ─── siteConfig ──────────────────────────────────────────────────────────────

const SITE_CONFIG_QUERY = `*[_type == "siteConfig"][0]{
  siteName,
  heroTitle,
  heroSubtitle,
  heroCta,
  "heroBackgroundImageUrl": heroBackgroundImage.asset->url,
  aboutTitle,
  servicesTitle,
  resultsTitle,
  contactTitle
}`;

export const getSiteConfig = cache(async (): Promise<SiteConfig> => {
  if (!isSanityConfigured) return staticSiteConfig;
  try {
    const data = await sanityClient.fetch<Partial<SiteConfig> | null>(SITE_CONFIG_QUERY);
    return data ? { ...staticSiteConfig, ...data } : staticSiteConfig;
  } catch {
    return staticSiteConfig;
  }
});

// ─── doctorProfile ───────────────────────────────────────────────────────────

const DOCTOR_PROFILE_QUERY = `*[_type == "doctorProfile"][0]{
  name,
  title,
  experience,
  bio,
  teaching,
  personal,
  "imageSrc": image.asset->url
}`;

export const getDoctorProfile = cache(async (): Promise<DoctorProfile> => {
  if (!isSanityConfigured) return staticDoctorProfile;
  try {
    const data = await sanityClient.fetch<Partial<DoctorProfile> | null>(DOCTOR_PROFILE_QUERY);
    return data ? { ...staticDoctorProfile, ...data } : staticDoctorProfile;
  } catch {
    return staticDoctorProfile;
  }
});

// ─── contactInfo ─────────────────────────────────────────────────────────────

const CONTACT_INFO_QUERY = `*[_type == "contactInfo"][0]{
  phone,
  email,
  whatsapp,
  instagram,
  instagramUrl,
  address,
  city,
  googleMapsUrl,
  googleMyBusinessUrl
}`;

export const getContactInfo = cache(async (): Promise<ContactInfo> => {
  if (!isSanityConfigured) return staticContactInfo;
  try {
    const data = await sanityClient.fetch<Partial<ContactInfo> | null>(CONTACT_INFO_QUERY);
    return data ? { ...staticContactInfo, ...data } : staticContactInfo;
  } catch {
    return staticContactInfo;
  }
});

// ─── services ────────────────────────────────────────────────────────────────

const SERVICES_QUERY = `*[_type == "service"] | order(order asc){
  "id": _id,
  name,
  description,
  icon
}`;

export const getServices = cache(async (): Promise<Service[]> => {
  if (!isSanityConfigured) return staticServices;
  try {
    const data = await sanityClient.fetch<Service[] | null>(SERVICES_QUERY);
    return data && data.length > 0 ? data : staticServices;
  } catch {
    return staticServices;
  }
});

// ─── caseStudies ─────────────────────────────────────────────────────────────

const CASE_STUDIES_QUERY = `*[_type == "caseStudy"] | order(order asc){
  "id": _id,
  "src": image.asset->url,
  alt,
  title
}`;

export const getCaseStudies = cache(async (): Promise<CaseStudy[]> => {
  if (!isSanityConfigured) return staticCaseStudies;
  try {
    const data = await sanityClient.fetch<CaseStudy[] | null>(CASE_STUDIES_QUERY);
    return data && data.length > 0 ? data : staticCaseStudies;
  } catch {
    return staticCaseStudies;
  }
});
