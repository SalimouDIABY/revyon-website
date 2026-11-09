import { useEffect, useMemo, useRef, useState } from "react";

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
 * Révèle les blocs `.rt-enter` au moment où ils entrent réellement dans
 * l'écran, et rejoue l'animation à chaque passage.
 *
 * Deux choses à savoir, parce qu'elles ont été corrigées ici :
 *
 * 1. L'ancien filet de sécurité révélait tout le contenu au bout de deux
 *    secondes et demie. Le visiteur lisait le premier écran, puis trouvait
 *    toute la page déjà affichée : aucune animation au défilement. Le filet
 *    se contente maintenant de retirer le masquage si l'observateur ne
 *    répond pas, ce qui protège le contenu sans tuer l'effet.
 *
 * 2. Un bloc repassé sous le bas de l'écran est remis à zéro, donc il
 *    rejoue son entrée quand on redescend.
 */
export function useInViewReveal() {
  useEffect(() => {
    const root = document.documentElement;

    // Sans observateur, on ne masque rien du tout.
    if (typeof IntersectionObserver === "undefined") return;

    root.classList.add("rt-io");
    let answered = false;

    const observer = new IntersectionObserver(
      (entries) => {
        answered = true;
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("rt-seen");
          } else if (entry.boundingClientRect.top > 0) {
            // Ressorti par le bas : il rejouera à la prochaine descente.
            el.classList.remove("rt-seen");
          }
        }
      },
      // Déclenche quand le haut du bloc passe sous 88 % de la hauteur de
      // l'écran : le bloc bouge pendant qu'on le regarde, pas avant.
      { threshold: 0, rootMargin: "0px 0px -12% 0px" }
    );

    const observe = () =>
      document.querySelectorAll<HTMLElement>(".rt-enter").forEach((el) => observer.observe(el));
    observe();

    const failsafe = window.setTimeout(() => {
      if (!answered) root.classList.remove("rt-io");
    }, 1600);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
      root.classList.remove("rt-io");
    };
  }, []);
}

/**
 * Chiffre qui monte de zéro à sa valeur quand il entre dans l'écran, et
 * qui recommence à chaque passage.
 *
 * La valeur finale est écrite dans le HTML dès le départ : sans
 * JavaScript, ou pour un moteur de recherche, le bon chiffre est lu.
 */
export function CountUp({
  value,
  duration = 1200,
  animate = true,
}: {
  value: string;
  duration?: number;
  animate?: boolean;
}) {
  // Calculé une fois : `value.match()` renvoie un nouvel objet à chaque
  // rendu, et le mettre en dépendance relançait l'effet en boucle, ce qui
  // annulait l'animation à peine commencée.
  const { target, suffix, numeric } = useMemo(() => {
    const m = value.match(/^(\d+)(.*)$/);
    return m
      ? { target: parseInt(m[1], 10), suffix: m[2], numeric: true }
      : { target: 0, suffix: "", numeric: false };
  }, [value]);
  const [shown, setShown] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const raf = useRef(0);

  useEffect(() => {
    if (!animate || !numeric) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let running = false;

    const run = () => {
      running = true;
      const started = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - started) / duration, 1);
        // Décélération : les derniers chiffres se posent doucement.
        const eased = 1 - Math.pow(1 - t, 3);
        setShown(Math.round(eased * target) + suffix);
        if (t < 1) raf.current = requestAnimationFrame(tick);
        else running = false;
      };
      raf.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!running) run();
        } else if (entry.boundingClientRect.top > 0) {
          cancelAnimationFrame(raf.current);
          running = false;
          setShown(0 + suffix);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf.current);
    };
  }, [animate, duration, numeric, suffix, target]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      {shown}
    </span>
  );
}
