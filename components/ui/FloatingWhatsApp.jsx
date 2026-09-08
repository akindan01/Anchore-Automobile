"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappNumber = "2347065629472";
  const defaultMessage = "Hello Anchore Autos, I would like to speak with an Anchore sales representative.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-50 flex flex-col items-end md:bottom-8 md:right-8">
      {/* Interactive Tooltip / Help Bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-3 flex items-center gap-2 rounded-2xl border border-white/10 bg-surface/95 px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-left font-body text-xs font-medium text-white hover:text-emerald-400 transition-colors"
            >
              <span className="block font-semibold text-emerald-400">Chat with Sales</span>
              <span className="text-[11px] text-steel">We are online on WhatsApp</span>
            </a>
            <button
              onClick={() => setShowTooltip(false)}
              aria-label="Close notification"
              className="ml-2 text-smoke hover:text-white transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Anchore sales representative on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.65)] transition-all duration-300"
      >
        {/* Subtle pulsing background ring */}
        <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/40 animate-ping opacity-60 pointer-events-none" />

        {/* WhatsApp Brand SVG Icon */}
        <svg
          className="h-7 w-7 fill-current transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.529 1.771.817 2.796.817 3.18 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.767-5.768-5.767zm7.424 5.767c0 4.093-3.332 7.424-7.424 7.424-1.22 0-2.39-.297-3.432-.821l-4.649 1.219 1.242-4.531c-.604-1.077-.957-2.314-.957-3.291 0-4.092 3.332-7.423 7.424-7.423 4.093 0 7.424 3.331 7.424 7.423z" />
          <path d="M15.422 13.916c-.201-.1-.777-.383-.897-.427-.121-.044-.209-.066-.297.066s-.34.427-.417.515c-.077.088-.154.099-.355-.001-.201-.1-.849-.313-1.617-.998-.598-.533-.998-1.192-1.119-1.393-.121-.201-.013-.309.088-.409.09-.09.201-.234.302-.351.1-.117.134-.198.201-.33.067-.132.033-.248-.017-.348-.05-.1-.297-.715-.407-.98-.108-.258-.217-.223-.297-.227l-.254-.004c-.088 0-.231.033-.352.165-.121.132-.462.451-.462 1.1 0 .649.473 1.275.539 1.363.066.088.932 1.423 2.258 1.996.315.136.562.218.754.279.317.101.606.087.834.053.254-.038.777-.318.887-.625.11-.308.11-.572.077-.625-.033-.053-.121-.088-.322-.188z" />
        </svg>
      </motion.a>
    </aside>
  );
}
