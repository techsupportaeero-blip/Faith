import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Globe, Facebook, Instagram, Linkedin, Twitter, MessageCircle, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Say hello. Then let's build something."
        subtitle="Whether you’re a corporate exploring CSR partnership, a school looking to join, or a curious human — we reply personally, usually within a working day."
        image="/images/team.jpg"
      />

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1.1fr_1fr] gap-10">
        {/* Form */}
        <Reveal>
          <div className="bg-white rounded-3xl border border-navy/10 p-8 md:p-10 shadow-xl">
            <p className="ornament mb-4">Get In Touch</p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy">Send us a message</h2>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000); }}
              className="mt-8 grid gap-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Your Name" name="name" placeholder="e.g., Anaya Sharma" required />
                <Field label="Email" name="email" type="email" placeholder="you@work.com" required />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Phone" name="phone" type="tel" placeholder="+91 98xxx xxxxx" />
                <Field label="Organisation" name="org" placeholder="Company / School / NGO" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-navy/60">I'm interested in</label>
                <select className="mt-2 w-full bg-cream-warm border border-navy/10 rounded-2xl px-5 py-3.5 outline-none focus:border-gold">
                  <option>Corporate CSR partnership</option>
                  <option>Donating personally</option>
                  <option>Volunteering</option>
                  <option>Joining as an implementing school</option>
                  <option>Media / press enquiry</option>
                  <option>Something else</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-navy/60">Your message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us a bit about what you're thinking..."
                  className="mt-2 w-full bg-cream-warm border border-navy/10 rounded-2xl px-5 py-4 outline-none focus:border-gold resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-navy text-cream hover:bg-gold hover:text-navy transition font-semibold rounded-full py-4 flex items-center justify-center gap-2 shadow-lg"
              >
                {sent ? (<><CheckCircle2 className="w-5 h-5" /> Thanks! We’ll be in touch.</>) : (<><Send className="w-4 h-4" /> Send message</>)}
              </button>
            </form>
          </div>
        </Reveal>

        {/* Info column */}
        <Reveal delay={0.15}>
          <div className="space-y-4">
            <div className="bg-navy text-cream rounded-3xl p-8">
              <h3 className="font-serif text-2xl mb-6">Reach us directly</h3>
              <ul className="space-y-5">
                <InfoRow icon={MapPin} title="Head Office">147/2, Opposite A-Block, Bagdola Sector- 8,<br />Dwarka, New Delhi, 110077, India</InfoRow>
                <InfoRow icon={Phone} title="Phone"><a href="tel:+918319733715" className="hover:text-gold">+91 831 973 3715</a></InfoRow>
                <InfoRow icon={Mail} title="Email"><a href="mailto:Info@faithfoundation.ac.in" className="hover:text-gold">Info@faithfoundation.ac.in</a></InfoRow>
                <InfoRow icon={Globe} title="Website">www.faith.ac.in</InfoRow>
              </ul>
              <div className="mt-8 pt-6 border-t border-cream/10">
                <p className="text-xs uppercase tracking-widest text-cream/60 mb-3">Follow the journey</p>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, url: 'https://www.facebook.com/people/Faith-Foundation/61594149681867/' },
                    { icon: Instagram, url: 'https://www.instagram.com/faithfoundation6876/' },
                    { icon: Linkedin, url: 'https://www.linkedin.com/company/faith-foundation321/' },
                    { icon: Twitter, url: 'https://x.com/FaithFoundmbqf' },
                    { icon: Mail, url: 'mailto:#' },
                  ].map(({ icon: Icon, url }, i) => (
                    <a key={i} href={url} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:text-navy hover:border-gold transition">
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/918319733715?text=${encodeURIComponent('Hi FAITH team!')}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-[#25D366] text-white rounded-3xl p-6 hover:brightness-110 transition group"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center"><MessageCircle className="w-7 h-7" fill="currentColor" /></div>
              <div className="flex-1">
                <p className="font-serif text-xl leading-tight">Chat on WhatsApp</p>
                <p className="text-white/80 text-sm">Fastest way to reach us — replies in minutes.</p>
              </div>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>

            <div className="bg-cream-warm rounded-3xl overflow-hidden border border-navy/10">
              <iframe
                title="Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.601%2C12.966%2C77.617%2C12.977&layer=mapnik&marker=12.9716%2C77.6099"
                className="w-full h-64 border-0"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Field({ label, name, type = 'text', placeholder, required = false }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-navy/60">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full bg-cream-warm border border-navy/10 rounded-2xl px-5 py-3.5 outline-none focus:border-gold"
      />
    </div>
  );
}

function InfoRow({ icon: Icon, title, children }: { icon: typeof Mail; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <div className="w-10 h-10 rounded-full bg-cream/10 text-gold flex items-center justify-center shrink-0"><Icon className="w-4 h-4" /></div>
      <div>
        <p className="text-xs uppercase tracking-widest text-cream/50">{title}</p>
        <p className="text-cream/90 mt-1 leading-relaxed">{children}</p>
      </div>
    </li>
  );
}
