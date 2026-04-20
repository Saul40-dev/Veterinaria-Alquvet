import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";
import logoAlquvet from "@/assets/logo-alquvet.png";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-section-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoAlquvet}
              alt="Logo ALQUVET Veterinaria y Pet Shop"
              className="h-12 w-12 rounded-xl object-contain bg-white shadow-soft"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-bold">ALQUVET</span>
              <span className="text-xs text-muted-foreground">Carabayllo · Lima</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {SITE.tagline} Medicina veterinaria especializada con atención cálida y profesional.
          </p>
          <div className="mt-5 flex gap-3">
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

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Contáctanos
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-primary" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 flex-none text-primary" />
              <a href={`tel:${SITE.phoneTel}`} className="hover:text-primary">
                {SITE.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <MessageCircle className="mt-0.5 h-4 w-4 flex-none text-primary" />
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                WhatsApp {SITE.whatsappNumber}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Horarios
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {SITE.hours.map((h) => (
              <li key={h.days} className="flex gap-2">
                <Clock className="mt-0.5 h-4 w-4 flex-none text-primary" />
                <span>
                  <span className="block font-medium text-foreground">{h.days}</span>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Enlaces
          </h4>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/servicios" className="hover:text-primary">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/sobre-nosotros" className="hover:text-primary">
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link to="/testimonios" className="hover:text-primary">
                Testimonios
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-primary">
                Contacto
              </Link>
            </li>
          </ul>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary/90"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar cita
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.</p>
          <p className="font-medium text-foreground">{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
