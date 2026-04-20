import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";
import logoAlquvet from "@/assets/logo-alquvet.png";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/sobre-nosotros", label: "Sobre Nosotros" },
  { to: "/testimonios", label: "Testimonios" },
  { to: "/blog", label: "Blog" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md shadow-soft"
          : "bg-background/60 backdrop-blur",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <img
            src={logoAlquvet}
            alt="Logo ALQUVET Veterinaria y Pet Shop"
            className="h-12 w-12 rounded-xl object-contain bg-white shadow-soft transition-transform group-hover:scale-105"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-bold text-foreground sm:text-lg">
              ALQUVET
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
              Veterinaria · Carabayllo
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary"
              activeProps={{
                className:
                  "rounded-full px-3 py-2 text-sm font-semibold bg-primary-soft text-primary",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary/90 hover:shadow-card"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar cita
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-primary-soft"
                activeProps={{
                  className:
                    "rounded-xl px-3 py-2 text-sm font-semibold bg-primary-soft text-primary",
                }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar cita
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
