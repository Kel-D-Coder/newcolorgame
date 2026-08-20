import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-ink/90 flex items-center justify-center p-5"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image.src}
              alt={image.caption}
              className="w-full rounded-chip border border-cream/20"
            />
            <div className="flex items-center justify-between mt-4">
              <p className="text-cream text-sm">{image.caption}</p>
              <button
                onClick={onClose}
                className="bg-cream text-ink rounded-full w-9 h-9 flex items-center justify-center shrink-0 ml-4 focus:outline-none focus-visible:ring-4 focus-visible:ring-cream/40"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
