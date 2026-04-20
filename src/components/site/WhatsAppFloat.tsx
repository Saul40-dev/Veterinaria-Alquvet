import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar cita por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-whatsapp-foreground shadow-card transition-all hover:scale-105 hover:shadow-glow sm:bottom-6 sm:right-6"
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp-foreground opacity-60" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-whatsapp-foreground" />
      </span>
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}
