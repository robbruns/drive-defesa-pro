import { MessageCircle } from "lucide-react";

export const WHATSAPP_URL =
  "https://wa.me/5547996491330?text=Ol%C3%A1%2C%20recebi%20uma%20notifica%C3%A7%C3%A3o%20relacionada%20%C3%A0%20minha%20CNH%20e%20gostaria%20de%20uma%20an%C3%A1lise.";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full gradient-whatsapp text-white shadow-whatsapp animate-float hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.68_0.18_150)] opacity-30" />
    </a>
  );
}
