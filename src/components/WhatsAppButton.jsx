import { motion } from "framer-motion";
import { brand } from "../data/gameInfo";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={brand.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ y: -3, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-40 bg-move-green text-white rounded-full w-14 h-14 flex items-center justify-center shadow-card-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-move-green/40"
    >
      <span className="text-2xl" aria-hidden="true">
        💬
      </span>
    </motion.a>
  );
}
