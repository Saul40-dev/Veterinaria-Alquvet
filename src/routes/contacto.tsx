import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, MessageCircle, Mail, Send, Instagram, Facebook } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SITE, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · Clínica Veterinaria ALQUVET Carabayllo" },
      {
        name: "description",
        content:
          "Visítanos en Av. Mariano Condorcanqui, Carabayllo. Llámanos al (01) 681 2395 o escríbenos por WhatsApp al +51 918 819 129.",
      },
      { property: "og:title", content: "Contacto · ALQUVET Carabayllo" },
      {
        property: "og:description",
        content:
          "Estamos cerca de ti. Encuentra dirección, teléfono, horarios y mapa de la veterinaria.",
      },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresa tu nombre")
    .max(80, "Nombre demasiado largo"),
  phone: z
    .string()
    .trim()
    .min(6, "Teléfono inválido")
    .max(20, "Teléfono demasiado largo")
    .regex(/^[0-9+()\s-]+$/, "Solo números y símbolos válidos"),
  pet: z.string().trim().min(1, "Indica el tipo de mascota").max(40),
  message: z
    .string()
    .trim()
    .min(5, "Cuéntanos un poco más")
    .max(800, "Mensaje demasiado largo"),
});

type FormState = z.infer<typeof contactSchema>;

function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    pet: "Perro",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const text = `Hola ALQUVET, soy ${parsed.data.name} (tel. ${parsed.data.phone}). Mascota: ${parsed.data.pet}. ${parsed.data.message}`;
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  return (
    <div className="bg-background">
      <section className="bg-hero-gradient py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contacto"
            title="Estamos cerca de ti en Carabayllo"
            description="Escríbenos, llámanos o visítanos. Estaremos felices de atender a tu mascota."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="space-y-4 lg:col-span-2">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <h3 className="font-display text-xl font-bold">Información</h3>
              <ul className="mt-5 space-y-4 text-sm">
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
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary"
                  >
                    WhatsApp {SITE.whatsappNumber}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="text-foreground">Lun – Sáb 9:00–20:00 · Dom 9:00–13:45</span>
                </li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a
                  href={SITE.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={SITE.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Ubicación de ALQUVET en Carabayllo"
                src="https://www.google.com/maps?q=Av.+Mariano+Condorcanqui+Carabayllo+Lima&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9"
              noValidate
            >
              <h3 className="font-display text-2xl font-bold">Envíanos tu consulta</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Completa el formulario y te contactaremos por WhatsApp.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field label="Nombre" error={errors.name}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    maxLength={80}
                    className="input"
                    placeholder="Tu nombre"
                  />
                </Field>
                <Field label="Teléfono" error={errors.phone}>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    maxLength={20}
                    className="input"
                    placeholder="987 654 321"
                  />
                </Field>
                <Field label="Tipo de mascota" error={errors.pet}>
                  <select
                    value={form.pet}
                    onChange={(e) => update("pet", e.target.value)}
                    className="input"
                  >
                    <option>Perro</option>
                    <option>Gato</option>
                    <option>Otro</option>
                  </select>
                </Field>
                <div className="hidden sm:block" />
                <Field label="Mensaje" error={errors.message} className="sm:col-span-2">
                  <textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    maxLength={800}
                    rows={5}
                    className="input resize-none"
                    placeholder="Cuéntanos cómo podemos ayudar a tu mascota"
                  />
                </Field>
              </div>

              <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary/90 hover:shadow-card"
                >
                  <Send className="h-4 w-4" /> Enviar consulta
                </button>
                {sent && (
                  <p className="text-sm font-medium text-primary">
                    ¡Listo! Abrimos WhatsApp con tu mensaje.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.875rem;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: var(--color-foreground);
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 4px color-mix(in oklab, var(--color-primary) 18%, transparent);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <span className="text-sm font-medium text-foreground">{label}</span>
      {children}
      {error && <span className="text-xs text-destructive">{error}</span>}
    </label>
  );
}
