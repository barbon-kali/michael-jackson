import { createFileRoute, Link } from "@tanstack/react-router";
import mjPortrait from "@/assets/mj-portrait.jpg";
import mjPose from "@/assets/mj-pose.jpg";
import mjLean from "@/assets/mj-lean.jpg";
import mjTriptych from "@/assets/mj-triptych.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const moves = [
  {
    slug: "moonwalk",
    name: "Moonwalk",
    french: "La Marche Lunaire",
    year: "1983",
    level: "Intermédiaire",
    duration: "6 étapes illustrées",
    img: mjPose,
    desc: "L'illusion du glissement arrière, décomposée en 6 étapes avec schémas de pas. Présentée à Motown 25 sur « Billie Jean ».",
  },
  {
    slug: "anti-gravity-lean",
    name: "Anti-Gravity Lean",
    french: "L'Inclinaison Impossible",
    year: "1987",
    level: "Avancé",
    duration: "4 étapes + renforcement",
    img: mjLean,
    desc: "L'inclinaison de Smooth Criminal expliquée — du brevet US 5,255,452 à la version sans chaussures spéciales.",
  },
  {
    slug: "thriller",
    name: "Thriller",
    french: "La Chorégraphie Zombie",
    year: "1983",
    level: "Débutant",
    duration: "6 étapes illustrées",
    img: mjTriptych,
    desc: "La chorégraphie de Michael Peters, motif par motif : griffe, pas chassé, head jut, coup de hanche.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/40 border-b border-[color:var(--gold)]/10">
        <nav className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span className="font-display italic text-3xl text-gradient-gold">M</span>
            <span className="text-[10px] tracking-[0.5em] text-muted-foreground uppercase">Académie</span>
          </div>
          <ul className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <li><a href="#moves" className="hover:text-[color:var(--gold)] transition">Mouvements</a></li>
            <li><a href="#journey" className="hover:text-[color:var(--gold)] transition">Parcours</a></li>
            <li><a href="#masterclass" className="hover:text-[color:var(--gold)] transition">Masterclass</a></li>
            <li><a href="#join" className="hover:text-[color:var(--gold)] transition">Rejoindre</a></li>
          </ul>
          <a href="#join" className="text-[11px] uppercase tracking-[0.3em] border border-[color:var(--gold)]/40 text-[color:var(--gold)] px-5 py-3 hover:bg-[color:var(--gold)] hover:text-primary-foreground transition">
            Commencer
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden grain">
        <div className="absolute inset-0 spotlight animate-spotlight" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        {/* Decorative side text */}
        <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[10px] tracking-[0.6em] text-muted-foreground uppercase">
          Est. 1958 — Roi de la Pop — ∞
        </div>
        <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 rotate-90 origin-right text-[10px] tracking-[0.6em] text-[color:var(--gold)] uppercase">
          Chapitre I — La Légende
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-8 items-center py-24">
          <div className="lg:col-span-7 animate-slide-up">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-16 bg-[color:var(--gold)]" />
              <p className="text-[color:var(--gold)] text-[10px] tracking-[0.6em] uppercase">Une Académie Cinématographique</p>
            </div>

            <h1 className="font-display text-[clamp(3.5rem,9vw,9rem)] leading-[0.88] mb-8 tracking-tight">
              Dansez<br />
              <span className="font-display-italic text-gradient-gold">comme</span> le<br />
              <span className="relative inline-block">
                Roi
                <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-[color:var(--gold)] to-transparent" />
              </span>
            </h1>

            <p className="font-serif text-xl md:text-2xl text-muted-foreground max-w-xl mb-12 leading-[1.5] italic">
              « Une académie cinématographique consacrée à la maîtrise
              de chaque geste de Michael Jackson — du Moonwalk au Anti-Gravity Lean,
              enseigné dans un écrin digne de la légende. »
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a href="#moves" className="group relative px-10 py-5 bg-[color:var(--gold)] text-primary-foreground text-[11px] uppercase tracking-[0.4em] font-semibold hover:shadow-spotlight transition-all">
                Entrer en scène
                <span className="ml-3 inline-block group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="#journey" className="px-10 py-5 text-[11px] uppercase tracking-[0.4em] text-foreground border-b border-foreground/30 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] transition">
                Voir la bande-annonce
              </a>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-6 max-w-lg border-t border-[color:var(--gold)]/20 pt-8">
              <div>
                <div className="font-display text-4xl text-[color:var(--gold)]">50+</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">Mouvements</div>
              </div>
              <div>
                <div className="font-display text-4xl text-[color:var(--gold)]">12K</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">Danseurs</div>
              </div>
              <div>
                <div className="font-display text-4xl text-[color:var(--gold)]">4.9<span className="text-base">★</span></div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">Évaluation</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative animate-fade-in">
            <div className="absolute -inset-16 bg-[color:var(--gold)]/10 blur-3xl rounded-full" />
            <div className="relative aspect-[3/4] overflow-hidden border border-[color:var(--gold)]/30 shadow-deep">
              <img src={mjPortrait} alt="Portrait de Michael Jackson" className="w-full h-full object-cover grayscale contrast-125" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
              <div className="absolute top-4 left-4 right-4 flex justify-between text-[9px] tracking-[0.4em] text-[color:var(--gold)] uppercase">
                <span>N° 001</span>
                <span>MJ — ∞</span>
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-display-italic text-2xl md:text-3xl text-[color:var(--gold)] leading-tight">
                  « Ce n'est pas le pas qui compte… »
                </p>
                <p className="font-serif italic text-base text-muted-foreground mt-3">
                  …mais l'âme derrière. — M.J.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground">
          <span className="text-[9px] tracking-[0.5em] uppercase">Défiler</span>
          <div className="w-px h-12 bg-gradient-to-b from-[color:var(--gold)] to-transparent" />
        </div>
      </section>

      {/* MOVES */}
      <section id="moves" className="relative py-40 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-[color:var(--gold)]/40" />
              <p className="text-[color:var(--gold)] text-[10px] tracking-[0.6em] uppercase">Les Chapitres</p>
              <div className="h-px w-12 bg-[color:var(--gold)]/40" />
            </div>
            <h2 className="font-display text-6xl md:text-8xl mb-8 leading-none">
              Les Gestes<br />
              <span className="font-display-italic text-gradient-gold">Immortels</span>
            </h2>
            <p className="font-serif italic text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Chaque danse est une fragment d'histoire. Apprenez-la dans ses moindres détails
              grâce à des vidéos multi-angles et une analyse au ralenti.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {moves.map((m, i) => (
              <article key={m.name} className="group relative">
                <div className="relative aspect-[3/4] overflow-hidden mb-6 border border-[color:var(--gold)]/10 group-hover:border-[color:var(--gold)]/50 transition-all duration-700">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute top-5 left-5 right-5 flex justify-between text-[9px] tracking-[0.4em] uppercase">
                    <span className="text-[color:var(--gold)]">Chapitre 0{i + 1}</span>
                    <span className="text-muted-foreground">{m.year}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-[color:var(--gold)] border border-[color:var(--gold)]/40 px-3 py-1">{m.level}</span>
                  </div>
                </div>
                <div>
                  <p className="font-serif italic text-[color:var(--gold)] text-sm mb-2">{m.french}</p>
                  <h3 className="font-display text-4xl mb-4 leading-tight">{m.name}</h3>
                  <p className="font-serif text-base text-muted-foreground leading-relaxed mb-6">{m.desc}</p>
                  <div className="flex items-center justify-between border-t border-[color:var(--gold)]/20 pt-4 text-[10px] tracking-[0.4em] uppercase">
                    <span className="text-muted-foreground">{m.duration}</span>
                    <span className="text-[color:var(--gold)] group-hover:translate-x-1 transition-transform inline-block">Apprendre →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY / TIMELINE */}
      <section id="journey" className="relative py-40 px-8 bg-stage">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-[color:var(--gold)]/40" />
              <p className="text-[color:var(--gold)] text-[10px] tracking-[0.6em] uppercase">Le Programme</p>
              <div className="h-px w-12 bg-[color:var(--gold)]/40" />
            </div>
            <h2 className="font-display text-6xl md:text-8xl leading-none">
              Votre voyage vers<br />
              <span className="font-display-italic text-gradient-gold">la maîtrise</span>
            </h2>
          </div>

          <div className="space-y-16 relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[color:var(--gold)] via-[color:var(--gold)]/30 to-transparent" />
            {[
              { step: "I", title: "Les Fondations", desc: "Posture du corps, rythme des pieds et mouvement des épaules sur le beat de la pop." },
              { step: "II", title: "La Signature", desc: "Le « Hee-Hee », le geste du chapeau, le gant blanc et la rotation à 360°." },
              { step: "III", title: "Le Moonwalk", desc: "Décomposition de la marche lunaire en six étapes précises avec exercices d'équilibre." },
              { step: "IV", title: "Le Cinéma", desc: "Reconstruction intégrale des chorégraphies Thriller, Smooth Criminal et Beat It." },
            ].map((s) => (
              <div key={s.step} className="flex gap-10 items-start group">
                <div className="flex-shrink-0 w-16 h-16 border border-[color:var(--gold)]/40 flex items-center justify-center font-display-italic text-3xl text-[color:var(--gold)] bg-background group-hover:bg-[color:var(--gold)] group-hover:text-primary-foreground transition-all duration-500">
                  {s.step}
                </div>
                <div className="pt-2 flex-1 border-b border-[color:var(--gold)]/10 pb-12">
                  <h3 className="font-display text-4xl mb-3">{s.title}</h3>
                  <p className="font-serif text-lg text-muted-foreground leading-relaxed max-w-2xl">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MASTERCLASS QUOTE */}
      <section id="masterclass" className="relative py-40 px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={mjTriptych} alt="" className="w-full h-full object-cover opacity-15 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-12 bg-[color:var(--gold)]/40" />
            <p className="text-[color:var(--gold)] text-[10px] tracking-[0.6em] uppercase">Masterclass</p>
            <div className="h-px w-12 bg-[color:var(--gold)]/40" />
          </div>
          <blockquote className="font-display-italic text-4xl md:text-6xl leading-[1.15] mb-12">
            « Commencez à danser,<br />
            <span className="text-gradient-gold">faites-le</span>,<br />
            et ne vous arrêtez pas<br />
            avant de <span className="text-gradient-gold">devenir la musique</span>. »
          </blockquote>
          <p className="font-serif italic text-muted-foreground tracking-[0.3em] text-sm uppercase">— Michael Joseph Jackson</p>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="relative py-40 px-8">
        <div className="max-w-4xl mx-auto text-center border border-[color:var(--gold)]/30 p-12 md:p-24 relative bg-card shadow-spotlight">
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)] to-transparent" />
          <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)] to-transparent" />
          <p className="text-[color:var(--gold)] tracking-[0.6em] text-[10px] uppercase mb-8">Accès Libre</p>
          <h2 className="font-display text-5xl md:text-7xl mb-8 leading-none">
            Le rideau<br />
            <span className="font-display-italic text-gradient-gold">se lève</span>
          </h2>
          <p className="font-serif italic text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Aucune inscription. Aucun compte. Entrez directement en scène
            et commencez à apprendre les mouvements du Roi — gratuitement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#moves" className="px-10 py-5 bg-[color:var(--gold)] text-primary-foreground text-[11px] uppercase tracking-[0.4em] font-semibold hover:opacity-90 transition">
              Commencer maintenant
            </a>
            <a href="#journey" className="px-10 py-5 text-[11px] uppercase tracking-[0.4em] text-foreground border border-foreground/30 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] transition">
              Voir le parcours
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[color:var(--gold)]/10 py-12 px-8 text-center">
        <p className="font-display-italic text-2xl text-gradient-gold mb-2">M Académie</p>
        <p className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground">En hommage à l'héritage du Roi de la Pop</p>
        <p className="mt-4 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">© 2026 — Tous droits réservés</p>
      </footer>
    </div>
  );
}
