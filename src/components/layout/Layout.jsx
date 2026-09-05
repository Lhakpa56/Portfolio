import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import PageTransition from "./PageTransition.jsx";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:rounded-sm z-50"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}
