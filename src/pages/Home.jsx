import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import GameModeCard from "../components/GameModeCard";
import FadeIn from "../components/FadeIn";
import { brand, features, gameModes, cardRules } from "../data/gameInfo";

export default function Home() {
  return (
    <>
      <Hero />

      {/* What is NewColorGame */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <FadeIn>
          <p className="tag-label text-card-red mb-2">What is it?</p>
          <h2 className="font-display text-3xl sm:text-4xl max-w-2xl">
            A color + alphabet board game that makes learning feel like play.
          </h2>
          <p className="mt-4 text-ink/70 max-w-2xl">
            NewColorGame combines a color-coded board with a deck of CardDice. Throw the right
            color, move the right letter, or race to spell a word before anyone else — every
            round is quick, competitive, and secretly educational.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {features.map((f, i) => (
            <FadeIn key={f.label} delay={i * 0.08}>
              <FeatureCard {...f} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Two ways to play */}
      <section className="bg-ink/[0.025] border-y border-ink/10 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <FadeIn>
            <p className="tag-label text-sky-blue mb-2">How to play</p>
            <h2 className="font-display text-3xl sm:text-4xl">Two exciting ways to play</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {gameModes.map((mode, i) => (
              <FadeIn key={mode.id} delay={i * 0.1}>
                <GameModeCard mode={mode} />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.15}>
            <div className="mt-10 bg-white soft-border rounded-chip shadow-card-flat p-6 max-w-xl">
              <p className="tag-label text-ink/50 mb-3">Card rules</p>
              <ul className="space-y-2 text-sm text-ink/80">
                {cardRules.map((rule, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-card-red font-bold">•</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <FadeIn as="section" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24 text-center">
        <h2 className="font-display text-3xl sm:text-4xl">
          <span className="text-card-red">Learn.</span>{" "}
          <span className="text-spell-yellow">Play.</span>{" "}
          <span className="text-move-green">Win.</span>{" "}
          <span className="text-sky-blue">Repeat.</span>
        </h2>
        <p className="mt-4 text-ink/70 max-w-md mx-auto">
          Ready to bring {brand.name} home, or want it for your store? Reach out and let's talk.
        </p>
        <Link to="/contact" className="inline-block mt-8">
          <motion.span
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-block bg-card-red text-white rounded-xl px-8 py-3 tag-label shadow-card-sm"
          >
            Contact Us
          </motion.span>
        </Link>
      </FadeIn>
    </>
  );
}
