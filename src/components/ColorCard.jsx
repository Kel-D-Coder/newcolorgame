import { motion } from "framer-motion";

const colorMap = {
  "card-red": "bg-card-red",
  "spell-yellow": "bg-spell-yellow",
  "move-green": "bg-move-green",
  "sky-blue": "bg-sky-blue",
  "point-purple": "bg-point-purple",
};

export default function ColorCard({ color, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -14, rotate: 0, transition: { type: "spring", stiffness: 300, damping: 18 } }}
      className={`w-20 sm:w-28 bg-white hard-border rounded-chip shadow-card-sm overflow-hidden shrink-0 ${className}`}
    >
      <div className="bg-ink text-white text-center py-1.5">
        <span className="tag-label">NewColor</span>
      </div>
      <div className={`h-16 sm:h-20 m-2.5 rounded-md ${colorMap[color]}`} />
      <div className="text-center pb-2">
        <span className="tag-label text-ink/70">CardDice</span>
      </div>
    </motion.div>
  );
}
