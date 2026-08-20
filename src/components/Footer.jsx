import { brand } from "../data/gameInfo";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 grid gap-10 sm:grid-cols-3">
        <div>
          <span className="font-display text-2xl">
            New<span className="text-card-red">Color</span>
            <span className="text-sky-blue">Game</span>
          </span>
          <p className="mt-3 text-cream/70 text-sm leading-relaxed max-w-xs">
            {brand.tagline} {brand.origin}.
          </p>
        </div>

        <div>
          <p className="tag-label text-cream/50 mb-3">Get in touch</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={brand.whatsappHref} className="hover:text-move-green transition-colors">
                WhatsApp: {brand.whatsapp}
              </a>
            </li>
            <li>
              <a href={`mailto:${brand.email}`} className="hover:text-spell-yellow transition-colors">
                {brand.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="tag-label text-cream/50 mb-3">Follow</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={brand.social.instagram} className="hover:text-card-red transition-colors">
                Instagram — @newcolorgame
              </a>
            </li>
            <li>
              <a href={brand.social.facebook} className="hover:text-card-red transition-colors">
                Facebook — @Newcolorgame
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-5 text-center text-cream/50 text-xs">
        Created by {brand.creator} · {brand.origin} · © {new Date().getFullYear()} {brand.name}
      </div>
    </footer>
  );
}
