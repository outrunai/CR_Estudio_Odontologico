import { services, siteConfig } from "@/lib/data";
import type { Service } from "@/types";

function ServiceIcon({ icon }: { icon: string }) {
  const className = "w-10 h-10";

  switch (icon) {
    case "crown":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20h20M4 20l1-12 4 5 3-9 3 9 4-5 1 12" />
        </svg>
      );
    case "implant":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="2" width="8" height="6" rx="1" />
          <line x1="10" y1="8" x2="10" y2="10" />
          <line x1="14" y1="8" x2="14" y2="10" />
          <path d="M10 10h4l-0.5 3h-3L10 10z" />
          <path d="M10.5 13h3l-0.5 3h-2l-0.5-3z" />
          <path d="M11 16h2l-0.5 3h-1L11 16z" />
          <path d="M11.5 19h1l-0.25 3h-0.5l-0.25-3z" />
        </svg>
      );
    case "denture":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12c0-5 3.5-8 8-8s8 3 8 8" />
          <path d="M4 12c0 4 3.5 8 8 8s8-4 8-8" />
          <line x1="8" y1="8" x2="8" y2="16" />
          <line x1="10.5" y1="7" x2="10.5" y2="17" />
          <line x1="13.5" y1="7" x2="13.5" y2="17" />
          <line x1="16" y1="8" x2="16" y2="16" />
          <line x1="4" y1="12" x2="20" y2="12" />
        </svg>
      );
    case "smile":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="9" cy="10" r="0.5" fill="currentColor" />
          <circle cx="15" cy="10" r="0.5" fill="currentColor" />
          <path d="M8 14s1.5 3 4 3 4-3 4-3" />
        </svg>
      );
    case "precision":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      );
    case "clean":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="1" width="6" height="10" rx="3" />
          <line x1="12" y1="11" x2="12" y2="17" />
          <line x1="10" y1="17" x2="14" y2="17" />
          <line x1="10" y1="17" x2="9" y2="23" />
          <line x1="12" y1="17" x2="12" y2="23" />
          <line x1="14" y1="17" x2="15" y2="23" />
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
