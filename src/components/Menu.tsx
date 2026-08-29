import { Utensils, Check } from 'lucide-react';
import useInView from '@/hooks/useInView';
import { MENU_GROUPS } from '@/data';

export default function Menu() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="menu" className="relative section-pad overflow-hidden bg-ink-900">
      {/* Decorative */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-saffron-500 blur-3xl" />
        <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-maroon-500 blur-3xl" />
      </div>

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center text-saffron-400">
            <Utensils className="h-4 w-4" /> Dishes & Catering Setup
          </span>
          <h2 className="mt-4 font-deva text-3xl font-bold text-cream-50 md:text-4xl">
            Our Special Dishes
          </h2>
          <p className="mt-4 text-cream-200/80">
            Rajasthani and Marwadi pure desi ghee delicacies, royal buffet
            and decoration counters, sweets, mocktails, ice cream and chaat stalls.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {MENU_GROUPS.map((group, i) => (
            <div
              key={group.title}
              className={`rounded-3xl bg-gradient-to-b from-cream-50 to-cream-200 p-6 shadow-xl transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <h3 className="font-deva text-lg font-bold text-maroon-700">
                {group.title}
              </h3>
              <p className="text-xs font-medium uppercase tracking-wider text-saffron-600">
                {group.subtitle}
              </p>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-ink-800"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-saffron-500 text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-cream-200/70">
          This is only an indicative menu — a special thali is prepared
          according to your preference and budget. Contact us for details.
        </p>
      </div>
    </section>
  );
}
