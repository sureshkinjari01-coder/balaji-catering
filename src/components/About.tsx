import { ChefHat, Leaf, Handshake, ArrowRight } from 'lucide-react';
import useInView from '@/hooks/useInView';

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  const stats = [
    { icon: ChefHat, value: '25+ Years', label: 'Of Experience' },
    { icon: Leaf, value: '1,00,000+', label: 'Successful Events' },
    { icon: Handshake, value: '100%', label: 'Pure & Hygienic' },
  ];

  return (
    <section id="about" className="section-pad bg-cream-50">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — two vertical rounded images with center badge */}
          <div
            ref={ref}
            className={`relative mx-auto max-w-md transition-all duration-1000 lg:max-w-none ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="flex items-end justify-center gap-4 sm:gap-6">
              <div className="overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-ink-900/10">
                <img
                  src="https://images.pexels.com/photos/6182692/pexels-photo-6182692.jpeg?auto=compress&cs=tinysrgb&h=900&w=600"
                  alt="Halwai preparing traditional dishes"
                  className="h-[360px] w-[180px] object-cover transition-transform duration-700 hover:scale-105 sm:h-[440px] sm:w-[230px]"
                />
              </div>
              <div className="overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-ink-900/10">
                <img
                  src="https://images.pexels.com/photos/37976939/pexels-photo-37976939.jpeg?auto=compress&cs=tinysrgb&h=900&w=600"
                  alt="Royal wedding buffet setup"
                  className="h-[420px] w-[180px] object-cover transition-transform duration-700 hover:scale-105 sm:h-[500px] sm:w-[230px]"
                />
              </div>
            </div>

            {/* Center overlapping maroon badge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-gradient-to-br from-maroon-600 to-maroon-800 text-center shadow-2xl ring-4 ring-cream-50 sm:h-32 sm:w-32">
                <span className="font-deva text-xs font-semibold uppercase tracking-wider text-saffron-300">
                  Since
                </span>
                <span className="font-deva text-3xl font-bold text-white sm:text-4xl">
                  1999
                </span>
                <span className="mt-0.5 text-[0.65rem] font-medium uppercase tracking-wider text-saffron-200">
                  25+ Years
                </span>
              </div>
            </div>
          </div>

          {/* Right — text + stat cards + button */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-saffron-600">
              <span className="h-2 w-2 rounded-full bg-saffron-500" />
              About Us
            </span>

            <h2 className="mt-4 font-deva text-3xl font-bold leading-tight text-maroon-700 md:text-4xl">
              Jodhpur Ka Swad, Banswara Ki Seva
            </h2>

            <p className="mt-5 text-base leading-relaxed text-ink-700 md:text-lg">
              Shree Balaji Caterers (Jodhpur Wale) has been adorning
              weddings, auspicious ceremonies and grand events for 25+ years
              with pure desi ghee delicacies. Our expert halwai team — Mahendra
              Bhai Halwai and Anil Bhai Halwai — preserves the traditional
              flavors while serving trust in every thali.
            </p>

            {/* 3 floating white stat cards */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((s, i) => (
                <div
                  key={s.value}
                  className={`flex flex-col items-center gap-2 rounded-2xl bg-white px-4 py-5 text-center shadow-lg shadow-ink-900/10 ring-1 ring-ink-900/5 transition-all duration-700 hover:-translate-y-1 hover:shadow-xl ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${300 + i * 120}ms` }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-saffron-50 text-saffron-600 ring-1 ring-saffron-200">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="font-deva text-base font-bold text-maroon-700">
                    {s.value}
                  </span>
                  <span className="text-xs font-medium text-ink-600">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* More About Us button */}
            <button
              onClick={() =>
                document
                  .getElementById('services')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="mt-9 inline-flex items-center gap-2.5 rounded-full border-2 border-maroon-700 px-7 py-3 font-semibold text-maroon-700 transition-all duration-300 hover:bg-maroon-700 hover:text-white"
            >
              More About Us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
