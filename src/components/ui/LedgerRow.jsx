export default function LedgerRow({ label, children, first = false }) {
  return (
    <div
      className={`grid grid-cols-1 gap-2 py-5 sm:grid-cols-[10rem_1fr] sm:gap-8 ${
        first ? "" : "border-t border-line"
      }`}
    >
      <span className="text-sm text-muted">{label}</span>
      <div className="text-ink leading-relaxed">{children}</div>
    </div>
  );
}
