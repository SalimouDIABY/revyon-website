import { useEffect, useRef } from "react";

/**
 * Titre dont chaque mot se lève derrière une coupe.
 *
 * Le texte reste un seul nœud lisible pour les moteurs et les lecteurs
 * d'écran (aria-label), le découpage n'est que visuel.
 */
export function MaskedWords({
  text,
  delay = 0,
  step = 0.045,
  className,
  style,
}: {
  text: string;
  delay?: number;
  step?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const words = text.split(" ");
  return (
    <span className={className} style={style} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} aria-hidden="true">
          <span
            className="rt-word"
            style={{ "--rt-delay": `${delay + i * step}s` } as React.CSSProperties}
          >
            <span>{word}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}

/**
 * Pose la classe `rt-io` sur <html> uniquement si l'observateur est
 * disponible, puis révèle chaque élément `.rt-enter` à son arrivée dans
 * le champ de vision. Un filet de sécurité révèle tout au bout de deux
 * secondes : aucun contenu ne peut rester invisible à cause de ça.
 */
export function useInViewReveal() {
  const done = useRef(false);

  useEffect(() => {
    if (done.current) return;
    done.current = true;

    const root = document.documentElement;
    const targets = () => Array.from(document.querySelectorAll<HTMLElement>(".rt-enter"));
    const revealAll = () => targets().forEach((el) => el.classList.add("rt-seen"));

    if (typeof IntersectionObserver === "undefined") {
      revealAll();
      return;
    }

    root.classList.add("rt-io");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("rt-seen");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px -14% 0px" }
    );

    targets().forEach((el) => observer.observe(el));
    const failsafe = window.setTimeout(revealAll, 2600);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);
}
