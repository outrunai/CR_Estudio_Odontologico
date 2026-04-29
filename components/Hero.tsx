import Image from "next/image";
import { getSiteConfig } from "@/lib/sanity-queries";

export default async function Hero() {
  const siteConfig = await getSiteConfig();
  const bgImage = siteConfig.heroBackgroundImageUrl ?? "/images/IMG_2466.JPG";

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="CR Estudio Odontológico - fondo"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/75" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center gap-4 sm:gap-6">
        <h1 className="font-heading font-bold text-cloud text-2xl sm:text-4xl md:text-6xl lg:text-7xl uppercase tracking-wide sm:tracking-widest leading-tight">
          {siteConfig.heroTitle}
        </h1>
        <div className="w-20 h-px bg-venus mx-auto" />
        <p className="font-body text-meteor text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
          {siteConfig.heroSubtitle}
        </p>
        <a
          href="#contacto"
          className="mt-4 inline-block font-body font-semibold text-sm uppercase tracking-widest px-8 py-4 bg-venus text-cloud rounded-full hover:bg-navy border border-venus transition-colors duration-300"
        >
          {siteConfig.heroCta}
        </a>
      </div>
    </section>
  );
}
