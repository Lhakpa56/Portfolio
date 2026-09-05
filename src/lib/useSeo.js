import { useEffect } from "react";

/**
 * Sets the document title and meta description for the active page.
 * Kept dependency-free since this is the only SEO need the site has.
 */
export function useSeo(title, description) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} — Lhakpa Tenji Sherpa` : "Lhakpa Tenji Sherpa";

    let meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content");

    if (description) {
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }

    return () => {
      document.title = previousTitle;
      if (meta && previousDescription) {
        meta.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
}
