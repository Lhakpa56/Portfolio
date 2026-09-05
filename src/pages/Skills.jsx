import { skillGroups } from "../data/content.js";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Tag from "../components/ui/Tag.jsx";
import { useSeo } from "../lib/useSeo.js";

export default function Skills() {
  useSeo(
    "Skills",
    "Technical skills of Lhakpa Tenji Sherpa across frontend, backend, databases and tooling."
  );

  return (
    <div className="max-w-content mx-auto px-6 sm:px-8 py-16 sm:py-24">
      <SectionHeading
        index="Skills"
        title="Technical skills"
        description="Organized by area rather than one long list."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-sm text-muted mb-3">{group.label}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
