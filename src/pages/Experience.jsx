import { experience, hackathons } from "../data/content.js";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { useSeo } from "../lib/useSeo.js";

export default function Experience() {
  useSeo(
    "Experience",
    "Professional and hackathon experience of Lhakpa Tenji Sherpa."
  );

  return (
    <div className="max-w-content mx-auto px-6 sm:px-8 py-16 sm:py-24">
      <SectionHeading index="Experience" title="Work experience" />

      <div className="space-y-16">
        {experience.map((job) => (
          <div
            key={job.org}
            className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-4 sm:gap-8 pb-10 border-b border-line"
          >
            <div className="text-sm text-muted">{job.org}</div>
            <div>
              <h3 className="text-xl font-serif text-ink">{job.role}</h3>
              <ul className="mt-4 space-y-2">
                {job.bullets.map((b) => (
                  <li key={b} className="text-ink/90 leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-[0.65em] w-1.5 h-1.5 bg-line rounded-full" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-4 sm:gap-8">
          <div className="text-sm text-muted">Hackathons</div>
          <div>
            <h3 className="text-xl font-serif text-ink">{hackathons.heading}</h3>
            <ul className="mt-4 space-y-2">
              {hackathons.bullets.map((b) => (
                <li key={b} className="text-ink/90 leading-relaxed pl-4 relative">
                  <span className="absolute left-0 top-[0.65em] w-1.5 h-1.5 bg-line rounded-full" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
