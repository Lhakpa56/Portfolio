export default function Tag({ children }) {
  return (
    <span className="inline-block border border-line bg-surface px-3 py-1 text-sm text-ink rounded-sm">
      {children}
    </span>
  );
}
