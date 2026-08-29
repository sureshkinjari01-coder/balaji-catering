import { Phone, Utensils, ChevronDown, Star } from 'lucide-react';
import { PHONES } from '@/data';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/17294714/pexels-photo-17294714.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Royal buffet setup"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/80 via-maroon-900/70 to-ink-900/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(232,163,61,0.25),transparent_55%)]" />
      </div>

      {/* Decorative floating shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-32 h-64 w-64 rounded-full bg-saffron-500/20 blur-3xl animate-float-slow" />
        <div className="absolute right-10 top-1/3 h-48 w-48 rounded-full bg-maroon-500/30 blur-3xl animate-float-slow [animation-delay:2s]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 pt-24 text-center">
        <div className="animate-fade-up [animation-delay:0.1s]">
          <span className="inline-flex items-center gap-2 rounded-full border border-saffron-300/40 bg-saffron-500/10 px-5 py-2 text-saffron-200 backdrop-blur">
            <Star className="h-4 w-4 fill-saffron-300 text-saffron-300" />
            25+ Years of Rich Experience
          </span>
        </div>

        <h1
          className="mt-6 font-deva text-5xl font-bold leading-[1.15] text-white drop-shadow-lg md:text-7xl animate-fade-up [animation-delay:0.25s]"
        >
          A Confluence of Taste,
          <br />
          <span className="bg-gradient-to-r from-saffron-300 via-saffron-400 to-saffron-200 bg-clip-text text-transparent">
            Service & Trust
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-cream-100/90 md:text-xl animate-fade-up [animation-delay:0.4s]">
          25+ years of rich experience and 1,00,000+ successful weddings and
          auspicious events. Royal service from Shree Balaji Caterers with
          Rajasthani and Marwadi pure desi ghee delicacies.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row animate-fade-up [animation-delay:0.55s]">
          <a href={`tel:${PHONES[0]}`} className="btn-primary">
            <Phone className="h-5 w-5" />
            Contact to Order
          </a>
          <button onClick={() => scrollTo('menu')} className="btn-ghost">
            <Utensils className="h-5 w-5" />
            View Menu
          </button>
        </div>

        {/* Quick phones */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-cream-100/80 animate-fade-up [animation-delay:0.7s]">
          {PHONES.map((p) => (
            <a
              key={p}
              href={`tel:${p}`}
              className="flex items-center gap-2 font-medium transition-colors hover:text-saffron-300"
            >
              <Phone className="h-4 w-4" />
              {p}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70 transition-colors hover:text-white animate-float-slow"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
