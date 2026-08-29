import { useState } from 'react';
import { Quote, ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];

  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-20 md:py-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-maroon-700/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-saffron-500/15 blur-3xl" />
      </div>

      <div className="container-x relative px-6 md:px-10">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-saffron-400">
            <span className="h-1.5 w-1.5 rounded-full bg-saffron-500" />
            Testimonial
            <span className="h-1.5 w-1.5 rounded-full bg-saffron-500" />
          </span>
          <h2 className="mt-4 font-deva text-3xl font-bold text-white md:text-4xl">
            What People's Say About Us?
          </h2>
        </div>

        {/* Carousel */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — quote + nav */}
          <div className="relative">
            {/* Large decorative quote mark */}
            <Quote
              className="absolute -top-8 -left-2 h-24 w-24 text-saffron-500/15"
              fill="currentColor"
            />

            <div className="relative">
              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: current.rating }).map((_, s) => (
                  <Star
                    key={s}
                    className="h-5 w-5 fill-saffron-500 text-saffron-500"
                  />
                ))}
              </div>

              {/* Review text */}
              <blockquote
                key={index}
                className="mt-6 animate-fade-in text-lg leading-relaxed text-cream-100/90 md:text-xl"
              >
                "{current.text}"
              </blockquote>

              {/* Reviewer name */}
              <div className="mt-8">
                <p className="font-deva text-xl font-bold text-saffron-400">
                  {current.name}
                </p>
                <p className="mt-1 text-sm text-cream-200/60">{current.role}</p>
              </div>

              {/* Arrow nav */}
              <div className="mt-10 flex items-center gap-4">
                <button
                  onClick={prev}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-saffron-500 hover:bg-saffron-500 hover:text-white"
                  aria-label="Previous review"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-saffron-500 hover:bg-saffron-500 hover:text-white"
                  aria-label="Next review"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
                {/* Dots */}
                <div className="ml-2 flex items-center gap-2">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === index
                          ? 'w-6 bg-saffron-500'
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to review ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — chef image */}
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="https://images.pexels.com/photos/8818722/pexels-photo-8818722.jpeg?auto=compress&cs=tinysrgb&h=900&w=600"
                alt="Chef holding food tray"
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
            </div>
            {/* Floating accent badge */}
            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl bg-saffron-500 px-5 py-4 shadow-2xl">
              <div className="text-center">
                <p className="font-deva text-2xl font-bold text-white">25+</p>
                <p className="text-[0.65rem] font-medium uppercase tracking-wider text-white/80">
                  Years
                </p>
              </div>
            </div>
            {/* Decorative ring */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border-4 border-saffron-500/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
