import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks, profile } from "../../data/content.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `text-sm transition-colors duration-250 ${
      isActive ? "text-accent" : "text-ink hover:text-accent"
    }`;

  return (
    <header className="border-b border-line bg-paper/95 backdrop-blur sticky top-0 z-40">
      <div className="max-w-content mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <NavLink
          to="/"
          className="font-serif text-lg text-ink"
          onClick={() => setOpen(false)}
        >
          Lhakpa Tenji Sherpa
        </NavLink>

        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClasses}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={profile.resumeFile}
            download
            className="text-sm border border-ink/80 px-4 py-2 rounded-sm hover:border-accent hover:text-accent transition-colors duration-250"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className="md:hidden border-t border-line bg-paper px-6 py-4 flex flex-col gap-4"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={linkClasses}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={profile.resumeFile}
            download
            className="text-sm text-accent underline underline-offset-4 w-fit"
          >
            Download resume
          </a>
        </nav>
      )}
    </header>
  );
}
