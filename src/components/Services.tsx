import {
  Heart,
  Gem,
  Cake,
  Music,
  PartyPopper,
  Home,
  Briefcase,
  Utensils,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import useInView from '@/hooks/useInView';
import { SERVICES, PHONES } from '@/data';

const ICONS = {
  Heart,
  Gem,
  Cake,
  Music,
  PartyPopper,
  Home,
  Briefcase,
  Utensils,
  Sparkles,
} as const;

export default function Services() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="services" className="section-pad bg-cream-100">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <Utensils className="h-4 w-4" /> Our Services
          </span>
          <h2 className="mt-4 font-deva text-3xl font-bold text-maroon-700 md:text-4xl">
            Special Catering for Every Occasion
          </h2>
          <p className="mt-4 text-ink-700">
            From weddings to corporate events — we make every occasion
            unforgettable with taste and elegant decoration.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <article
                key={s.title}
                className={`group flex flex-col overflow-hidden rounded-[1.75rem] bg-[#F9F5ED] shadow-md ring-1 ring-ink-900/5 transition-all duration-700 hover:-translate-y-1.5 hover:shadow-2xl ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                {/* Image with rounded top */}
                <div className="relative h-52 overflow-hidden rounded-t-[1.75rem]">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F9F5ED] via-[#F9F5ED]/10 to-transparent" />
                  <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-maroon-700 shadow-lg backdrop-blur transition-all duration-300 group-hover:bg-maroon-700 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="absolute bottom-3 right-4 rounded-full bg-saffron-500/95 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white shadow">
                    {s.subtitle}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-deva text-xl font-bold leading-snug text-maroon-700">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                    {s.desc}
                  </p>
                  <a
                    href={`tel:${PHONES[0]}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-saffron-600 transition-colors hover:text-maroon-700"
                  >
                    Book Now
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
