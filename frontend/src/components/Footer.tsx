import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Globe, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-navy-deep text-cream mt-16 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #C8A24A 0px, transparent 1px), radial-gradient(circle at 80% 60%, #C8A24A 0px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[300px] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-8">
        {/* CTA banner */}
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 items-center pb-14 border-b border-cream/10">
          <div>
            <p className="ornament mb-4">Join The Movement</p>
            <h3 className="font-serif text-3xl md:text-4xl leading-tight">
              Together, we can shape a<br /> generation of <span className="italic text-gold">changemakers</span>.
            </h3>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }} className="flex flex-col sm:flex-row gap-3">
            <input
              required
              type="email"
              placeholder="you@work.com"
              className="flex-1 bg-cream/10 border border-cream/20 focus:border-gold rounded-full px-5 py-3 text-sm placeholder:text-cream/50 outline-none transition"
            />
            <button className="bg-gold text-navy hover:bg-gold-light transition font-semibold rounded-full px-6 py-3 text-sm flex items-center justify-center gap-2">
              Subscribe <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 py-14">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-cream rounded-lg p-2">
                <img src="/images/faith-logo.png" alt="FAITH" className="h-12 w-auto" />
              </div>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed max-w-sm">
              FAITH — Foundation for Advancement of Innovation, Technology and Higher Education.
              A Section-8 CSR company committed to unlocking human potential.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Facebook, url: 'https://www.facebook.com/people/Faith-Foundation/61594149681867/', label: 'Facebook' },
                { icon: Instagram, url: 'https://www.instagram.com/faithfoundation6876/', label: 'Instagram' },
                { icon: Linkedin, url: 'https://www.linkedin.com/company/faith-foundation321/', label: 'LinkedIn' },
                { icon: Twitter, url: 'https://x.com/FaithFoundmbqf', label: 'Twitter' },
                { icon: Mail, url: 'mailto:#', label: 'Email' },
              ].map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:text-navy hover:border-gold transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-gold mb-5 text-lg">Explore</h4>
            <ul className="space-y-3 text-sm text-cream/75">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/programs', label: 'Our Programs' },
                { to: '/impact', label: 'Impact Stories' },
              ].map((l) => (
                <li key={l.to}><Link to={l.to} className="hover:text-gold transition">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-serif text-gold mb-5 text-lg">Engage</h4>
            <ul className="space-y-3 text-sm text-cream/75">
              {[
                { to: '/partners', label: 'Partner With Us' },
                { to: '/get-involved', label: 'Volunteer' },
                { to: '/donate', label: 'Donate' },
                { to: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.to}><Link to={l.to} className="hover:text-gold transition">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-gold mb-5 text-lg">Reach Out</h4>
            <ul className="space-y-4 text-sm text-cream/80">
              <li className="flex gap-3"><MapPin className="w-4 h-4 mt-1 text-gold shrink-0" /><span>147/2, Opposite A-Block, Bagdola Sector- 8,<br />Dwarka, New Delhi, 110077, India</span></li>
              <li className="flex gap-3"><Phone className="w-4 h-4 mt-1 text-gold shrink-0" /><a href="tel:+918319733715" className="hover:text-gold transition">+91 831 973 3715</a></li>
              <li className="flex gap-3"><Mail className="w-4 h-4 mt-1 text-gold shrink-0" /><a href="mailto:Info@faithfoundation.ac.in" className="hover:text-gold transition">Info@faithfoundation.ac.in</a></li>
              <li className="flex gap-3"><Globe className="w-4 h-4 mt-1 text-gold shrink-0" /><span>www.faith.ac.in</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} FAITH Foundation. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-gold transition">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition">Terms</a>
            <a href="#" className="hover:text-gold transition">Annual Reports</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
