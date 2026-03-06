import Image from "next/image";
import { caseStudies, siteConfig } from "@/lib/data";
import type { CaseStudy } from "@/types";

export default function Results() {
  return (
    <section id="resultados" className="bg-meteor">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl uppercase tracking-widest">
            {siteConfig.resultsTitle}
          </h2>
          <div className="w-12 h-px bg-venus mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {caseStudies.map((study: CaseStudy) => (
            <article
              key={study.id}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={study.src}
                  alt={study.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
              {study.title && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/70 to-transparent p-4 pointer-events-none">
                  <span className="font-heading text-cloud text-xs uppercase tracking-wide">
                    {study.title}
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-block font-body font-semibold text-sm uppercase tracking-widest px-8 py-3 bg-venus text-cloud rounded-full hover:bg-navy transition-colors duration-300"
          >
            Agenda tu valoración
          </a>
        </div>
      </div>
    </section>
  );
}
