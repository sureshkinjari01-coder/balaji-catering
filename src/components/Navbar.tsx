import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, PHONES } from '@/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 shadow-lg shadow-ink-900/10 backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between px-6 py-4 md:px-10">
        <button
          onClick={() => go('home')}
          className="flex items-center gap-3 text-left"
        >
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-saffron-400 to-maroon-600 font-deva text-xl font-bold shadow-lg transition-transform hover:scale-105 ${
              scrolled ? 'text-white' : 'text-white'
            }`}
          >
            श्री
          </span>
          <span className="leading-tight">
            <span
              className={`block font-deva text-lg font-bold ${
                scrolled ? 'text-maroon-700' : 'text-white'
              }`}
            >
              श्री बालाजी कैटर्स
            </span>
            <span
              className={`block text-xs font-medium ${
                scrolled ? 'text-saffron-600' : 'text-saffron-200'
              }`}
            >
              (जोधपुर वाले)
            </span>
            <span
              className={`mt-0.5 block text-[0.65rem] font-medium italic tracking-wide ${
                scrolled ? 'text-ink-600' : 'text-white/70'
              }`}
            >
              Mahindra Bhai Halwai
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`group relative font-medium transition-colors ${
                scrolled
                  ? 'text-ink-700 hover:text-maroon-600'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-saffron-500 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${PHONES[0]}`}
            className="btn-primary !py-2.5 !px-5 text-sm"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${scrolled ? 'text-maroon-700' : 'text-white'}`}
          aria-label="Menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-cream-50 transition-all duration-300 lg:hidden ${
          open ? 'max-h-[28rem] border-t border-saffron-200' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="rounded-xl px-4 py-3 text-left font-medium text-ink-800 transition-colors hover:bg-saffron-100 hover:text-maroon-700"
            >
              {l.label}
            </button>
          ))}
          <div className="mt-2 flex gap-3 px-2">
            {PHONES.map((p) => (
              <a
                key={p}
                href={`tel:${p}`}
                className="btn-primary flex-1 !py-2.5 text-sm"
              >
                <Phone className="h-4 w-4" />
                {p}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
