import { Phone, Instagram, MapPin, Heart } from 'lucide-react';
import { NAV_LINKS, PHONES, INSTAGRAM, ADDRESS } from '@/data';

export default function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-ink-900 text-cream-200">
      <div className="container-x px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-saffron-400 to-maroon-600 font-deva text-xl font-bold text-white">
                श्री
              </span>
              <span className="leading-tight">
                <span className="block font-deva text-lg font-bold text-cream-50">
                  श्री बालाजी कैटर्स
                </span>
                <span className="block text-xs text-saffron-300">
                  (जोधपुर वाले)
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream-200/70">
              A confluence of taste, service and trust. Adorning weddings and
              auspicious ceremonies for 25+ years with pure desi ghee delicacies.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-deva text-base font-semibold text-cream-50">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="text-sm text-cream-200/70 transition-colors hover:text-saffron-300"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-deva text-base font-semibold text-cream-50">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-cream-200/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron-400" />
                {ADDRESS}
              </li>
              {PHONES.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-saffron-400" />
                  <a href={`tel:${p}`} className="hover:text-saffron-300">
                    {p}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Instagram className="h-4 w-4 shrink-0 text-saffron-400" />
                <a
                  href={`https://instagram.com/${INSTAGRAM}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-saffron-300"
                >
                  @{INSTAGRAM}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream-200/10 pt-6 text-xs text-cream-200/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Shree Balaji Caterers (Jodhpur Wale). All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with Love <Heart className="h-3.5 w-3.5 fill-maroon-500 text-maroon-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
