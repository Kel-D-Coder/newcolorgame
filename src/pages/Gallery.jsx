import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "../components/Lightbox";
import FadeIn from "../components/FadeIn";
import { galleryItems } from "../data/gallery";

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const cell = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-24">
      <FadeIn>
        <p className="tag-label text-card-red mb-2">Gallery</p>
        <h1 className="font-display text-4xl sm:text-5xl">See NewColorGame in action</h1>
        <p className="mt-4 text-ink/70 max-w-xl">
          A closer look at the board, the CardDice, and the story behind the game.
        </p>
      </FadeIn>

      <motion.div
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="columns-1 sm:columns-2 lg:columns-3 gap-5 mt-10 [column-fill:_balance]"
      >
        {galleryItems.map((item, i) =>
          item.type === "video" ? (
            <motion.div
              key={i}
              variants={cell}
              className="mb-5 break-inside-avoid bg-white soft-border rounded-chip shadow-card-flat overflow-hidden"
            >
              <video
                controls
                poster={item.poster || undefined}
                className="w-full h-auto block bg-ink"
                src={item.src}
              />
            </motion.div>
          ) : (
            <motion.button
              key={i}
              variants={cell}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              onClick={() => setActive(item)}
              className="mb-5 break-inside-avoid block w-full bg-white soft-border rounded-chip shadow-card-flat hover:shadow-card-sm overflow-hidden transition-shadow focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-blue/30"
            >
              <img src={item.src} alt={item.alt} className="w-full h-auto block" />
            </motion.button>
          )
        )}
      </motion.div>

      <Lightbox image={active} onClose={() => setActive(null)} />
    </section>
  );
}