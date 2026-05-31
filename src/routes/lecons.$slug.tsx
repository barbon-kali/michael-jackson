import { createFileRoute, Link, notFound } from "@tanstack/react-router";

type Step = {
  n: string;
  title: string;
  text: string;
  diagram: "stance" | "heel-up" | "slide-back" | "snap" | "alternate" | "lean-prep" | "lean-hinge" | "lean-return" | "zombie-claw" | "zombie-side" | "zombie-head" | "zombie-hip";
};

type Lesson = {
  slug: string;
  name: string;
  french: string;
  year: string;
  level: string;
  duration: string;
  intro: string;
  music: string;
  warning?: string;
  warmup: string[];
  steps: Step[];
  tips: string[];
  history: string;
};

const lessons: Record<string, Lesson> = {
  moonwalk: {
    slug: "moonwalk",
    name: "Moonwalk",
    french: "La Marche Lunaire",
    year: "1983",
    level: "Intermédiaire",
    duration: "≈ 30 min de pratique / jour",
    intro:
      "Le Moonwalk est une illusion : vous semblez avancer alors que vous reculez. La clé tient en deux mots — transfert de poids. À chaque instant, tout votre poids repose sur la jambe d'appui (talon au sol) pendant que l'autre pied glisse, plat puis pointe, sans friction.",
    music:
      "Tempo idéal pour s'entraîner : 117 BPM (« Billie Jean »). Comptez 1-2-3-4 et changez de jambe sur chaque temps.",
    warning:
      "Portez des chaussettes lisses sur un sol dur (parquet, lino). Les semelles caoutchouc bloquent le glissement.",
    warmup: [
      "5 min de rotations de chevilles (10 dans chaque sens, chaque pied).",
      "Montées sur la pointe des pieds : 3 × 15 répétitions pour renforcer les mollets.",
      "Étirements ischio-jambiers et quadriceps, debout, 30 secondes par côté.",
    ],
    steps: [
      {
        n: "01",
        title: "La position de départ",
        text: "Debout, pieds parallèles, écartés de la largeur des hanches. Genoux très légèrement fléchis. Regard droit devant — jamais sur vos pieds. Votre poids est réparti à 50/50.",
        diagram: "stance",
      },
      {
        n: "02",
        title: "Lever le talon gauche",
        text: "Transférez tout votre poids sur le pied droit (qui reste totalement à plat). Décollez le talon gauche en gardant la pointe (les orteils) au sol. Le pied gauche est cambré, comme une rampe.",
        diagram: "heel-up",
      },
      {
        n: "03",
        title: "Glisser le pied gauche en arrière",
        text: "Faites glisser le pied gauche en arrière, à plat sur le sol, sur environ 30–40 cm. Le pied droit ne bouge pas. La pointe gauche doit toucher le sol comme si elle skiait. Aucune friction.",
        diagram: "slide-back",
      },
      {
        n: "04",
        title: "Le « snap » — inversion du poids",
        text: "Une fois le pied gauche en arrière, posez-le à plat et transférez instantanément tout votre poids dessus. Simultanément, décollez le talon droit. C'est le moment magique — il doit être net, presque sec.",
        diagram: "snap",
      },
      {
        n: "05",
        title: "Glisser le pied droit en arrière",
        text: "Le pied droit, talon levé, glisse maintenant en arrière à plat. Vous reproduisez l'étape 3 en miroir. Votre tête et votre buste restent parfaitement immobiles — c'est ce qui crée l'illusion.",
        diagram: "alternate",
      },
      {
        n: "06",
        title: "Enchaîner sans rupture",
        text: "Répétez en alternance — gauche, droite, gauche, droite — sur un rythme régulier. Visez 4 pas en 4 temps. Filmez-vous de profil : si la tête monte et descend, ralentissez et bossez la souplesse des chevilles.",
        diagram: "alternate",
      },
    ],
    tips: [
      "Erreur n°1 : plier les genoux à chaque pas. Ils restent à la même hauteur, immobiles.",
      "Erreur n°2 : regarder ses pieds. Le buste suit le regard — vous perdez l'illusion.",
      "Travaillez d'abord LENTEMENT. La vitesse vient seule quand le transfert de poids est propre.",
      "Pratiquez 10 minutes par jour plutôt que 2 heures par semaine.",
    ],
    history:
      "Michael Jackson présente le Moonwalk au monde le 25 mars 1983 lors de l'émission « Motown 25 », sur « Billie Jean ». Il ne l'a pas inventé : il l'a appris auprès des danseurs Jeffrey Daniel, Cooley Jaxson et Geron « Casper » Candidate, qui l'exécutaient déjà sous le nom de « backslide ». Avant eux, Cab Calloway en faisait une version dès 1932, et Bill Bailey une autre en 1955. MJ l'a magnifié.",
  },

  "anti-gravity-lean": {
    slug: "anti-gravity-lean",
    name: "Anti-Gravity Lean",
    french: "L'Inclinaison Impossible",
    year: "1987",
    level: "Avancé",
    duration: "≈ 20 min + renforcement",
    intro:
      "Dans le clip de « Smooth Criminal » (1987), Michael Jackson s'incline à 45° vers l'avant sans plier la taille. Sur scène, l'illusion repose sur un secret mécanique breveté par MJ lui-même (US Patent 5,255,452) : des chaussures à fente sous le talon qui s'accrochent à des picots sortant du sol. Sans ce dispositif, l'angle maximal humainement tenable est d'environ 25–30°, à condition d'avoir des chevilles et un tronc d'acier.",
    music: "« Smooth Criminal », BPM 118. Le lean se déclenche sur le pont instrumental.",
    warning:
      "Cet exercice sollicite très fortement les tendons d'Achille et le bas du dos. Échauffez-vous 10 min minimum. Stoppez en cas de douleur aiguë.",
    warmup: [
      "Flexions de chevilles contre un mur : 3 × 20.",
      "Gainage planche : 3 × 45 secondes.",
      "Extensions lombaires (Superman au sol) : 3 × 12.",
      "Élévations sur pointes lestées : 4 × 15.",
    ],
    steps: [
      {
        n: "01",
        title: "La posture verrouillée",
        text: "Pieds joints, parallèles. Contractez les fessiers, le ventre, les cuisses — verrouillez tout le corps comme une planche de bois. Les épaules restent basses, la nuque alignée avec la colonne. Aucun pli à la taille n'est autorisé.",
        diagram: "lean-prep",
      },
      {
        n: "02",
        title: "Le hinge depuis les chevilles",
        text: "Inclinez-vous vers l'avant en pivotant UNIQUEMENT depuis les chevilles. Imaginez que vous êtes un domino qui tombe. Vos talons commencent à se décoller du sol. Visez 15° pour commencer — n'allez jamais au-delà de ce que vos mollets contrôlent.",
        diagram: "lean-hinge",
      },
      {
        n: "03",
        title: "Le retour contrôlé",
        text: "Pour remonter, contractez violemment les mollets et les ischio-jambiers pour ramener le corps à la verticale. Aucun balancement des bras pour tricher — la force vient de la chaîne postérieure.",
        diagram: "lean-return",
      },
      {
        n: "04",
        title: "Progression hebdomadaire",
        text: "Semaine 1–2 : tenez 10°. Semaine 3–4 : 15°. Semaine 5+ : 20°. Pour dépasser 25°, il faut une harness, un partenaire qui vous rattrape, ou les chaussures spéciales MJ — sinon vous chutez face contre terre.",
        diagram: "lean-hinge",
      },
    ],
    tips: [
      "Travaillez face à un canapé ou un lit : vous tomberez en sécurité si vous perdez l'équilibre.",
      "Le secret n'est pas la souplesse — c'est la force isométrique du tronc et des mollets.",
      "Sans le dispositif mécanique, n'espérez pas atteindre les 45° du clip. Et ce n'est pas grave : 20° propres impressionnent déjà.",
    ],
    history:
      "MJ a déposé avec ses collaborateurs Michael Bush et Dennis Tompkins le brevet US 5,255,452 en 1992 pour « Method and means for creating anti-gravity illusion ». Le système : une chaussure avec une encoche en V sous le talon, qui se verrouille sur un picot mécanique sortant du plancher de scène au moment précis. Le brevet a expiré en 2005.",
  },

  thriller: {
    slug: "thriller",
    name: "Thriller",
    french: "La Chorégraphie Zombie",
    year: "1983",
    level: "Débutant",
    duration: "≈ 45 min par session × 4 sessions",
    intro:
      "Chorégraphiée par Michael Peters pour le clip de 14 minutes réalisé par John Landis (1983), la séquence des zombies dure 1 min 45 et tient en quelques motifs simples répétés. C'est la danse de groupe la plus exécutée au monde — du flash-mob de Manille (1 500 prisonniers, 2007) à votre mariage.",
    music: "« Thriller », 118 BPM. La chorégraphie commence à 3 min 28 s du morceau original.",
    warmup: [
      "Rotations du cou : lentes, 5 dans chaque sens.",
      "Rotations des épaules et des hanches : 10 chacune.",
      "Quelques squats légers : 2 × 15.",
    ],
    steps: [
      {
        n: "01",
        title: "La pose zombie de départ",
        text: "Pieds écartés largeur des épaules, légèrement tournés vers l'extérieur. Bras tendus vers l'avant, coudes raides, mains en griffe (doigts écartés, recourbés). Tête penchée sur le côté droit. Regard vide.",
        diagram: "zombie-claw",
      },
      {
        n: "02",
        title: "Le pas latéral × 4",
        text: "Pas chassé vers la droite (compte 1), pieds joints (2), pas chassé vers la droite (3), pieds joints (4). Pendant ce temps, les bras en griffe restent tendus devant vous, raides. Puis retour vers la gauche, 4 temps.",
        diagram: "zombie-side",
      },
      {
        n: "03",
        title: "Les coups de tête (head jut)",
        text: "Avancez la tête sèchement vers l'avant — comme un pigeon — sur le temps. Comptez : tête avant (1), retour (2), avant (3), retour (4). Les épaules ne bougent pas, seul le cou travaille. C'est saccadé, mécanique.",
        diagram: "zombie-head",
      },
      {
        n: "04",
        title: "Le coup de hanche + griffe",
        text: "Poussez la hanche droite sèchement vers la droite (compte 1) en levant simultanément le bras droit en griffe au-dessus de la tête. Retour (2). Hanche gauche + bras gauche (3). Retour (4).",
        diagram: "zombie-hip",
      },
      {
        n: "05",
        title: "Le shoulder roll lent",
        text: "Roulement d'épaules : épaule droite vers l'avant, puis vers le haut, puis l'arrière, puis le bas. 4 temps pour un cercle complet. Puis l'épaule gauche. Le visage reste figé, inexpressif.",
        diagram: "zombie-claw",
      },
      {
        n: "06",
        title: "Enchaîner sur la musique",
        text: "Combinez les blocs dans l'ordre : pose → latéral × 8 temps → tête × 8 → hanches × 8 → épaules × 8. Faites tourner. Cela couvre les 32 premiers temps de la chorégraphie. Le reste se construit par couches similaires.",
        diagram: "zombie-side",
      },
    ],
    tips: [
      "Restez raide. La beauté de Thriller, c'est l'absence de fluidité — chaque mouvement claque.",
      "Visage neutre. Pas de sourire, pas de grimace. Vide.",
      "Filmez-vous en miroir avec le clip original côte à côte : c'est le meilleur professeur.",
    ],
    history:
      "Le clip sort le 2 décembre 1983 sur MTV. Budget : 500 000 $ — record absolu de l'époque. Réalisé par John Landis (Le Loup-Garou de Londres). La chorégraphie est signée Michael Peters, qui avait déjà chorégraphié « Beat It ». En 2009, la Bibliothèque du Congrès américain a inscrit le clip au National Film Registry — le premier clip de l'histoire à recevoir cet honneur.",
  },
};

export const Route = createFileRoute("/lecons/$slug")({
  loader: ({ params }) => {
    const lesson = lessons[params.slug];
    if (!lesson) throw notFound();
    return { lesson };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.lesson.name} — Leçon complète | MJ Académie` },
      {
        name: "description",
        content: loaderData?.lesson.intro.slice(0, 155),
      },
    ],
  }),
  component: LessonPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center text-center px-8">
      <div>
        <p className="text-[color:var(--gold)] tracking-[0.5em] text-xs uppercase mb-4">404</p>
        <h1 className="font-display text-5xl mb-6">Leçon introuvable</h1>
        <Link to="/" className="text-[color:var(--gold)] underline">Retour à l'accueil</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center text-center px-8">
      <p>Une erreur est survenue : {error.message}</p>
    </div>
  ),
});

/* ============== SVG diagrams ============== */

function Diagram({ kind }: { kind: Step["diagram"] }) {
  // Common style
  const gold = "var(--gold)";
  const muted = "currentColor";

  switch (kind) {
    case "stance":
      return (
        <DiagramFrame label="Position de départ — vue de dessus">
          {/* Floor */}
          <line x1="20" y1="160" x2="280" y2="160" stroke={muted} strokeOpacity="0.2" />
          {/* Two feet flat, parallel */}
          <Foot x={120} y={120} label="G" />
          <Foot x={170} y={120} label="D" />
          <ArrowDown x={145} y={70} />
          <text x={150} y={60} textAnchor="middle" fontSize="9" fill={gold} letterSpacing="2">
            POIDS 50 / 50
          </text>
        </DiagramFrame>
      );

    case "heel-up":
      return (
        <DiagramFrame label="Étape 2 — talon gauche levé, vue de profil">
          <line x1="20" y1="160" x2="280" y2="160" stroke={muted} strokeOpacity="0.2" />
          {/* Right foot flat */}
          <FootSide x={170} y={155} flat />
          <text x={190} y={150} fontSize="9" fill={gold}>D — à plat</text>
          {/* Left foot heel up */}
          <FootSide x={120} y={155} heelUp />
          <text x={70} y={130} fontSize="9" fill={gold} textAnchor="end">G — talon levé</text>
        </DiagramFrame>
      );

    case "slide-back":
      return (
        <DiagramFrame label="Étape 3 — glissement arrière du pied gauche">
          <line x1="20" y1="160" x2="280" y2="160" stroke={muted} strokeOpacity="0.2" />
          <FootSide x={170} y={155} flat />
          <text x={170} y={148} fontSize="9" fill={muted} textAnchor="middle">D fixe</text>
          {/* Ghost of previous position */}
          <FootSide x={120} y={155} heelUp ghost />
          <FootSide x={70} y={155} flat />
          <ArrowLeft x1={115} x2={75} y={170} />
          <text x={95} y={185} fontSize="9" fill={gold} textAnchor="middle">glisser ←</text>
        </DiagramFrame>
      );

    case "snap":
      return (
        <DiagramFrame label="Étape 4 — « snap » : inversion du poids">
          <line x1="20" y1="160" x2="280" y2="160" stroke={muted} strokeOpacity="0.2" />
          {/* Left foot flat (now weighted) */}
          <FootSide x={70} y={155} flat />
          <text x={70} y={148} fontSize="9" fill={gold} textAnchor="middle">G — POIDS</text>
          {/* Right foot heel up */}
          <FootSide x={170} y={155} heelUp />
          <text x={210} y={150} fontSize="9" fill={gold}>D — talon levé</text>
          <text x={150} y={195} fontSize="9" fill={gold} textAnchor="middle" letterSpacing="2">
            ⚡ INSTANTANÉ
          </text>
        </DiagramFrame>
      );

    case "alternate":
      return (
        <DiagramFrame label="Séquence complète — alternance des appuis">
          <line x1="20" y1="120" x2="280" y2="120" stroke={muted} strokeOpacity="0.2" />
          {[
            { x: 50, label: "1", g: "flat", d: "up" },
            { x: 110, label: "2", g: "up", d: "flat" },
            { x: 170, label: "3", g: "flat", d: "up" },
            { x: 230, label: "4", g: "up", d: "flat" },
          ].map((s, i) => (
            <g key={i}>
              <FootSide x={s.x - 8} y={115} heelUp={s.g === "up"} flat={s.g === "flat"} small />
              <FootSide x={s.x + 8} y={115} heelUp={s.d === "up"} flat={s.d === "flat"} small />
              <text x={s.x} y={150} fontSize="10" fill={gold} textAnchor="middle">{s.label}</text>
            </g>
          ))}
          <text x={150} y={175} fontSize="9" fill={muted} textAnchor="middle" opacity="0.7">
            tempo régulier — tête immobile
          </text>
        </DiagramFrame>
      );

    case "lean-prep":
      return (
        <DiagramFrame label="Posture verrouillée — vue de profil">
          <line x1="20" y1="180" x2="280" y2="180" stroke={muted} strokeOpacity="0.2" />
          <StickFigure x={150} y={180} angle={0} />
          <text x={220} y={100} fontSize="9" fill={gold}>tronc rigide</text>
          <text x={220} y={140} fontSize="9" fill={gold}>fessiers serrés</text>
          <text x={220} y={170} fontSize="9" fill={gold}>mollets engagés</text>
        </DiagramFrame>
      );

    case "lean-hinge":
      return (
        <DiagramFrame label="Hinge depuis les chevilles">
          <line x1="20" y1="180" x2="280" y2="180" stroke={muted} strokeOpacity="0.2" />
          <StickFigure x={120} y={180} angle={0} ghost />
          <StickFigure x={120} y={180} angle={20} />
          {/* angle arc */}
          <path d="M 120 130 A 50 50 0 0 1 150 145" fill="none" stroke={gold} strokeWidth="1" />
          <text x={165} y={140} fontSize="10" fill={gold}>20°</text>
          <text x={150} y={195} fontSize="9" fill={muted} textAnchor="middle">pivot = cheville</text>
        </DiagramFrame>
      );

    case "lean-return":
      return (
        <DiagramFrame label="Retour contrôlé">
          <line x1="20" y1="180" x2="280" y2="180" stroke={muted} strokeOpacity="0.2" />
          <StickFigure x={120} y={180} angle={20} ghost />
          <StickFigure x={120} y={180} angle={0} />
          <ArrowCurve />
          <text x={200} y={110} fontSize="9" fill={gold}>chaîne postérieure</text>
        </DiagramFrame>
      );

    case "zombie-claw":
      return (
        <DiagramFrame label="Pose zombie — bras en griffe">
          <ZombieFigure x={150} y={180} pose="claw" />
        </DiagramFrame>
      );

    case "zombie-side":
      return (
        <DiagramFrame label="Pas chassé latéral × 4">
          <line x1="20" y1="160" x2="280" y2="160" stroke={muted} strokeOpacity="0.2" />
          <FootSide x={90} y={155} flat small />
          <FootSide x={105} y={155} flat small />
          <ArrowRightWide x1={120} x2={180} y={155} />
          <FootSide x={195} y={155} flat small />
          <FootSide x={210} y={155} flat small />
          <text x={150} y={140} fontSize="9" fill="var(--gold)" textAnchor="middle">→ → → →</text>
          <text x={150} y={185} fontSize="9" fill="currentColor" textAnchor="middle" opacity="0.7">
            1 — 2 — 3 — 4
          </text>
        </DiagramFrame>
      );

    case "zombie-head":
      return (
        <DiagramFrame label="Coup de tête (head jut)">
          <ZombieFigure x={120} y={180} pose="head-back" ghost />
          <ZombieFigure x={120} y={180} pose="head-front" />
          <text x={210} y={90} fontSize="9" fill="var(--gold)">cou seul →</text>
        </DiagramFrame>
      );

    case "zombie-hip":
      return (
        <DiagramFrame label="Coup de hanche + griffe haute">
          <ZombieFigure x={150} y={180} pose="hip-right" />
        </DiagramFrame>
      );
  }
}

function DiagramFrame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <figure className="border border-[color:var(--gold)]/20 bg-background/40 p-6">
      <svg viewBox="0 0 300 220" className="w-full h-auto text-foreground" aria-label={label}>
        {children}
      </svg>
      <figcaption className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-3 text-center">
        {label}
      </figcaption>
    </figure>
  );
}

function Foot({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <ellipse cx={x} cy={y} rx="10" ry="20" fill="none" stroke="var(--gold)" strokeWidth="1.2" />
      <text x={x} y={y + 4} fontSize="9" fill="var(--gold)" textAnchor="middle">{label}</text>
    </g>
  );
}

function FootSide({
  x,
  y,
  flat,
  heelUp,
  ghost,
  small,
}: {
  x: number;
  y: number;
  flat?: boolean;
  heelUp?: boolean;
  ghost?: boolean;
  small?: boolean;
}) {
  const w = small ? 14 : 22;
  const h = small ? 4 : 6;
  const opacity = ghost ? 0.25 : 1;
  if (heelUp) {
    return (
      <g opacity={opacity}>
        {/* angled foot, toe on floor, heel up */}
        <polygon
          points={`${x - w / 2},${y} ${x + w / 2},${y - h * 2.2} ${x + w / 2 - 2},${y - h * 2.2 - 1} ${x - w / 2 - 1},${y + 1}`}
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.2"
        />
      </g>
    );
  }
  return (
    <g opacity={opacity}>
      <rect x={x - w / 2} y={y - h} width={w} height={h} fill="none" stroke="var(--gold)" strokeWidth="1.2" rx="1" />
    </g>
  );
}

function ArrowDown({ x, y }: { x: number; y: number }) {
  return (
    <g stroke="var(--gold)" strokeWidth="1" fill="none">
      <line x1={x} y1={y} x2={x} y2={y + 30} />
      <polyline points={`${x - 4},${y + 25} ${x},${y + 32} ${x + 4},${y + 25}`} />
    </g>
  );
}

function ArrowLeft({ x1, x2, y }: { x1: number; x2: number; y: number }) {
  return (
    <g stroke="var(--gold)" strokeWidth="1" fill="none">
      <line x1={x1} y1={y} x2={x2} y2={y} />
      <polyline points={`${x2 + 5},${y - 4} ${x2},${y} ${x2 + 5},${y + 4}`} />
    </g>
  );
}

function ArrowRightWide({ x1, x2, y }: { x1: number; x2: number; y: number }) {
  return (
    <g stroke="var(--gold)" strokeWidth="1" fill="none">
      <line x1={x1} y1={y} x2={x2} y2={y} strokeDasharray="3 3" />
      <polyline points={`${x2 - 6},${y - 4} ${x2},${y} ${x2 - 6},${y + 4}`} />
    </g>
  );
}

function ArrowCurve() {
  return (
    <path d="M 130 130 Q 170 100 200 120" fill="none" stroke="var(--gold)" strokeWidth="1" markerEnd="url(#arr)" />
  );
}

function StickFigure({
  x,
  y,
  angle,
  ghost,
}: {
  x: number;
  y: number;
  angle: number;
  ghost?: boolean;
}) {
  // y is the floor (feet). Rotate body around feet pivot.
  const rad = (angle * Math.PI) / 180;
  const headH = 90;
  const bodyH = 60;
  const headX = x + Math.sin(rad) * headH;
  const headY = y - Math.cos(rad) * headH;
  const hipX = x + Math.sin(rad) * 35;
  const hipY = y - Math.cos(rad) * 35;
  return (
    <g stroke={ghost ? "currentColor" : "var(--gold)"} strokeWidth={ghost ? 1 : 1.5} fill="none" opacity={ghost ? 0.3 : 1}>
      {/* legs */}
      <line x1={x - 6} y1={y} x2={hipX} y2={hipY} />
      <line x1={x + 6} y1={y} x2={hipX} y2={hipY} />
      {/* spine */}
      <line x1={hipX} y1={hipY} x2={headX} y2={headY} />
      {/* head */}
      <circle cx={headX + Math.sin(rad) * 8} cy={headY - Math.cos(rad) * 8} r="8" />
      {/* arms */}
      <line x1={headX - Math.sin(rad) * 15} y1={headY + Math.cos(rad) * 15} x2={headX - Math.sin(rad) * 15 - 20} y2={headY + Math.cos(rad) * 15 + 25} />
      <line x1={headX - Math.sin(rad) * 15} y1={headY + Math.cos(rad) * 15} x2={headX - Math.sin(rad) * 15 + 20} y2={headY + Math.cos(rad) * 15 + 25} />
      {/* floor mark */}
      {!ghost && <circle cx={x} cy={y} r="2" fill="var(--gold)" />}
    </g>
  );
}

function ZombieFigure({
  x,
  y,
  pose,
  ghost,
}: {
  x: number;
  y: number;
  pose: "claw" | "head-front" | "head-back" | "hip-right";
  ghost?: boolean;
}) {
  const stroke = ghost ? "currentColor" : "var(--gold)";
  const opacity = ghost ? 0.3 : 1;
  const sw = ghost ? 1 : 1.5;

  let headOffsetX = 0;
  if (pose === "head-front") headOffsetX = 12;
  if (pose === "head-back") headOffsetX = -4;

  const hipShift = pose === "hip-right" ? 12 : 0;
  const armRightUp = pose === "hip-right";

  return (
    <g stroke={stroke} strokeWidth={sw} fill="none" opacity={opacity}>
      {/* legs */}
      <line x1={x - 18} y1={y} x2={x - 8 + hipShift} y2={y - 55} />
      <line x1={x + 18} y1={y} x2={x + 8 + hipShift} y2={y - 55} />
      {/* hip */}
      <line x1={x - 8 + hipShift} y1={y - 55} x2={x + 8 + hipShift} y2={y - 55} />
      {/* torso */}
      <line x1={x - 8 + hipShift} y1={y - 55} x2={x - 8} y2={y - 95} />
      <line x1={x + 8 + hipShift} y1={y - 55} x2={x + 8} y2={y - 95} />
      {/* shoulders */}
      <line x1={x - 8} y1={y - 95} x2={x + 8} y2={y - 95} />
      {/* head */}
      <circle cx={x + headOffsetX} cy={y - 110} r="10" />
      {/* arms */}
      {pose === "claw" || pose === "head-front" || pose === "head-back" ? (
        <>
          <line x1={x - 8} y1={y - 95} x2={x - 30} y2={y - 80} />
          <line x1={x - 30} y1={y - 80} x2={x - 55} y2={y - 90} />
          <line x1={x + 8} y1={y - 95} x2={x + 30} y2={y - 80} />
          <line x1={x + 30} y1={y - 80} x2={x + 55} y2={y - 90} />
          {/* claws */}
          <ClawHand x={x - 60} y={y - 90} />
          <ClawHand x={x + 60} y={y - 90} />
        </>
      ) : null}
      {pose === "hip-right" ? (
        <>
          {/* left arm down */}
          <line x1={x - 8} y1={y - 95} x2={x - 25} y2={y - 70} />
          <line x1={x - 25} y1={y - 70} x2={x - 30} y2={y - 50} />
          {/* right arm UP claw */}
          <line x1={x + 8} y1={y - 95} x2={x + 20} y2={y - 125} />
          <line x1={x + 20} y1={y - 125} x2={x + 25} y2={y - 150} />
          <ClawHand x={x + 30} y={y - 155} />
        </>
      ) : null}
    </g>
  );
}

function ClawHand({ x, y }: { x: number; y: number }) {
  return (
    <g>
      {[-6, -2, 2, 6].map((dx, i) => (
        <line key={i} x1={x} y1={y} x2={x + dx} y2={y - 8} stroke="var(--gold)" strokeWidth="1" />
      ))}
    </g>
  );
}

/* ============== Page ============== */

function LessonPage() {
  const { lesson } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/40 border-b border-[color:var(--gold)]/10">
        <nav className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-3">
            <span className="font-display italic text-3xl text-gradient-gold">M</span>
            <span className="text-[10px] tracking-[0.5em] text-muted-foreground uppercase">Académie</span>
          </Link>
          <Link to="/" className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground hover:text-[color:var(--gold)]">
            ← Accueil
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="pt-40 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-[color:var(--gold)] text-[10px] tracking-[0.6em] uppercase mb-6">
            Leçon — {lesson.year} — {lesson.level}
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-6">
            {lesson.name}
            <br />
            <span className="font-display-italic text-gradient-gold text-3xl md:text-5xl">{lesson.french}</span>
          </h1>
          <p className="font-serif text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8">
            {lesson.intro}
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-[10px] tracking-[0.3em] uppercase border-y border-[color:var(--gold)]/20 py-5">
            <div>
              <span className="text-muted-foreground">Niveau · </span>
              <span className="text-[color:var(--gold)]">{lesson.level}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Durée · </span>
              <span className="text-[color:var(--gold)]">{lesson.duration}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Année · </span>
              <span className="text-[color:var(--gold)]">{lesson.year}</span>
            </div>
          </div>
        </div>
      </section>

      {/* MUSIC + WARNING */}
      <section className="px-8 pb-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="border border-[color:var(--gold)]/20 p-6">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[color:var(--gold)] mb-3">♪ Musique</p>
            <p className="font-serif text-base leading-relaxed">{lesson.music}</p>
          </div>
          {lesson.warning && (
            <div className="border border-[color:var(--gold)]/20 p-6">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[color:var(--gold)] mb-3">⚠ Sécurité</p>
              <p className="font-serif text-base leading-relaxed">{lesson.warning}</p>
            </div>
          )}
        </div>
      </section>

      {/* WARMUP */}
      <section className="px-8 py-16 bg-stage">
        <div className="max-w-4xl mx-auto">
          <p className="text-[color:var(--gold)] text-[10px] tracking-[0.6em] uppercase mb-4">Préambule</p>
          <h2 className="font-display text-4xl mb-8">Échauffement</h2>
          <ul className="space-y-4 font-serif text-lg">
            {lesson.warmup.map((w, i) => (
              <li key={i} className="flex gap-4 border-b border-[color:var(--gold)]/10 pb-4">
                <span className="font-display-italic text-[color:var(--gold)] text-xl">·</span>
                <span className="text-muted-foreground">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* STEPS */}
      <section className="px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-[color:var(--gold)] text-[10px] tracking-[0.6em] uppercase mb-4 text-center">Le cours</p>
          <h2 className="font-display text-5xl mb-16 text-center">
            <span className="font-display-italic text-gradient-gold">Décomposition</span> pas à pas
          </h2>

          <div className="space-y-20">
            {lesson.steps.map((step) => (
              <article key={step.n} className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="font-display-italic text-6xl text-gradient-gold mb-4">{step.n}</p>
                  <h3 className="font-display text-3xl mb-4 leading-tight">{step.title}</h3>
                  <p className="font-serif text-lg text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
                <Diagram kind={step.diagram} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="px-8 py-24 bg-stage">
        <div className="max-w-4xl mx-auto">
          <p className="text-[color:var(--gold)] text-[10px] tracking-[0.6em] uppercase mb-4">Conseils du maître</p>
          <h2 className="font-display text-4xl mb-10">À retenir</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {lesson.tips.map((tip, i) => (
              <div key={i} className="border-l-2 border-[color:var(--gold)] pl-5 py-2">
                <p className="font-serif italic text-lg">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="px-8 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[color:var(--gold)] text-[10px] tracking-[0.6em] uppercase mb-6">Histoire</p>
          <h2 className="font-display-italic text-4xl text-gradient-gold mb-8">D'où vient ce mouvement</h2>
          <p className="font-serif text-lg leading-relaxed text-muted-foreground">{lesson.history}</p>
        </div>
      </section>

      {/* NEXT */}
      <section className="px-8 py-20 border-t border-[color:var(--gold)]/10">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-between items-center">
          <Link to="/" className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground hover:text-[color:var(--gold)]">
            ← Toutes les leçons
          </Link>
          <div className="flex gap-3">
            {Object.values(lessons)
              .filter((l) => l.slug !== lesson.slug)
              .map((l) => (
                <Link
                  key={l.slug}
                  to="/lecons/$slug"
                  params={{ slug: l.slug }}
                  className="text-[11px] uppercase tracking-[0.3em] border border-[color:var(--gold)]/40 text-[color:var(--gold)] px-5 py-3 hover:bg-[color:var(--gold)] hover:text-primary-foreground transition"
                >
                  {l.name} →
                </Link>
              ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[color:var(--gold)]/10 py-12 px-8 text-center">
        <p className="font-display-italic text-2xl text-gradient-gold mb-2">M Académie</p>
        <p className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground">En hommage à l'héritage du Roi de la Pop</p>
      </footer>
    </div>
  );
}
