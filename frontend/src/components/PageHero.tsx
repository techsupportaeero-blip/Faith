import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ eyebrow, title, subtitle, image }: { eyebrow: string; title: string; subtitle?: string; image: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-cream">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover opacity-30 kenburns" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/70 to-navy-deep" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <nav className="text-xs text-cream/60 flex items-center gap-2 mb-6">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gold">{eyebrow}</span>
        </nav>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="ornament mb-5">{eyebrow}</motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl font-medium leading-[1.02] tracking-tight max-w-4xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-cream/80 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
