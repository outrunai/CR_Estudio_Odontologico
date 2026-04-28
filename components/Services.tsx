import { services, siteConfig } from "@/lib/data";
import type { Service } from "@/types";
import {
  Crown,
  Wrench,
  Tooth,
  PaintBrush,
  Sparkle,
  Drop,
  Eye,
  Diamond,
  Syringe,
  type Icon,
} from "@phosphor-icons/react/dist/ssr";

const iconMap: Record<string, Icon> = {
  crown: Crown,
  implant: Wrench,
  denture: Tooth,
  smile: PaintBrush,
  precision: Sparkle,
  clean: Drop,
  aligner: Eye,
  ceramic: Diamond,
  extraction: Syringe,
};

function ServiceIcon({ icon }: { icon: string }) {
  const PhosphorIcon = iconMap[icon];
  if (!PhosphorIcon) return null;
  return <PhosphorIcon size={36} weight="duotone" />;
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
              <div className="w-16 h-16 rounded-full bg-venus/10 flex items-center justify-center text-venus shrink-0">
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
