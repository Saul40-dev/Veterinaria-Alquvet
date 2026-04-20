import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import blogVacunacion from "@/assets/blog-vacunacion.jpg";
import blogPostcirugia from "@/assets/blog-postcirugia.jpg";
import blogProfilaxis from "@/assets/blog-profilaxis.jpg";
import blogAlimentacion from "@/assets/blog-alimentacion.jpg";
import blogGato from "@/assets/blog-gato.jpg";
import blogBancoSangre from "@/assets/blog-banco-sangre.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog veterinario · Consejos de cuidado para mascotas · ALQUVET" },
      {
        name: "description",
        content:
          "Consejos veterinarios sobre nutrición, salud, vacunación y bienestar para perros y gatos. Blog de la Clínica Veterinaria ALQUVET en Carabayllo.",
      },
      { property: "og:title", content: "Blog ALQUVET · Cuidado de mascotas" },
      {
        property: "og:description",
        content:
          "Artículos prácticos para que tu mascota viva una vida sana, larga y feliz.",
      },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    title: "Plan de vacunación para cachorros: guía completa",
    excerpt:
      "Las primeras vacunas son clave para una vida larga y sana. Te contamos el calendario recomendado.",
    date: "15 abr 2026",
    category: "Prevención",
    image: blogVacunacion,
  },
  {
    title: "Cómo cuidar a tu mascota después de una cirugía",
    excerpt:
      "Recuperación postoperatoria: consejos para que tu perro o gato sane rápido y sin complicaciones.",
    date: "02 abr 2026",
    category: "Cirugía",
    image: blogPostcirugia,
  },
  {
    title: "Profilaxis dental con ultrasonido: ¿por qué es importante?",
    excerpt:
      "La salud bucal previene infecciones y enfermedades sistémicas. Descubre cuándo hacerla.",
    date: "20 mar 2026",
    category: "Estética",
    image: blogProfilaxis,
  },
  {
    title: "Alimentación balanceada para perros adultos",
    excerpt:
      "Cantidad, frecuencia y tipo de alimento ideal según raza, peso y nivel de actividad.",
    date: "08 mar 2026",
    category: "Nutrición",
    image: blogAlimentacion,
  },
  {
    title: "Señales de que tu gato necesita ir al veterinario",
    excerpt:
      "Los gatos disimulan el dolor. Aprende a identificar síntomas tempranos.",
    date: "25 feb 2026",
    category: "Salud felina",
    image: blogGato,
  },
  {
    title: "Banco de sangre veterinario: cuándo se necesita",
    excerpt:
      "Las transfusiones pueden salvar vidas. Te explicamos cómo funciona en ALQUVET.",
    date: "10 feb 2026",
    category: "Emergencias",
    image: blogBancoSangre,
  },
];

function BlogPage() {
  return (
    <div className="bg-background">
      <section className="bg-hero-gradient py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Blog"
            title="Consejos para el cuidado de tu mascota"
            description="Artículos escritos por nuestro equipo veterinario para ayudarte a cuidar mejor a tu familia peluda."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative h-44 overflow-hidden bg-primary-soft">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-card px-3 py-1 text-xs font-semibold text-primary shadow-soft">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" /> {p.date}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                <Link
                  to="/blog"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Leer artículo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
