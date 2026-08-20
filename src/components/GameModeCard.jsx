import { motion } from "framer-motion";

const colorMap = {
  "card-red": "bg-card-red",
  "sky-blue": "bg-sky-blue",
};

export default function GameModeCard({ mode }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="bg-white soft-border rounded-chip shadow-card-flat hover:shadow-card-sm overflow-hidden flex flex-col h-full transition-shadow"
    >
      <div className={`${colorMap[mode.color]} text-white px-6 py-5`}>
        <p className="tag-label opacity-90">{mode.subtitle}</p>
        <h3 className="font-display text-2xl sm:text-3xl mt-1">{mode.title}</h3>
      </div>
      <div className="p-6 flex flex-col gap-4">
        <p className="font-semibold">
          Goal: <span className="font-normal text-ink/80">{mode.goal}</span>
        </p>
        <ol className="space-y-3">
          {mode.rules.map((rule, i) => (
            <li key={i} className="flex gap-3 text-sm text-ink/80 leading-relaxed">
              <span
                className={`shrink-0 w-6 h-6 rounded-full ${colorMap[mode.color]} text-white text-xs font-bold flex items-center justify-center`}
              >
                {i + 1}
              </span>
              <span className="pt-0.5">{rule}</span>
            </li>
          ))}
        </ol>
      </div>
    </motion.div>
  );
}
