
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
import { keepAliveService } from "./services/keepAlive";

// Démarre le service pour garder le backend actif
keepAliveService.start();
  createRoot(document.getElementById("root")!).render(<App />);