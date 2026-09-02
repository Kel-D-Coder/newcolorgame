import { brand } from "../data/gameInfo";

import { FaInstagram, FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 grid gap-10 sm:grid-cols-3">
        
        {/* Brand */}
        <div>
          <span className="font-display text-2xl">
            New<span className="text-card-red">Color</span>
            <span className="text-sky-blue">Game</span>
          </span>

          <p className="mt-3 text-cream/70 text-sm leading-relaxed max-w-xs">
            {brand.tagline} {brand.origin}.
          </p>
        </div>

        {/* Contact */}
        <div>
          <p className="tag-label text-cream/50 mb-3">
            Get in touch
          </p>

          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={brand.whatsappHref}
                className="hover:text-move-green transition-colors"
              >
                WhatsApp: {brand.whatsapp}
              </a>
            </li>

            <li>
              <a
                href={`mailto:${brand.email}`}
                className="hover:text-spell-yellow transition-colors"
              >
                {brand.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <p className="tag-label text-cream/50 mb-4">
            Follow Us
          </p>

          <div className="flex items-center gap-4">
            
            {/* Instagram */}
            <a
              href={brand.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center text-xl hover:bg-card-red hover:border-card-red hover:scale-110 transition-all duration-300"
            >
              <FaInstagram />
            </a>

            {/* Facebook */}
            <a
              href={brand.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center text-xl hover:bg-sky-blue hover:border-sky-blue hover:text-ink hover:scale-110 transition-all duration-300"
            >
              <FaFacebook />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-cream/10 py-5 text-center text-cream/50 text-xs">
        Created by {brand.creator} · {brand.origin} · ©{" "}
        {new Date().getFullYear()} {brand.name}
      </div>
    </footer>
  );
}