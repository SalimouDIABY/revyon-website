import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "./app/routes";
import "./styles/index.css";

// Le HTML est pré-rendu au build (SSG) : on hydrate au lieu de monter à neuf,
// pour que le contenu soit présent dans le HTML brut (visibilité IA + SEO).
hydrateRoot(
  document.getElementById("root")!,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
