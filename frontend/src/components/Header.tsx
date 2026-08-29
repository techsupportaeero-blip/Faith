import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/programs', label: 'Our Programs' },
  { to: '/impact', label: 'Impact' },
  { to: '/partners', label: 'Corporate Partners' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  return (
    <>
      {/* Top strip */}
      <div className="hidden md:block bg-navy text-cream/80 text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="mailto:Info@faith.ac.in" className="hover:text-gold transition">Info@faith.ac.in</a>
            <a href="tel:+919876543210" className="hover:text-gold transition">+91 831 973 3715</a>
          </div>
          <div className="flex items-center gap-3 tracking-widest uppercase">
            <span className="opacity-70">CSR Section-8 Company</span>
            <span className="w-1 h-1 rounded-full bg-gold" />
            <span className="opacity-70">80G & 12A Certified</span>
          </div>
        </div>
      </div>

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`sticky top-0 z-40 transition-all duration-500 ${scrolled ? 'bg-cream/95 backdrop-blur-lg shadow-[0_4px_30px_-15px_rgba(10,37,64,0.25)]' : 'bg-cream'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/images/faith-logo.png" alt="FAITH Foundation" className="h-14 w-auto" />
            <div className="hidden lg:flex flex-col leading-none">
              <span className="font-serif text-navy text-lg font-bold tracking-tight">FAITH</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-navy/60">Since 2015</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium relative transition ${isActive ? 'text-gold' : 'text-navy hover:text-gold'}`
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {l.label}
                    {isActive && (
                      <motion.span layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold" />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/donate"
              className="hidden md:inline-flex items-center gap-2 bg-navy text-cream hover:bg-gold hover:text-navy transition-all duration-300 px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-xl group"
            >
              <Heart className="w-4 h-4 group-hover:scale-125 transition" />
              Donate Now
            </Link>
            <button className="lg:hidden p-2 text-navy" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-cream border-t border-navy/10"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `px-3 py-3 rounded-lg text-base font-medium border-b border-navy/5 flex items-center justify-between ${isActive ? 'text-gold bg-navy/[.03]' : 'text-navy'}`
                    }
                  >
                    <span>{l.label}</span>
                    <ChevronDown className="w-4 h-4 -rotate-90 opacity-40" />
                  </NavLink>
                ))}
                <Link to="/donate" className="mt-3 bg-navy text-cream text-center py-3 rounded-full font-semibold">
                  Donate Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
