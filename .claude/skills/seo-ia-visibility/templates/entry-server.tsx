// Point d'entrée SSR utilisé par prerender.mjs au moment du build.
// Rend une route en HTML statique, injecté ensuite dans dist/index.html —
// ce qui rend les pages lisibles par les crawlers IA et les moteurs SANS
// exécution de JavaScript. <App/> est le MÊME composant racine que côté client.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { App } from "./app/routes"; // adapter le chemin vers votre <App/>

export async function render(url: string): Promise<string> {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
