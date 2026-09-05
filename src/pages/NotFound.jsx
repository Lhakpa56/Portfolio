import Button from "../components/ui/Button.jsx";
import { useSeo } from "../lib/useSeo.js";

export default function NotFound() {
  useSeo("Page not found", "The page you're looking for doesn't exist.");

  return (
    <div className="max-w-content mx-auto px-6 sm:px-8 py-32 text-center">
      <h1 className="text-3xl font-serif text-ink">Page not found</h1>
      <p className="mt-3 text-muted">
        The page you're looking for doesn't exist or has moved.
      </p>
      <div className="mt-8">
        <Button to="/">Back to home</Button>
      </div>
    </div>
  );
}
