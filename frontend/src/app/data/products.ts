/**
 * Produits édités par Revyon Tech.
 *
 * Source unique de vérité : utilisée par la page Réalisations, la section
 * « Nos produits » de l'accueil, les données structurées (JSON-LD) et le
 * pré-rendu. Les descriptions reprennent ce que chaque produit annonce
 * publiquement sur son propre site.
 */

export type Product = {
  slug: string;
  name: string;
  /** Phrase d'accroche courte, telle qu'affichée sur le produit. */
  tagline: string;
  /** Domaine public du produit. */
  url: string;
  /** Domaine affiché (sans protocole). */
  domain: string;
  category: string;
  /** Secteur visé, affiché en badge. */
  audience: string;
  year: string;
  status: "En production" | "En déploiement";
  /** Une phrase concrète pour la carte de l'accueil. */
  cardLine: string;
  /** Paragraphe de présentation. */
  description: string;
  /** Ce que le produit apporte concrètement, formulé en bénéfices. */
  outcomes: string[];
  /** Modules / périmètre fonctionnel. */
  modules: string[];
  /** Briques techniques, sans détail d'implémentation. */
  tech: string[];
  /** Capture publique du produit, servie depuis /public/produits. */
  screenshot: string;
  /** Vignette allégée, pour les cartes de l'accueil. */
  thumb: string;
  /** Ce que montre la capture, pour ne pas laisser croire que c'est tout le produit. */
  screenshotCaption: string;
  /** Palette du produit. */
  theme: {
    deep: string;
    surface: string;
    /** Accent du produit, pour les aplats et éléments décoratifs. */
    accent: string;
    /** Variante de l'accent lisible en texte sur fond clair (contraste AA). */
    accentText: string;
    soft: string;
  };
};

export const products: Product[] = [
  {
    slug: "revyon-school",
    name: "Revyon School",
    tagline: "De l'inscription au bulletin, votre école tient dans un seul outil",
    url: "https://www.revyonschool.com",
    domain: "revyonschool.com",
    category: "Logiciel métier",
    audience: "Établissements scolaires",
    year: "2026",
    status: "En production",
    cardLine:
      "Inscriptions, notes, bulletins, présences et frais de scolarité dans une seule plateforme. Les matières et coefficients du programme national guinéen sont déjà dedans, et tout continue de fonctionner quand le réseau tombe.",
    description:
      "Logiciel de gestion scolaire conçu pour les écoles de Guinée, du préscolaire à la terminale. Élèves, notes, présences, frais de scolarité et communication aux familles sont réunis dans une seule plateforme, multi-établissements, utilisable depuis un ordinateur, une tablette ou un téléphone.",
    outcomes: [
      "Les bulletins d'une classe se préparent en une séance : moyennes, rangs et moyenne de classe sont calculés à partir des notes déjà saisies.",
      "Chaque inscription crée son échéancier et chaque encaissement produit un reçu numéroté, en francs guinéens. La liste des familles à relancer se tient à jour toute seule.",
      "L'appel, les notes, les inscriptions et la caisse continuent hors connexion, puis se synchronisent au retour du réseau, sans double saisie.",
      "Les matières et coefficients du programme national guinéen sont proposés dès qu'un cycle est activé, et restent modifiables par l'école.",
    ],
    modules: [
      "Scolarité : dossiers élèves et responsables, admissions, inscriptions et réinscriptions",
      "Notes et bulletins : moyennes pondérées, rangs, conseils de classe",
      "Présences : appel par classe, absences, retards et justificatifs",
      "Frais et paiements : barèmes, échéanciers, encaissements, reçus, journal de caisse et recouvrement",
      "Communication et portail parent : annonces ciblées et espace dédié aux familles",
    ],
    tech: ["Application web", "PWA installable", "Mode hors ligne", "Multi-établissements", "Rôles et permissions"],
    screenshot: "/produits/revyon-school.jpg",
    thumb: "/produits/revyon-school-vignette.jpg",
    screenshotCaption:
      "La page publique de Revyon School. L'application de gestion s'ouvre après connexion.",
    theme: { deep: "#0D2B55", surface: "#F5F7FA", accent: "#D9480F", accentText: "#A8370B", soft: "#E3ECF7" },
  },
  {
    slug: "revyon-gestock",
    name: "Revyon Gestock",
    tagline: "Stock, ventes et trésorerie d'un commerce, toujours à jour",
    url: "https://www.revyongestock.com",
    domain: "revyongestock.com",
    category: "Logiciel métier",
    audience: "Commerces, boutiques et PME",
    year: "2026",
    status: "En production",
    cardLine:
      "Stock, ventes, achats et dettes clients suivis au jour le jour, avec factures et reçus à partager. La caisse et la trésorerie restent justes, même quand la boutique travaille sans connexion.",
    description:
      "Logiciel de gestion commerciale pour les boutiques, dépôts et PME : stock, ventes, achats, comptes clients et fournisseurs, charges et trésorerie dans une seule application. Pensé pour un commerce qui tourne au comptoir comme en déplacement, avec ou sans réseau.",
    outcomes: [
      "Ventes, achats et stock au même endroit, avec factures et reçus prêts à partager au client.",
      "Dettes clients et dettes fournisseurs suivies au jour le jour : on sait qui doit quoi, sans cahier.",
      "Caisses et charges toujours à jour, pour une trésorerie lisible à tout moment.",
      "L'application fonctionne sans internet et synchronise tout au retour du réseau.",
    ],
    modules: [
      "Stock : articles, entrées, sorties et niveaux",
      "Ventes : encaissements, factures et reçus partageables",
      "Achats et fournisseurs",
      "Comptes clients et fournisseurs, suivi des dettes",
      "Charges et trésorerie, caisses multiples",
    ],
    tech: ["Application web", "PWA installable", "Mode hors ligne", "Synchronisation automatique", "Comptes validés"],
    screenshot: "/produits/revyon-gestock.jpg",
    thumb: "/produits/revyon-gestock-vignette.jpg",
    screenshotCaption:
      "L'accès à Gestock. Chaque compte est validé par Revyon Tech avant la première connexion.",
    theme: { deep: "#0D2B55", surface: "#F5F7FA", accent: "#C2410C", accentText: "#9A3412", soft: "#E3ECF7" },
  },
  {
    slug: "markagest",
    name: "MarkaGest",
    tagline: "Le suivi du hifz, séance après séance, même sans réseau",
    url: "https://markagest.com",
    domain: "markagest.com",
    category: "Logiciel métier",
    audience: "Écoles coraniques et markaz",
    year: "2026",
    status: "En production",
    cardLine:
      "La progression du hifz suivie séance après séance, élève par élève, sans registre papier. Conçu pour le téléphone et pour des lieux où la connexion n'est pas acquise.",
    description:
      "Plateforme de gestion des markaz et écoles coraniques : organisation des séances, suivi de l'apprentissage et de la mémorisation du Coran élève par élève, évaluations et contributions. Conçue pour un usage quotidien sur téléphone, dans des lieux où la connexion n'est pas acquise.",
    outcomes: [
      "La progression du hifz est suivie séance après séance, par élève, sans registre papier.",
      "Les évaluations gardent la trace de ce qui a été récité, révisé et validé.",
      "Les contributions et la vie administrative du markaz sont tenues au même endroit.",
      "Tout fonctionne hors ligne par défaut : le réseau n'est plus une condition pour travailler.",
    ],
    modules: [
      "Markaz : élèves, encadrants et organisation des groupes",
      "Séances : planification et déroulé du quotidien",
      "Suivi du hifz : mémorisation et révisions, élève par élève",
      "Évaluations et progression",
      "Contributions et suivi administratif",
    ],
    tech: ["Application web", "PWA installable", "Hors ligne par défaut", "Interface française et arabe", "Multi-markaz"],
    screenshot: "/produits/markagest.jpg",
    thumb: "/produits/markagest-vignette.jpg",
    screenshotCaption:
      "L'accès à MarkaGest. Les identifiants sont remis par le directeur du markaz.",
    theme: { deep: "#10284F", surface: "#F4F2EC", accent: "#C9A227", accentText: "#7A5E0C", soft: "#E7E2D5" },
  },
];

export const LINKEDIN_URL = "https://www.linkedin.com/company/revyon-tech/";
