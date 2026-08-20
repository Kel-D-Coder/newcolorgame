import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.scrollTo(0, 0);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const linkClass = ({ isActive }) =>
    `tag-label px-3 py-2 rounded-lg transition-colors ${
      isActive ? "bg-ink text-white" : "text-ink/70 hover:text-ink hover:bg-ink/5"
    }`;

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 bg-cream/90 backdrop-blur border-b transition-shadow ${
        scrolled ? "border-ink/10 shadow-card-flat" : "border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl sm:text-2xl tracking-tight">
            New<span className="text-card-red">Color</span>
            <span className="text-sky-blue">Game</span>
          </span>
        </NavLink>

        <div className="hidden sm:flex items-center gap-1">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          className="sm:hidden soft-border rounded-lg w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="sm:hidden border-t border-ink/10 bg-cream overflow-hidden"
          >
            <div className="px-5 py-3 flex flex-col gap-1">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={linkClass}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
