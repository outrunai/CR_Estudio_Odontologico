import { services, siteConfig } from "@/lib/data";
import type { Service } from "@/types";

function ServiceIcon({ icon }: { icon: string }) {
  const className = "w-10 h-10";

  switch (icon) {
    case "crown":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l3.5 3L9 6l3 5 3-5 2.5 6L21 9v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
          <line x1="5" y1="15" x2="19" y2="15" />
        </svg>
      );
    case "implant":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3c0-0.5 0.5-1 1-1h6c0.5 0 1 0.5 1 1v3a4 4 0 0 1-1 2.5L13 11h-2L9 8.5A4 4 0 0 1 8 6V3z" />
          <line x1="11" y1="11" x2="11" y2="13" />
          <line x1="13" y1="11" x2="13" y2="13" />
          <path d="M9 13h6" />
          <path d="M9.5 15h5" />
          <path d="M10 17h4" />
          <path d="M10.5 19h3" />
          <path d="M11 21h2" />
        </svg>
      );
    case "denture":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 8c0-2 2-3 4-3s3 1 5 1 3-1 5-1 4 1 4 3v3c0 4-3 9-6 9-1.5 0-2-2-3-2s-1.5 2-3 2c-3 0-6-5-6-9V8z" />
          <line x1="7.5" y1="7" x2="7.5" y2="12" />
          <line x1="11" y1="6.5" x2="11" y2="12" />
          <line x1="13" y1="6.5" x2="13" y2="12" />
          <line x1="16.5" y1="7" x2="16.5" y2="12" />
        </svg>
      );
    case "smile":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10c0-1 1-2 2-2h14c1 0 2 1 2 2v1c0 5-4 9-9 9s-9-4-9-9v-1z" />
          <line x1="8" y1="8" x2="8" y2="13" />
          <line x1="12" y1="8" x2="12" y2="14" />
          <line x1="16" y1="8" x2="16" y2="13" />
          <path d="M5 11c2 1 5 1.5 7 1.5s5-0.5 7-1.5" />
        </svg>
      );
    case "precision":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3c-2 0-3 1.5-3 3 0 2 0.5 3 0.5 5s-0.5 4-0.5 7c0 2 1 3 2 3s1.5-2 2-4 0.5-3 2-3 1.5 1 2 3 1 4 2 4 2-1 2-3c0-3-0.5-5-0.5-7s0.5-3 0.5-5c0-1.5-1-3-3-3-1 0-2 1-3 1s-2-1-3-1z" />
          <line x1="3" y1="13" x2="5" y2="13" />
          <line x1="3" y1="15" x2="4.5" y2="15" />
          <line x1="3" y1="17" x2="5" y2="17" />
        </svg>
      );
    case "clean":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <rect x="14" y="3" width="6" height="4" rx="1" />
          <line x1="14.5" y1="4" x2="19.5" y2="4" />
          <line x1="14.5" y1="5" x2="19.5" y2="5" />
          <line x1="14.5" y1="6" x2="19.5" y2="6" />
          <line x1="14" y1="7" x2="14" y2="9" />
          <line x1="20" y1="7" x2="20" y2="9" />
          <rect x="13" y="9" width="8" height="2" rx="1" />
          <line x1="12" y1="11" x2="3" y2="20" />
          <circle cx="5" cy="18" r="1" />
          <circle cx="3" cy="15" r="0.8" />
          <circle cx="7" cy="20" r="0.8" />
        </svg>
      );
    case "aligner":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 9c0-2 3-4 8-4s8 2 8 4v2c0 4-3 8-8 8s-8-4-8-8V9z" />
          <path d="M6 10c0-1.5 2.5-2.5 6-2.5s6 1 6 2.5v2c0 3-2.5 6-6 6s-6-3-6-6v-2z" strokeDasharray="2 1.5" />
          <line x1="9" y1="8" x2="9" y2="13" />
          <line x1="12" y1="7.5" x2="12" y2="14" />
          <line x1="15" y1="8" x2="15" y2="13" />
        </svg>
      );
    case "ceramic":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 5c0-1 1-2 2-2h6c1 0 2 1 2 2v9c0 4-2 7-5 7s-5-3-5-7V5z" />
          <path d="M9 4c0-0.5 0.5-1 1-1h4c0.5 0 1 0.5 1 1v8c0 3-1.5 5-3 5s-3-2-3-5V4z" />
          <line x1="11" y1="6" x2="13" y2="6" />
          <path d="M10 9l1-1 1 1 1-1 1 1" />
        </svg>
      );
    case "extraction":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 8c0-2 1.5-3 4-3s4 1 4 3v3c0 3-2 6-3 6-0.5 0-0.7-1-1-1s-0.5 1-1 1c-1 0-3-3-3-6V8z" />
          <line x1="12" y1="14" x2="12" y2="20" />
          <polyline points="9 17 12 20 15 17" />
          <line x1="5" y1="4" x2="8" y2="7" />
          <line x1="19" y1="4" x2="16" y2="7" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Services() {
  return (
    <section id="servicios" className="bg-cloud">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl uppercase tracking-widest">
            {siteConfig.servicesTitle}
          </h2>
          <div className="w-12 h-px bg-venus mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: Service) => (
            <article
              key={service.id}
              className="bg-cloud border border-venus rounded-2xl p-8 flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-venus">
                <ServiceIcon icon={service.icon} />
              </div>
              <h3 className="font-heading text-navy text-sm uppercase tracking-wide">
                {service.name}
              </h3>
              <p className="font-body text-navy/70 leading-relaxed text-sm">
                {service.description}
              </p>
              <a
                href="#contacto"
                className="font-body text-xs text-venus hover:text-navy transition-colors mt-auto"
              >
                Consultar
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
