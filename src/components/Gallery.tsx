import { Camera, X } from 'lucide-react';
import { useState } from 'react';
import useInView from '@/hooks/useInView';
import { GALLERY } from '@/data';

export default function Gallery() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-pad bg-cream-50">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <Camera className="h-4 w-4" /> Gallery
          </span>
          <h2 className="mt-4 font-deva text-3xl font-bold text-maroon-700 md:text-4xl">
            Glimpses of Our Events
          </h2>
          <p className="mt-4 text-ink-700">
            High-quality photos of our grand events, buffet setups and dishes.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[240px] lg:grid-cols-4"
        >
          {GALLERY.map((g, i) => (
            <button
              key={g.src}
              onClick={() => setActive(g.src)}
              className={`group relative overflow-hidden rounded-2xl shadow-md transition-all duration-700 ${
                g.span || ''
              } ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={g.src}
                alt={g.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
              <span className="absolute bottom-3 left-4 right-4 text-left text-sm font-medium text-cream-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {g.alt}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/90 p-6 backdrop-blur animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute right-6 top-6 text-white/80 hover:text-white"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={active}
            alt="Gallery"
            className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
