import { createFileRoute } from "@tanstack/react-router";
import { Heart, Stethoscope, Syringe, ShieldCheck, Award, Users } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import petsImg from "@/assets/about-pets.jpg";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      { title: "Sobre nosotros · Clínica Veterinaria ALQUVET Carabayllo" },
      {
        name: "description",
        content:
          "Conoce a ALQUVET, la clínica veterinaria de Carabayllo con medicina especializada, cirugía avanzada y atención cálida para perros y gatos.",
      },
      { property: "og:title", content: "Sobre ALQUVET · Veterinaria en Carabayllo" },
      {
        property: "og:description",
        content:
          "Equipo profesional, atención personalizada y tecnología médica al servicio de tu mascota.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Pasión animal", desc: "Amamos lo que hacemos y se nota en cada atención." },
  { icon: Stethoscope, title: "Profesionalismo", desc: "Veterinarios capacitados y en constante formación." },
  { icon: Syringe, title: "Tecnología", desc: "Equipos modernos para diagnósticos precisos." },
  { icon: ShieldCheck, title: "Confianza", desc: "Procedimientos seguros y trato transparente." },
  { icon: Award, title: "Excelencia", desc: "+4.8 estrellas y más de 30 familias satisfechas." },
  { icon: Users, title: "Cercanía", desc: "Tu mascota y tú, parte de la familia ALQUVET." },
];

function AboutPage() {
  return (
    <div className="bg-background">
      <section className="bg-hero-gradient py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Nuestra historia"
              title="Una veterinaria con corazón en Carabayllo"
              description="En ALQUVET creemos que cada mascota merece atención profesional y cariñosa. Combinamos medicina veterinaria de calidad con un trato humano para que tu familia esté tranquila."
              align="left"
            />
            <p className="mt-6 text-base text-muted-foreground">
              Desde nuestra clínica acompañamos a las familias de Carabayllo y zonas cercanas en
              cada etapa de la vida de su mascota: desde la primera vacuna, controles de rutina,
              cirugías especializadas, hasta cuidado estético y nutricional.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-primary/10 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-card">
              <img
                src={petsImg}
                alt="Mascotas felices atendidas en ALQUVET"
                width={1200}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Nuestros valores" title="Lo que nos hace diferentes" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section-soft py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { k: "+5,000", v: "Mascotas atendidas" },
            { k: "+10 años", v: "De experiencia" },
            { k: "4.8/5", v: "Calificación Google" },
            { k: "100%", v: "Atención con amor" },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft"
            >
              <p className="font-display text-3xl font-extrabold text-primary">{s.k}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
