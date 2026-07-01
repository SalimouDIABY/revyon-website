import type { RouteObject } from "react-router";
import { Outlet, useRoutes } from "react-router";
import { usePageTracking } from "./analytics";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { AdminPage } from "./pages/AdminPage";

function Root() {
  usePageTracking();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 style={{ fontSize: "6rem", color: "#0EA5E9", fontWeight: "700" }}>404</h1>
      <p style={{ fontSize: "1.25rem", color: "#64748B" }} className="mb-6">
        Page introuvable
      </p>
      <a
        href="/"
        style={{ background: "#F97316", color: "#fff", padding: "12px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: "600" }}
      >
        Retour à l'accueil
      </a>
    </div>
  );
}

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "a-propos", Component: AboutPage },
      { path: "services", Component: ServicesPage },
      { path: "portfolio", Component: PortfolioPage },
      { path: "contact", Component: ContactPage },
      { path: "politique-confidentialite", Component: PrivacyPage },
      { path: "admin", Component: AdminPage },
      { path: "*", Component: NotFound },
    ],
  },
];

/**
 * Rend l'arbre de routes via useRoutes. Doit être monté à l'intérieur d'un
 * routeur (BrowserRouter côté client, StaticRouter au pré-rendu). On utilise
 * les routeurs « non-data » : aucune route n'a de loader/action, et leur
 * hydratation est déterministe (pas de script de données injecté).
 */
export function App() {
  return useRoutes(routes);
}
