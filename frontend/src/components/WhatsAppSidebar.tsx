import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppSidebar() {
  const phone = '918319733715';
  const defaultMsg = "Hi FAITH team, I'd like to learn more about your programs and initiatives.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.12, rotate: 5 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp (+91 831 973 3715)"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] transition-colors wa-pulse"
      >
        <MessageCircle className="w-7 h-7" fill="currentColor" />
        
        {/* Tooltip on hover */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-navy text-white text-xs font-medium whitespace-nowrap shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
