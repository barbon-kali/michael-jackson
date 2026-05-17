import { createFileRoute } from "@tanstack/react-router";
import mjPortrait from "@/assets/mj-portrait.jpg";
import mjPose from "@/assets/mj-pose.jpg";
import mjLean from "@/assets/mj-lean.jpg";
import mjTriptych from "@/assets/mj-triptych.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const moves = [
  {
    name: "Moonwalk",
    arabic: "المشية القمرية",
    year: "1983",
    level: "متوسط",
    duration: "12 درس",
    img: mjPose,
    desc: "الحركة الأيقونية التي قدّمها العالم في Motown 25. انزلاق للخلف يبدو وكأنه ضد قوانين الفيزياء.",
  },
  {
    name: "Anti-Gravity Lean",
    arabic: "الميلان المستحيل",
    year: "1987",
    level: "متقدم",
    duration: "8 دروس",
    img: mjLean,
    desc: "الميلان بزاوية 45 درجة من Smooth Criminal. سرّ الحذاء وتقنية الجسد كاملة.",
  },
  {
    name: "Thriller",
    arabic: "ثريلر",
    year: "1982",
    level: "مبتدئ",
    duration: "20 درس",
    img: mjTriptych,
    desc: "الكوريغرافيا الأكثر شهرة في تاريخ الموسيقى. تعلّمها خطوة بخطوة مع رقصة الزومبي الكاملة.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display text-xl tracking-widest">
            <span className="text-gradient-gold">MJ</span>
            <span className="text-muted-foreground mx-2">·</span>
            <span className="text-sm">ACADEMY</span>
          </div>
          <ul className="hidden md:flex gap-8 text-sm text-muted-foreground">
            <li><a href="#moves" className="hover:text-gold transition">الحركات</a></li>
            <li><a href="#journey" className="hover:text-gold transition">الرحلة</a></li>
            <li><a href="#masterclass" className="hover:text-gold transition">الماستركلاس</a></li>
            <li><a href="#join" className="hover:text-gold transition">انضم</a></li>
          </ul>
          <a href="#join" className="px-4 py-2 text-sm bg-primary text-primary-foreground font-medium hover:bg-gold-bright transition">
            ابدأ الآن
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden grain">
        <div className="absolute inset-0 spotlight animate-spotlight" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="animate-slide-up text-right" dir="rtl">
            <p className="text-gold text-sm tracking-[0.4em] mb-6">★ ملك البوب · 1958 — ∞</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
              تعلّم الرقص<br />
              مثل <span className="text-gradient-gold italic">الأسطورة</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              أكاديمية سينمائية مخصصة لإتقان كل حركة من حركات مايكل جاكسون.
              من Moonwalk إلى Anti-Gravity Lean، تعلّم على يد محترفين بإطار يليق بالأسطورة.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#moves" className="group px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wide hover:bg-gold-bright transition shadow-spotlight">
                ابدأ التدريب ←
              </a>
              <a href="#journey" className="px-8 py-4 border border-gold/40 text-gold hover:bg-gold/10 transition tracking-wide">
                شاهد المقدمة
              </a>
            </div>
            <div className="mt-14 flex gap-10 text-sm">
              <div><div className="font-display text-3xl text-gold">50+</div><div className="text-muted-foreground">حركة</div></div>
              <div><div className="font-display text-3xl text-gold">12K</div><div className="text-muted-foreground">طالب</div></div>
              <div><div className="font-display text-3xl text-gold">4.9★</div><div className="text-muted-foreground">تقييم</div></div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute -inset-10 bg-gold/10 blur-3xl rounded-full" />
            <div className="relative aspect-[3/4] overflow-hidden border border-gold/30 shadow-deep">
              <img src={mjPortrait} alt="بورتريه مايكل جاكسون" className="w-full h-full object-cover grayscale contrast-125" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-6 right-6 left-6 text-right" dir="rtl">
                <p className="font-display text-2xl text-gold">"إنه ليس عن الخطوة..."</p>
                <p className="text-sm text-muted-foreground mt-2">"...بل عن الروح خلفها." — MJ</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs tracking-[0.3em]">
          SCROLL ↓
        </div>
      </section>

      {/* MOVES */}
      <section id="moves" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20" dir="rtl">
            <p className="text-gold text-sm tracking-[0.4em] mb-4">الفصول</p>
            <h2 className="font-display text-5xl md:text-6xl mb-6">الحركات <span className="text-gradient-gold italic">الخالدة</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">كل رقصة هي قطعة من التاريخ. تعلّمها بتفاصيلها كاملة بفيديوهات بزاوية متعددة وتحليل بطيء.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {moves.map((m, i) => (
              <article key={m.name} className="group relative bg-card border border-border overflow-hidden hover:border-gold/50 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <div className="absolute top-4 right-4 font-display text-6xl text-gold/40">0{i + 1}</div>
                </div>
                <div className="p-6 text-right" dir="rtl">
                  <div className="flex items-center justify-between mb-2 text-xs text-muted-foreground tracking-widest">
                    <span>{m.duration}</span>
                    <span className="text-gold">{m.year}</span>
                  </div>
                  <h3 className="font-display text-2xl mb-1">{m.name}</h3>
                  <p className="text-gold/80 text-sm mb-4">{m.arabic}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{m.desc}</p>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs px-3 py-1 border border-gold/30 text-gold">{m.level}</span>
                    <span className="text-sm group-hover:text-gold transition">تعلّم الآن ←</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY / TIMELINE */}
      <section id="journey" className="relative py-32 px-6 bg-stage">
        <div className="max-w-5xl mx-auto" dir="rtl">
          <div className="text-center mb-20">
            <p className="text-gold text-sm tracking-[0.4em] mb-4">المنهج</p>
            <h2 className="font-display text-5xl md:text-6xl">رحلتك إلى <span className="text-gradient-gold italic">الإتقان</span></h2>
          </div>

          <div className="space-y-12 relative">
            <div className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/30 to-transparent" />
            {[
              { step: "I", title: "الأساسيات", desc: "وضعية الجسد، إيقاع القدمين، وحركة الكتفين على إيقاع البوب." },
              { step: "II", title: "التوقيع", desc: "الكزة (Hee-Hee)، رفع القبعة، حركة اليد البيضاء، ودوران 360°." },
              { step: "III", title: "Moonwalk", desc: "تفكيك المشية القمرية إلى 6 مراحل دقيقة مع تمارين توازن." },
              { step: "IV", title: "السينما", desc: "إعادة بناء كوريغرافيا Thriller و Smooth Criminal و Beat It كاملة." },
            ].map((s) => (
              <div key={s.step} className="flex gap-8 items-start group">
                <div className="flex-shrink-0 w-16 h-16 border border-gold/40 flex items-center justify-center font-display text-2xl text-gold bg-background group-hover:bg-gold group-hover:text-primary-foreground transition">
                  {s.step}
                </div>
                <div className="pt-2">
                  <h3 className="font-display text-3xl mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xl">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MASTERCLASS QUOTE */}
      <section id="masterclass" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={mjTriptych} alt="" className="w-full h-full object-cover opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center" dir="rtl">
          <p className="text-gold text-sm tracking-[0.4em] mb-8">★  ماستركلاس  ★</p>
          <blockquote className="font-display text-3xl md:text-5xl leading-tight mb-10">
            "ابدأ في الرقص، <span className="text-gradient-gold italic">إفعل ذلك</span>،<br />
            ولا تتوقّف حتى تصبح <span className="text-gradient-gold italic">الموسيقى</span>."
          </blockquote>
          <p className="text-muted-foreground tracking-widest text-sm">— مايكل جوزيف جاكسون</p>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center border border-gold/30 p-12 md:p-20 relative bg-card shadow-spotlight" dir="rtl">
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="text-gold tracking-[0.4em] text-sm mb-6">★ ابدأ الليلة ★</p>
          <h2 className="font-display text-4xl md:text-6xl mb-6">
            الستارة <span className="text-gradient-gold italic">ترتفع</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            انضم إلى آلاف الراقصين حول العالم في رحلة لإحياء إرث الملك. أول درس مجاناً.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="flex-1 px-5 py-4 bg-input border border-border focus:border-gold outline-none text-right"
              dir="rtl"
            />
            <button type="submit" className="px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-gold-bright transition">
              انضم
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-6 text-center text-sm text-muted-foreground">
        <p className="font-display tracking-widest">MJ ACADEMY · إحياءً لإرث ملك البوب</p>
        <p className="mt-2 text-xs">© 2026 — جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}
