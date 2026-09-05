import { education, awards } from "../data/content.js";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import LedgerRow from "../components/ui/LedgerRow.jsx";
import { useSeo } from "../lib/useSeo.js";

export default function Education() {
  useSeo(
    "Education",
    "Education, awards and certifications of Lhakpa Tenji Sherpa."
  );

  return (
    <div className="max-w-content mx-auto px-6 sm:px-8 py-16 sm:py-24">
      <SectionHeading index="Education" title="Education" />

      <div className="mb-16">
        {education.map((item, i) => (
          <LedgerRow key={item.program} label={item.school} first={i === 0}>
            {item.program}
          </LedgerRow>
        ))}
      </div>

      <h2 className="text-sm text-muted mb-2">Awards & certifications</h2>
      <div>
        {awards.map((item, i) => (
          <LedgerRow key={item} label="" first={i === 0}>
            {item}
          </LedgerRow>
        ))}
      </div>
    </div>
  );
}
