import { Phone, MessageCircle } from 'lucide-react';
import { PHONES } from '@/data';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/91${PHONES[0]}`}
        target="_blank"
        rel="noreferrer"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-xl shadow-green-700/30 transition-all hover:scale-110 hover:bg-green-700"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-16 whitespace-nowrap rounded-lg bg-ink-900 px-3 py-1.5 text-xs font-medium text-cream-50 opacity-0 transition-opacity group-hover:opacity-100">
          WhatsApp Chat
        </span>
      </a>
      <a
        href={`tel:${PHONES[0]}`}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-saffron-500 text-white shadow-xl shadow-saffron-600/30 transition-all hover:scale-110 hover:bg-saffron-600"
        aria-label="Call Now"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute right-16 whitespace-nowrap rounded-lg bg-ink-900 px-3 py-1.5 text-xs font-medium text-cream-50 opacity-0 transition-opacity group-hover:opacity-100">
          Call Now
        </span>
      </a>
    </div>
  );
}
