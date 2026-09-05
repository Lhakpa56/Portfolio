import { projects } from "../data/content.js";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import ProjectCard from "../components/ui/ProjectCard.jsx";
import { useSeo } from "../lib/useSeo.js";

export default function Projects() {
  useSeo(
    "Projects",
    "Selected projects built by Lhakpa Tenji Sherpa, including a full-stack ecommerce starter kit and a SaaS admin application."
  );

  return (
    <div className="max-w-content mx-auto px-6 sm:px-8 py-16 sm:py-24">
      <SectionHeading index="Projects" title="Selected projects" />

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
