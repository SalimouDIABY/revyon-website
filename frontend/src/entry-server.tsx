import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { App } from "./app/routes";

/**
 * Rendu serveur d'une route en HTML statique (utilisé par prerender.mjs
 * au moment du build). Le contenu produit est injecté dans le template
 * dist/index.html, ce qui rend les pages lisibles par les robots d'IA et
 * les moteurs de recherche sans exécution de JavaScript.
 */
export async function render(url: string): Promise<string> {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
