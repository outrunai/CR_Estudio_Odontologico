import Image from "next/image";
import { getDoctorProfile } from "@/lib/sanity-queries";

export default async function Profile() {
  const doctorProfile = await getDoctorProfile();

  return (
    <section id="perfil" className="bg-meteor">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Columna izquierda — Imagen */}
        <div className="relative aspect-[3/4]">
          <Image
            src={doctorProfile.imageSrc}
            alt={doctorProfile.name}
            fill
            className="object-cover object-top rounded-2xl"
          />
        </div>

        {/* Columna derecha — Texto */}
        <div>
          <span className="font-body text-sm text-venus tracking-widest uppercase">
            {doctorProfile.experience}
          </span>
          <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl uppercase mt-3">
            {doctorProfile.name}
          </h2>
          <p className="font-body text-venus font-medium mb-6 mt-2">
            {doctorProfile.title}
          </p>
          <div className="w-12 h-px bg-venus mb-6" />

          {doctorProfile.bio.map((paragraph, index) => (
            <p
              key={index}
              className="font-body text-navy/80 leading-relaxed mb-4"
            >
              {paragraph}
            </p>
          ))}

          <h3 className="font-body font-semibold text-navy mb-2">Docencia</h3>
          <p className="font-body text-navy/80 leading-relaxed mb-4">
            {doctorProfile.teaching}
          </p>

          <h3 className="font-body font-semibold text-navy mb-2">Personal</h3>
          <p className="font-body text-navy/80 leading-relaxed mb-6">
            {doctorProfile.personal}
          </p>

          <a
            href="#contacto"
            className="inline-block font-body font-semibold text-sm uppercase tracking-widest px-8 py-4 border border-venus text-venus rounded-full hover:bg-venus hover:text-cloud transition-colors duration-300"
          >
            Agenda tu valoración
          </a>
        </div>
      </div>
    </section>
  );
}
