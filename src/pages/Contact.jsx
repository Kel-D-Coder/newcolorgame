import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import { brand } from "../data/gameInfo";

import {
  FaWhatsapp,
  FaEnvelope,
  FaUser,
  FaMessage,
  FaPaperPlane,
} from "react-icons/fa6";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });

  const waHref = `${brand.whatsappHref}?text=${encodeURIComponent(
    form.name || form.message
      ? `Hi, I'm ${form.name || "..."}. ${form.message}`
      : "Hi, I'm interested in NewColorGame."
  )}`;

  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-24 grid lg:grid-cols-2 gap-12">
      
      {/* Contact Information */}
      <FadeIn>
        <p className="tag-label text-card-red mb-2">Contact</p>

        <h1 className="font-display text-4xl sm:text-5xl">
          Let's talk NewColorGame
        </h1>

        <p className="mt-4 text-ink/70 max-w-md">
          Questions about the game, bulk orders, or stocking it in your store?
          Reach out — strictly for business.
        </p>

        <div className="mt-8 space-y-4">
          
          {/* WhatsApp */}
          <motion.a
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            href={brand.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white soft-border rounded-chip shadow-card-flat hover:shadow-card-sm p-4 transition-shadow"
          >
            <span className="w-10 h-10 rounded-full bg-move-green text-white flex items-center justify-center text-lg">
              <FaWhatsapp />
            </span>

            <div>
              <p className="tag-label text-ink/50">WhatsApp</p>
              <p className="font-semibold">{brand.whatsapp}</p>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            href={`mailto:${brand.email}`}
            className="flex items-center gap-3 bg-white soft-border rounded-chip shadow-card-flat hover:shadow-card-sm p-4 transition-shadow"
          >
            <span className="w-10 h-10 rounded-full bg-sky-blue text-white flex items-center justify-center text-lg">
              <FaEnvelope />
            </span>

            <div>
              <p className="tag-label text-ink/50">Email</p>
              <p className="font-semibold">{brand.email}</p>
            </div>
          </motion.a>
        </div>
      </FadeIn>

      {/* Contact Form */}
      <FadeIn delay={0.1}>
        <div className="bg-white soft-border rounded-chip shadow-card p-6 sm:p-8 h-fit">
          
          <p className="tag-label text-ink/50 mb-4">
            Send a message on WhatsApp
          </p>

          <div className="space-y-4">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="text-sm font-semibold block mb-1"
              >
                Your name
              </label>

              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />

                <input
                  id="name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full soft-border rounded-lg pl-11 pr-4 py-2.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-blue/30"
                  placeholder="Ada Obi"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="text-sm font-semibold block mb-1"
              >
                Message
              </label>

              <div className="relative">
                <FaMessage className="absolute left-4 top-4 text-ink/40" />

                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={4}
                  className="w-full soft-border rounded-lg pl-11 pr-4 py-2.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-blue/30"
                  placeholder="I'd like to order 20 sets for my store..."
                />
              </div>
            </div>

            {/* Submit */}
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-move-green text-white rounded-xl px-6 py-3 tag-label shadow-card-sm"
            >
              <FaPaperPlane />
              Send on WhatsApp
            </motion.a>

          </div>
        </div>
      </FadeIn>
    </section>
  );
}