import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppSidebar() {
  const [open, setOpen] = useState(false);
  const phone = '919876543210';
  const [msg, setMsg] = useState("Hi FAITH team, I'd love to learn more about your programs.");

  const send = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener');
  };

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 22, stiffness: 260 }}
            className="w-[320px] rounded-2xl bg-white shadow-2xl overflow-hidden border border-navy/10"
          >
            <div className="bg-[#075E54] p-4 text-white flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white p-1.5 shrink-0">
                <img src="/images/faith-logo.png" alt="FAITH" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm leading-tight">FAITH Foundation</p>
                <p className="text-white/70 text-xs flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-400 rounded-full"/>Online · replies in minutes</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <div className="bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22><rect width=%2260%22 height=%2260%22 fill=%22%23ECE5DD%22/></svg>')] px-4 py-5 min-h-[130px] flex flex-col justify-end">
              <div className="bg-white rounded-2xl rounded-tl-none px-3.5 py-2.5 shadow-sm text-sm text-navy max-w-[85%] self-start">
                Namaste! 👋 We usually reply within a few minutes. How can we help you make an impact today?
              </div>
            </div>
            <div className="p-3 bg-white flex items-end gap-2">
              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                rows={2}
                className="flex-1 resize-none rounded-xl border border-navy/10 bg-cream/40 px-3 py-2 text-sm outline-none focus:border-gold"
              />
              <button onClick={send} className="w-10 h-10 shrink-0 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#128C7E] transition">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        aria-label="Chat on WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center wa-pulse"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="w-7 h-7" fill="currentColor" />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">1</span>
        )}
      </motion.button>
    </div>
  );
}
