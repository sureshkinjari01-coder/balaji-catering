import { Star, Quote } from 'lucide-react';
import useInView from '@/hooks/useInView';
import { TESTIMONIALS } from '@/data';

export default function Testimonials() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="section-pad bg-cream-100">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <Quote className="h-4 w-4" /> Customer Reviews
          </span>
          <h2 className="mt-4 font-deva text-3xl font-bold text-maroon-700 md:text-4xl">
            What Our Satisfied Customers Say
          </h2>
        </div>

        <div
          ref={ref}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className={`card flex flex-col p-6 transition-all duration-700 hover:-translate-y-1.5 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center gap-1 text-saffron-500">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-saffron-500" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-saffron-200 pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon-700 font-deva font-bold text-white">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-maroon-700">
                    {t.name}
                  </span>
                  <span className="block text-xs text-ink-600">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
