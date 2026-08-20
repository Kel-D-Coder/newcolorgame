import { motion } from "framer-motion";

/**
 * Consistent scroll-reveal wrapper used across sections.
 * Animates once, respects reduced-motion via Framer Motion's
 * built-in handling of the prefers-reduced-motion media query.
 */
export default function FadeIn({
  children,
  delay = 0,
  y = 18,
  duration = 0.55,
  className = "",
  as = "div",
}) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
