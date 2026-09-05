import { profile, summary, coreStrengths, socials } from "../data/content.js";
import Button from "../components/ui/Button.jsx";
import LedgerRow from "../components/ui/LedgerRow.jsx";
import { useSeo } from "../lib/useSeo.js";
import profileImg from "../assets/profile.jpg";

const highlightLabels = ["Speed", "Quality", "Collaboration", "Growth"];

export default function Home() {
  useSeo(
    "Home",
    "Lhakpa Tenji Sherpa is a full-stack developer building clean, scalable web applications with React, Python and Django."
  );

  return (
    <div className="max-w-content mx-auto px-6 sm:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-10 md:gap-16 items-start">
        <img
          src={profileImg}
          alt={`Portrait of ${profile.name}`}
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-full md:h-auto object-cover rounded-sm border border-line"
          width={900}
          height={1125}
        />

        <div>
          <p className="text-muted">{profile.title}</p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-serif text-ink leading-tight">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-prose text-lg text-ink/90 leading-relaxed">
            {summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/projects">View projects</Button>
            <Button to="/contact" variant="secondary">
              Get in touch
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-muted hover:text-accent underline underline-offset-4"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 sm:mt-28">
        <h2 className="text-sm text-muted mb-2">Selected highlights</h2>
        <div>
          {coreStrengths.map((item, i) => (
            <LedgerRow key={item} label={highlightLabels[i]} first={i === 0}>
              {item}
            </LedgerRow>
          ))}
        </div>
      </div>
    </div>
  );
}
