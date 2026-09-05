import { summary, coreStrengths, profile } from "../data/content.js";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import LedgerRow from "../components/ui/LedgerRow.jsx";
import { useSeo } from "../lib/useSeo.js";

export default function About() {
  useSeo(
    "About",
    "Background and strengths of Lhakpa Tenji Sherpa, a full-stack developer based in Kathmandu."
  );

  return (
    <div className="max-w-content mx-auto px-6 sm:px-8 py-16 sm:py-24">
      <SectionHeading
        index="About"
        title="Background"
        description={summary}
      />

      <div className="mt-4">
        <h2 className="text-sm text-muted mb-2">Core strengths</h2>
        <div>
          {coreStrengths.map((item, i) => (
            <LedgerRow key={item} label="" first={i === 0}>
              {item}
            </LedgerRow>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-sm text-muted mb-2">Based in</h2>
        <p className="text-ink">{profile.location}</p>
      </div>
    </div>
  );
}
