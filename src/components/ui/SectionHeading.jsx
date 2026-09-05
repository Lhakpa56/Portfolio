export default function SectionHeading({ index, title, description }) {
  return (
    <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-[5rem_1fr] sm:gap-8">
      {index && (
        <span className="text-sm text-muted font-sans">{index}</span>
      )}
      <div>
        <h2 className="text-2xl sm:text-3xl font-medium text-ink">{title}</h2>
        {description && (
          <p className="mt-3 max-w-prose text-muted leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
