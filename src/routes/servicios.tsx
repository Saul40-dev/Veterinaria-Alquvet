import { createFileRoute } from "@tanstack/react-router";
import {
  Stethoscope,
  HeartPulse,
  Syringe,
  Scissors,
  ShoppingBag,
  Check,
  MessageCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios veterinarios en Carabayllo · ALQUVET" },
      {
        name: "description",
        content:
          "Consulta, cirugía, banco de sangre, peluquería canina, profilaxis dental y tienda veterinaria en Carabayllo. Atención profesional y precios accesibles.",
      },
      { property: "og:title", content: "Servicios veterinarios · ALQUVET Carabayllo" },
      {
        property: "og:description",
        content:
          "Medicina general, interna, cirugía, estética y tienda veterinaria. Todo lo que tu mascota necesita en un solo lugar.",
      },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    icon: Stethoscope,
    title: "Medicina General",
    items: ["Consulta veterinaria", "Vacunas", "Desparasitación"],
  },
  {
    icon: HeartPulse,
    title: "Medicina Interna",
    items: ["Diagnóstico de enfermedades", "Tratamientos especializados"],
  },
  {
    icon: Syringe,
    title: "Cirugía Veterinaria",
    items: [
      "Cirugías simples y complejas",
      "Banco de sangre veterinario",
      "Transfusiones sanguíneas",
    ],
  },
  {
    icon: Scissors,
    title: "Estética y Cuidado",
    items: [
      "Baño para mascotas",
      "Peluquería canina",
      "Profilaxis dental con ultrasonido",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Tienda Veterinaria",
    items: ["Medicamentos", "Alimentos", "Accesorios para mascotas"],
  },
];

function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="bg-hero-gradient py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Servicios"
            title="Todo lo que tu mascota necesita en un solo lugar"
            description="Atención veterinaria integral con tecnología, experiencia y mucho amor."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {groups.map((g) => (
            <article
              key={g.title}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
                <g.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">{g.title}</h3>
              <ul className="mt-4 space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-section-soft py-16">
        <div className="mx-auto max-w-3xl rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground shadow-card">
          <h3 className="font-display text-2xl font-bold sm:text-3xl">
            ¿Tu mascota necesita atención?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/90">
            Escríbenos por WhatsApp y te ayudamos a agendar una cita rápidamente.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-soft transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-5 w-5" />
            Agendar cita por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
