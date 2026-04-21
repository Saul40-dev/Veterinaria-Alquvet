import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/testimonios")({
  component: TestimonialsPage,
});

const testimonials = [
  {
    name: "María Pérez",
    pet: "Dueña de Luna 🐶",
    text: "La mejor veterinaria de la zona, con atención excelente y precios accesibles. Nos sentimos en familia.",
  },
  {
    name: "Carlos Ramírez",
    pet: "Dueño de Rocky 🐶",
    text: "Operaron a mi mascota con gran profesionalismo. Todo el proceso fue claro y muy humano. Muy recomendados.",
  },
  {
    name: "Lucía Torres",
    pet: "Dueña de Michi 🐱",
    text: "Personal muy amable y atentos con mis mascotas. Excelente experiencia desde el primer día.",
  },
  {
    name: "Andrés Quispe",
    pet: "Dueño de Toby 🐶",
    text: "Llevamos a Toby por una emergencia y nos atendieron rapidísimo. ¡Mil gracias por salvarlo!",
  },
  {
    name: "Patricia Salas",
    pet: "Dueña de Kira 🐱",
    text: "La peluquería quedó increíble y el trato con Kira fue súper delicado. Siempre regresamos.",
  },
  {
    name: "Jorge Huamán",
    pet: "Dueño de Max 🐶",
    text: "Precios justos y veterinarios que sí saben lo que hacen. Encontré mi clínica de confianza.",
  },
];

function TestimonialsPage() {
  return (
    <div className="bg-background">
      <section className="bg-hero-gradient py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonios"
            title="Lo que dicen las familias ALQUVET"
            description="Más de 30 reseñas con 4.8 ⭐ en Google. Estas son algunas de sus historias."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/15" />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base text-foreground">“{t.text}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft font-bold text-primary">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.pet}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
