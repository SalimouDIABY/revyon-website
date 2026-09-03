// Point d'entrée client. Le HTML étant PRÉ-RENDU (SSG), on HYDRATE le DOM
// existant au lieu de le remonter à neuf → on conserve le HTML lisible par
// les IA tout en rendant la page interactive.
//
// IMPORTANT : utiliser hydrateRoot (et non createRoot().render). Le premier
// rendu client doit être IDENTIQUE au HTML pré-rendu, sinon React jette une
// "hydration mismatch" et remplace le contenu (on reperd le bénéfice SSG).
// → tout useState dont la valeur apparaît dans le HTML doit démarrer à la
//   valeur FINALE, pas à un placeholder ("0", "", …).
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "./app/routes"; // même <App/> que entry-server.tsx

hydrateRoot(
  document.getElementById("root")!,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
