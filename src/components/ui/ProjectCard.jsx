import Tag from "./Tag.jsx";

export default function ProjectCard({ project }) {
  return (
    <article className="border border-line bg-surface p-6 sm:p-8 rounded-sm transition-colors duration-250 hover:border-accent">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-medium text-ink font-serif">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-muted">{project.role}</p>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-accent hover:text-accent-dark underline underline-offset-4 shrink-0"
            aria-label={`View ${project.name} on GitHub`}
          >
            View on GitHub
          </a>
        )}
      </div>

      <p className="mt-4 text-ink/90 leading-relaxed max-w-prose">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </article>
  );
}
