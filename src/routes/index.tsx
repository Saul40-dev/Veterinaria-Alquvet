import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageCircle,
  Stethoscope,
  HeartPulse,
  Scissors,
  ShoppingBag,
  Syringe,
  Heart,
  ShieldCheck,
  Wallet,
  Star,
  ArrowRight,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";
import heroImg from "@/assets/hero-vet.jpg";
import petsImg from "@/assets/about-pets.jpg";
import { whatsappUrl, SITE } from "@/lib/site";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica Veterinaria ALQUVET Carabayllo · Medicina con corazón" },
      {
        name: "description",
        content:
          "Veterinaria en Carabayllo: consulta, cirugía, banco de sangre, peluquería y tienda. Atención cálida y profesional para tu mascota. Agenda por WhatsApp.",
      },
      { property: "og:title", content: "Clínica Veterinaria ALQUVET · Carabayllo" },
      {
        property: "og:description",
        content:
          "Medicina veterinaria especializada con atención cálida en Carabayllo, Lima. Agenda tu cita por WhatsApp.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Stethoscope,
    title: "Medicina General",
    desc: "Consulta veterinaria, vacunas y desparasitación con seguimiento personalizado.",
  },
  {
    icon: HeartPulse,
    title: "Medicina Interna",
    desc: "Diagnóstico de enfermedades y tratamientos especializados para tu mascota.",
  },
  {
    icon: Syringe,
    title: "Cirugía Veterinaria",
    desc: "Cirugías simples y complejas, banco de sangre y transfusiones sanguíneas.",
  },
  {
    icon: Scissors,
    title: "Estética y Cuidado",
    desc: "Baño, peluquería canina y profilaxis dental con ultrasonido.",
  },
  {
    icon: ShoppingBag,
    title: "Tienda Veterinaria",
    desc: "Medicamentos, alimentos premium y accesorios para perros y gatos.",
  },
];

const reasons = [
  {
    icon: Heart,
    title: "Atención con amor",
    desc: "Tratamos a cada mascota como parte de nuestra familia.",
  },
  {
    icon: Stethoscope,
    title: "Medicina especializada",
    desc: "Equipo veterinario capacitado y con amplia experiencia.",
  },
  {
    icon: ShieldCheck,
    title: "Servicios completos",
    desc: "Consulta, cirugía, laboratorio, estética y tienda.",
  },
  {
    icon: Wallet,
    title: "Precios accesibles",
    desc: "Calidad veterinaria a precios justos y transparentes.",
  },
];

const testimonials = [
  {
    name: "María Pérez",
    text: "La mejor veterinaria de la zona, con atención excelente y precios accesibles.",
  },
  {
    name: "Carlos Ramírez",
    text: "Operaron a mi mascota con gran profesionalismo. Muy recomendados.",
  },
  {
    name: "Lucía Torres",
    text: "Personal muy amable y atentos con mis mascotas. Excelente experiencia.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient">
        {/* animated blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl animate-blob delay-300" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-secondary/20 blur-3xl animate-blob delay-500" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Veterinaria en Carabayllo · Lima
            </span>
            <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl animate-fade-in-up delay-100">
              Porque tu mascota es{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                parte de tu familia
              </span>
            </h1>
            <p className="max-w-xl text-base text-muted-foreground sm:text-lg animate-fade-in-up delay-200">
              En ALQUVET brindamos medicina veterinaria especializada con atención cálida y
              profesional. Cuidamos su salud como si fuera nuestra.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row animate-fade-in-up delay-300">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-card transition-all hover:shadow-glow hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <MessageCircle className="h-5 w-5 transition-transform group-hover:rotate-12" />
                Agendar cita por WhatsApp
              </a>
              <Link
                to="/servicios"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/80 px-6 py-3.5 text-base font-semibold text-foreground backdrop-blur transition-all hover:border-primary hover:text-primary hover:gap-3"
              >
                Ver servicios
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground animate-fade-in-up delay-400">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span>
                  <strong className="text-foreground">4.8/5</strong> · +30 reseñas en Google
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> Atención todos los días
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up delay-200">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-primary/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-card transition-transform duration-500 hover:scale-[1.01]">
              <img
                src={heroImg}
                alt="Veterinaria atendiendo a un perro en clínica ALQUVET Carabayllo"
                width={1600}
                height={1100}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-accent/10" />
            </div>
            <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-border bg-card p-4 shadow-card sm:block animate-float">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Heart className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">+5,000 mascotas</p>
                  <p className="text-xs text-muted-foreground">atendidas con amor</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-border bg-card p-4 shadow-card sm:block animate-float-slow">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-warm text-warm-foreground">
                  <Syringe className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Cirugía especializada</p>
                  <p className="text-xs text-muted-foreground">Banco de sangre</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip — elimina espacios en blanco entre hero y about */}
        <div className="relative mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 rounded-3xl border border-border bg-card/80 p-4 shadow-soft backdrop-blur sm:grid-cols-4 sm:gap-6 sm:p-6">
            {[
              { n: "+5K", l: "Mascotas atendidas" },
              { n: "10+", l: "Años de experiencia" },
              { n: "4.8★", l: "Reseñas en Google" },
              { n: "24/7", l: "Soporte por WhatsApp" },
            ].map((s, i) => (
              <div
                key={s.l}
                className={`group flex flex-col items-center gap-1 rounded-2xl px-3 py-4 text-center transition-all hover:-translate-y-0.5 hover:bg-primary-soft animate-fade-in-up delay-${(i + 1) * 100}`}
              >
                <span className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
                  {s.n}
                </span>
                <span className="text-xs font-medium text-muted-foreground sm:text-sm">
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE — banda continua de servicios, sin espacios muertos */}
      <section aria-hidden="true" className="border-y border-border bg-card overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap py-4 animate-marquee">
          {[...Array(2)].flatMap((_, dup) =>
            [
              "🐾 Consulta veterinaria",
              "💉 Vacunación",
              "🩺 Medicina interna",
              "🔪 Cirugía especializada",
              "🦷 Profilaxis dental",
              "✂️ Peluquería canina",
              "🩸 Banco de sangre",
              "🛒 Tienda veterinaria",
            ].map((t) => (
              <span
                key={`${dup}-${t}`}
                className="flex items-center gap-3 text-sm font-semibold text-muted-foreground"
              >
                {t}
                <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
              </span>
            )),
          )}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 -z-10 rounded-[2.2rem] bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-card transition-transform duration-500 hover:scale-[1.01]">
              <img
                src={petsImg}
                alt="Perro y gato felices, mascotas atendidas en ALQUVET"
                width={1200}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 right-6 hidden rounded-2xl border border-border bg-card px-5 py-3 shadow-card sm:flex items-center gap-3 animate-float">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Heart className="h-4 w-4" />
              </span>
              <div className="text-xs">
                <p className="font-semibold text-foreground">Trato familiar</p>
                <p className="text-muted-foreground">desde 2014</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Sobre nosotros"
              title="Tu veterinaria de confianza en Carabayllo"
              description="Somos un equipo apasionado por el bienestar animal. Combinamos medicina veterinaria avanzada con un trato humano para que tu mascota reciba la mejor atención."
              align="left"
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Stethoscope, t: "Equipo profesional", d: "Veterinarios certificados." },
                { icon: Heart, t: "Atención personalizada", d: "Trato cálido y cercano." },
                { icon: Syringe, t: "Tecnología médica", d: "Equipamiento moderno." },
                { icon: ShieldCheck, t: "Cirugías complejas", d: "Experiencia comprobada." },
              ].map((it) => (
                <li
                  key={it.t}
                  className="group flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
                >
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <it.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{it.t}</p>
                    <p className="text-sm text-muted-foreground">{it.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                to="/sobre-nosotros"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                Conoce más sobre nuestra clínica <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="bg-paw-pattern py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nuestros servicios"
            title="Cuidado integral para tu mascota"
            description="Una clínica veterinaria completa con todo lo que tu perro o gato necesita."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-card"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10" />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6 group-hover:scale-110">
                  <s.icon className="h-7 w-7" />
                </span>
                <h3 className="relative mt-5 text-xl font-bold text-foreground">{s.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            ))}
            <Link
              to="/servicios"
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-dashed border-primary/40 bg-primary-soft p-7 text-primary shadow-soft transition-all hover:-translate-y-2 hover:bg-primary hover:text-primary-foreground hover:shadow-card"
            >
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-primary/10 transition-all duration-500 group-hover:scale-150" />
              <div className="relative">
                <h3 className="text-xl font-bold">Ver todos los servicios</h3>
                <p className="mt-2 text-sm opacity-90">
                  Conoce el detalle completo de cada atención.
                </p>
              </div>
              <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                Explorar <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="¿Por qué elegirnos?"
            title="Medicina con corazón, calidad sin compromisos"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className={`group flex flex-col items-start gap-4 rounded-3xl bg-surface p-7 ring-1 ring-border transition-all duration-300 hover:-translate-y-2 hover:bg-card hover:ring-primary/40 hover:shadow-card animate-fade-in-up delay-${(i + 1) * 100}`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <r.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold text-foreground">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-section-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonios"
            title="Familias que confían en ALQUVET"
            description="Más de 30 reseñas con 4.8 estrellas en Google."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className={`group relative flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card animate-fade-in-up delay-${(i + 1) * 100}`}
              >
                <span className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-2xl font-bold text-accent-foreground shadow-soft">
                  “
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-base text-foreground">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft font-bold text-primary">
                    {t.name.charAt(0)}
                  </span>
                  <span className="text-sm font-semibold text-foreground">{t.name}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/testimonios"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary hover:gap-3"
            >
              Ver más testimonios <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BAND — sin espacios en blanco */}
      <section className="relative overflow-hidden bg-primary py-14 text-primary-foreground">
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-blob delay-300" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
          <div>
            <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
              ¿Tu mascota necesita atención hoy?
            </h3>
            <p className="mt-2 text-primary-foreground/85">
              Escríbenos por WhatsApp y agenda tu cita en menos de 1 minuto.
            </p>
          </div>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-base font-bold text-accent-foreground shadow-card transition-all hover:scale-105"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent-foreground opacity-60 animate-ping" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-accent-foreground" />
            </span>
            <MessageCircle className="h-5 w-5 transition-transform group-hover:rotate-12" />
            Agendar cita por WhatsApp
          </a>
        </div>
      </section>

      {/* HOURS + QUICK CONTACT */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground shadow-card">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary-foreground/10 blur-2xl" />
            <h3 className="font-display text-2xl font-bold sm:text-3xl">Horarios de atención</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Estamos disponibles para tu mascota cuando más lo necesita.
            </p>
            <ul className="mt-6 space-y-4">
              {SITE.hours.map((h) => (
                <li
                  key={h.days}
                  className="flex items-center justify-between rounded-2xl bg-primary-foreground/10 px-5 py-4 backdrop-blur"
                >
                  <span className="flex items-center gap-3 font-medium">
                    <Clock className="h-5 w-5" /> {h.days}
                  </span>
                  <span className="font-semibold">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-primary-foreground/85">
              Si tu mascota necesita atención, contáctanos por WhatsApp.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-soft transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              Escribir por WhatsApp
            </a>
          </div>

          <div className="rounded-3xl border border-border bg-card p-10 shadow-soft">
            <h3 className="font-display text-2xl font-bold sm:text-3xl">Visítanos en Carabayllo</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Te esperamos en nuestra clínica con un equipo listo para atenderte.
            </p>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="text-foreground">{SITE.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <a href={`tel:${SITE.phoneTel}`} className="text-foreground hover:text-primary">
                  {SITE.phone}
                </a>
              </li>
            </ul>
            <Link
              to="/contacto"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Ver mapa y formulario <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function PawDot() {
  return <span className="h-1.5 w-1.5 rounded-full bg-primary" />;
}
