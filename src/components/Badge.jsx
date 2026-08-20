export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 bg-naija-gold/15 text-naija-gold border border-naija-gold/30 rounded-full px-4 py-1.5 tag-label font-bold">
      <span aria-hidden="true">★</span>
      <span className="text-ink/80">{children}</span>
    </span>
  );
}
