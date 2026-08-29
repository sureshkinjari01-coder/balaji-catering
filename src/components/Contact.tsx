import { Phone, MapPin, Instagram, MessageCircle, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { PHONES, INSTAGRAM, ADDRESS } from '@/data';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', event: '', date: '', message: '' });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', phone: '', event: '', date: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const field =
    'w-full rounded-xl border border-saffron-200 bg-cream-50 px-4 py-3 text-sm text-ink-900 placeholder-ink-600/50 outline-none transition-all focus:border-saffron-500 focus:ring-2 focus:ring-saffron-300';

  return (
    <section id="contact" className="section-pad bg-cream-50">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Info */}
          <div>
            <span className="eyebrow">
              <MessageCircle className="h-4 w-4" /> Get in Touch
            </span>
            <h2 className="mt-4 font-deva text-3xl font-bold text-maroon-700 md:text-4xl">
              Book Your Next Event
            </h2>
            <p className="mt-4 text-ink-700">
              Contact us for weddings, religious ceremonies or any special
              occasion — we will prepare the best menu according to your
              budget and preference.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl bg-saffron-50 p-4 ring-1 ring-saffron-200">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-maroon-700 text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-maroon-700">Main Address</p>
                  <p className="text-sm text-ink-700">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-saffron-50 p-4 ring-1 ring-saffron-200">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-maroon-700 text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-maroon-700">Phone Numbers</p>
                  <div className="flex flex-wrap gap-x-4">
                    {PHONES.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p}`}
                        className="text-sm text-ink-700 transition-colors hover:text-saffron-600"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-saffron-50 p-4 ring-1 ring-saffron-200">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-maroon-700 text-white">
                  <Instagram className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-maroon-700">Instagram</p>
                  <a
                    href={`https://instagram.com/${INSTAGRAM}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-ink-700 transition-colors hover:text-saffron-600"
                  >
                    @{INSTAGRAM}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-saffron-50 p-4 ring-1 ring-saffron-200">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-maroon-700 text-white">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-maroon-700">Service Hours</p>
                  <p className="text-sm text-ink-700">8:00 AM — 10:00 PM (All 7 Days)</p>
                </div>
              </div>
            </div>

            {/* WhatsApp quick buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              {PHONES.map((p) => (
                <a
                  key={p}
                  href={`https://wa.me/91${p}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp {p}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="card p-7 md:p-9">
            <h3 className="font-deva text-2xl font-bold text-maroon-700">
              Order / Enquiry Form
            </h3>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  className={field}
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  required
                  className={field}
                  placeholder="Phone Number"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className={field}
                  placeholder="Event Type (Wedding, Religious...)"
                  value={form.event}
                  onChange={(e) => setForm({ ...form, event: e.target.value })}
                />
                <input
                  type="date"
                  className={field}
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </div>
              <textarea
                rows={4}
                className={field}
                placeholder="Describe your requirements in detail..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <button type="submit" className="btn-primary w-full">
                <Send className="h-5 w-5" />
                Send Message
              </button>
              {sent && (
                <p className="rounded-xl bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700 ring-1 ring-green-200">
                  Thank you! Your message has been received. We will contact you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
