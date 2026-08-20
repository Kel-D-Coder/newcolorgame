import { motion } from "framer-motion";

const colorMap = {
  "card-red": "bg-card-red",
  "spell-yellow": "bg-spell-yellow",
  "move-green": "bg-move-green",
  "sky-blue": "bg-sky-blue",
};

export default function FeatureCard({ label, detail, color }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="bg-white soft-border rounded-chip shadow-card-flat hover:shadow-card-sm p-6 flex flex-col gap-3 h-full transition-shadow"
    >
      <span className={`w-10 h-10 rounded-lg ${colorMap[color]}`} aria-hidden="true" />
      <h3 className="font-display text-xl leading-none">{label}</h3>
      <p className="text-ink/65 text-sm leading-relaxed">{detail}</p>
    </motion.div>
  );
}
