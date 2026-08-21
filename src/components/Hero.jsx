import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Badge from "./Badge";
import ColorCard from "./ColorCard";
import { brand } from "../data/gameInfo";

const cards = [
  { color: "card-red", rotate: -12 },
  { color: "spell-yellow", rotate: -6 },
  { color: "move-green", rotate: 0 },
  { color: "sky-blue", rotate: 6 },
  { color: "point-purple", rotate: 12 },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item}>
          <Badge>{brand.origin}</Badge>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display leading-[0.95] mt-6 text-5xl sm:text-6xl lg:text-7xl"
        >
          <span className="text-card-red">New</span>
          <span className="text-spell-yellow" style={{ WebkitTextStroke: "1px #14110F" }}>
            Color
          </span>
          <br />
          <span className="text-sky-blue">Game</span>
        </motion.h1>

        <motion.p variants={item} className="mt-6 text-lg sm:text-xl text-ink/80 max-w-md">
          {brand.tagline}
        </motion.p>

        <motion.p variants={item} className="mt-3 text-sm text-ink/60 max-w-md">
          Newcolorgame was invented by Gideon Zion. it is a strategy board game created and made in Nigeria that uses colors to train the mind and brain. Because NEWCOLORGAME is incredibly easy to learn and requires no language barrier, it serves as an excellent recreational asset for hotels, resorts, cafes, and tourism centers worldwide.It brings people together through play, creating memorable expriences for both locals and travelers.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
          <Link to="/gallery">
            <motion.span
              whileHover={{ y: -3 }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-block bg-ink text-cream rounded-xl px-6 py-3 tag-label shadow-card-sm"
            >
              See the Game
            </motion.span>
          </Link>
          <Link to="/contact">
            <motion.span
              whileHover={{ y: -3 }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-block bg-move-green text-white rounded-xl px-6 py-3 tag-label shadow-card-sm"
            >
              Get in Touch
            </motion.span>
          </Link>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex gap-6 text-sm text-ink/60">
          <span>
            <strong className="text-ink">Players:</strong> {brand.players}
          </span>
          <span>
            <strong className="text-ink">Ages:</strong> {brand.ages}
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex justify-center lg:justify-end pt-6"
        aria-hidden="true"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
        }}
      >
        <div className="flex -space-x-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 24, rotate: 0 },
                show: {
                  opacity: 1,
                  y: 0,
                  rotate: card.rotate,
                  transition: { type: "spring", stiffness: 260, damping: 20 },
                },
              }}
            >
              <ColorCard color={card.color} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
