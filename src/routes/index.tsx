import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin, Phone, Clock, Star, Utensils, Leaf, Flame, Wine, Users,
  Wifi, CreditCard, Car, Accessibility, ChefHat, Calendar, ArrowRight, Menu as MenuIcon, X,
} from "lucide-react";
import heroThali from "@/assets/hero-thali.jpg";
import dishTikka from "@/assets/dish-tikka.jpg";
import dishButter from "@/assets/dish-butter-chicken.jpg";
import dishKulfi from "@/assets/dish-kulfi.jpg";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "White Oak Restaurant — North Indian Dining in Paharganj, Delhi" },
      { name: "description", content: "Tandoor classics, signature thalis & legendary kebabs in the heart of Paharganj. 4.7★ from 1,776 diners. Dine-in, takeaway & delivery." },
      { property: "og:title", content: "White Oak Restaurant — North Indian Dining, New Delhi" },
      { property: "og:description", content: "Tandoor classics & signature thalis in Paharganj. 4.7★ from 1,776 diners." },
      { property: "og:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: "White Oak Restaurant",
        image: "/og-image.jpg",
        address: {
          "@type": "PostalAddress",
          streetAddress: "3/5, Desh Bandhu Gupta Rd, Bazar Sangatrashan, Multani Dhanda, Sadar Bazaar",
          addressLocality: "New Delhi",
          addressRegion: "Delhi",
          postalCode: "110055",
          addressCountry: "IN",
        },
        telephone: "+91-9911611916",
        servesCuisine: "North Indian",
        priceRange: "₹₹",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "1776" },
        openingHours: "Mo-Su 11:00-24:00",
      }),
    }],
  }),
  component: Index,
});

const NAV = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

const DISHES = [
  { name: "Veg Special Thali", price: "₹450", desc: "A royal platter — dal makhani, paneer butter masala, seasonal sabzi, naan, jeera rice, raita and kulfi.", img: heroThali, tag: "Signature" },
  { name: "Murgh Tikka", price: "₹420", desc: "Yogurt-marinated chicken charred in the clay tandoor, finished with lime and chaat masala.", img: dishTikka, tag: "Tandoor" },
  { name: "Butter Chicken", price: "₹480", desc: "Slow-cooked tomato gravy, single-origin butter, kasoori methi — served with laccha naan.", img: dishButter, tag: "Most Loved" },
  { name: "Pistachio Kulfi", price: "₹180", desc: "House-churned saffron kulfi with toasted pistachio and a whisper of rose.", img: dishKulfi, tag: "Dessert" },
];

const REVIEWS = [
  { name: "Per Urdahl", role: "Local Guide · 242 reviews", text: "Arrived to a late lunch. Lovely chicken filet in gravy. Very helpful staff. Nice and quiet place. Recommended.", stars: 5 },
  { name: "Fran Goodwin", role: "Local Guide · 129 reviews", text: "Went early evening and had the place to myself. Staff were polite and the meal was excellent — service felt personal.", stars: 5 },
  { name: "Caroline Allen", role: "Local Guide · 73 reviews", text: "Excellent food and staff. The tikka pineapple is highly recommended. Ate here ~10 times during our Delhi trip — eat with confidence!", stars: 5 },
];

const FAQS = [
  { q: "Do you take reservations?", a: "Yes — we accept reservations daily. Brunch reservations are recommended. Call us at 099116 11916 or use the form below." },
  { q: "What are your hours?", a: "We are open every day, closing at 12:00 AM. Lunch service begins at 11:00 AM." },
  { q: "Is the venue wheelchair accessible?", a: "Fully accessible — wheelchair-friendly entrance, seating, parking and restrooms." },
  { q: "Do you offer delivery and takeaway?", a: "Yes. Dine-in, takeaway and no-contact delivery are all available." },
  { q: "What's the typical spend per person?", a: "Most guests spend between ₹200 and ₹1,200, depending on the menu and beverages." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Stats />
      <MenuSection />
      <About />
      <Experience />
      <Reviews />
      <Faq />
      <Visit />
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-[var(--gold)]" aria-hidden />
          <span className="font-display text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            White Oak
          </span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-[var(--gold)]">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#visit" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 md:inline-block">
          Reserve a table
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block py-2 text-base font-medium">{n.label}</a>
              </li>
            ))}
            <li><a href="#visit" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground">Reserve a table</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img src={heroThali} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--forest)]/95 via-[var(--forest)]/80 to-[var(--forest)]/60" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-black/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[var(--gold)]">
            <Star className="h-3 w-3 fill-current" /> 4.7 from 1,776 diners
          </div>
          <h1 className="text-balance text-5xl font-bold leading-[1.05] text-[var(--cream)] sm:text-6xl lg:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
            Where Delhi gathers for the <em className="text-[var(--gold)]">flavours of home</em>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--cream)]/80">
            Three generations of North Indian cooking, served in the heart of Paharganj. Tandoor classics, slow-simmered curries, and thalis that taste like Sunday.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#visit" className="group inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-4 text-sm font-semibold text-[var(--forest)] transition-transform hover:scale-105">
              Reserve a table <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#menu" className="inline-flex items-center gap-2 rounded-full border border-[var(--cream)]/30 px-7 py-4 text-sm font-semibold text-[var(--cream)] transition-colors hover:bg-[var(--cream)]/10">
              View the menu
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[var(--cream)]/70">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> Open until 12 AM</span>
            <span className="flex items-center gap-2"><Utensils className="h-4 w-4" /> Dine-in · Takeaway · Delivery</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Paharganj, New Delhi</span>
          </div>
        </motion.div>
        <motion.aside initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden rounded-2xl border border-[var(--gold)]/20 bg-[var(--forest)]/40 p-8 backdrop-blur-md lg:block">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Today at White Oak</h2>
          <div className="mt-6 space-y-5 text-[var(--cream)]">
            <Row label="Lunch" value="11:00 AM – 4:00 PM" />
            <Row label="Dinner" value="7:00 PM – 12:00 AM" />
            <Row label="Average spend" value="₹200 – ₹1,200" />
            <Row label="Live now" value="A little busy" />
          </div>
          <a href="tel:+919911611916" className="mt-8 flex items-center justify-between rounded-xl bg-[var(--gold)]/10 px-5 py-4 text-[var(--cream)] transition-colors hover:bg-[var(--gold)]/20">
            <span className="flex items-center gap-3"><Phone className="h-4 w-4" /> 099116 11916</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.aside>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-[var(--cream)]/10 pb-3">
      <span className="text-sm text-[var(--cream)]/60">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function Stats() {
  const items = [
    { value: "4.7★", label: "Google rating" },
    { value: "1,776", label: "Diner reviews" },
    { value: "30+", label: "Years of craft" },
    { value: "100%", label: "Halal & vegetarian options" },
  ];
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
        {items.map((i) => (
          <div key={i.label} className="bg-secondary p-8 text-center">
            <div className="text-3xl font-bold text-primary md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>{i.value}</div>
            <div className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{i.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section id="menu" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionHeader eyebrow="The Menu" title="Signature plates from our kitchen" desc="Hand-picked favourites our regulars order again and again. Full menu available in-house." />
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {DISHES.map((d, i) => (
          <motion.article key={d.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl">
            <div className="relative aspect-square overflow-hidden">
              <img src={d.img} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <span className="absolute left-4 top-4 rounded-full bg-[var(--forest)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--gold)]">{d.tag}</span>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{d.name}</h3>
                <span className="shrink-0 text-sm font-semibold text-[var(--gold)]">{d.price}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-[var(--forest)] text-[var(--cream)]">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:py-32 lg:grid-cols-2 lg:items-center">
        <motion.img initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} src={interior} alt="White Oak Restaurant interior" loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover" />
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">Our story</span>
          <h2 className="mt-4 text-balance text-4xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            A Paharganj institution since the lanes were lit by lanterns.
          </h2>
          <p className="mt-6 text-[var(--cream)]/80">
            White Oak began as a family kitchen on Desh Bandhu Gupta Road — a single tandoor, a brass pot of dal makhani, and a promise to serve the kind of food Delhi grew up on. Three decades later, the tandoor still glows at sunrise, the recipes still belong to our grandmother, and every table still gets the same welcome.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            <Feature icon={ChefHat} title="Heritage recipes" text="Slow-cooked the way our grandmother taught us." />
            <Feature icon={Flame} title="Live clay tandoor" text="Fired daily for that unmistakable smoky crust." />
            <Feature icon={Leaf} title="Fresh, daily sourced" text="Spices, dairy and produce from local markets." />
            <Feature icon={Users} title="Made for gathering" text="Solo lunches to family dinners — all welcome." />
          </ul>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, text }: { icon: typeof ChefHat; title: string; text: string }) {
  return (
    <li className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)]"><Icon className="h-5 w-5" /></span>
      <div className="min-w-0">
        <div className="font-semibold">{title}</div>
        <div className="mt-1 text-sm text-[var(--cream)]/70">{text}</div>
      </div>
    </li>
  );
}

function Experience() {
  const groups = [
    { title: "Atmosphere", items: ["Casual", "Cozy", "Quiet", "Romantic", "Trendy", "Upmarket"] },
    { title: "Offerings", items: ["Alcohol & cocktails", "Vegetarian options", "Late-night food", "Happy-hour menu", "Private dining room", "Small plates"] },
    { title: "Amenities", items: ["Rooftop seating", "Outdoor seating", "Fireplace", "Bar on site", "Wheelchair accessible", "High chairs & kids' menu"] },
  ];
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionHeader eyebrow="The Experience" title="More than a meal" desc="From rooftop date nights to leisurely solo lunches — White Oak fits the moment." />
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title} className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{g.title}</h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li key={i} className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 grid gap-4 rounded-2xl border border-border bg-secondary p-8 sm:grid-cols-2 md:grid-cols-4">
        <Badge icon={Accessibility} label="Fully accessible" />
        <Badge icon={Car} label="Free parking" />
        <Badge icon={CreditCard} label="All cards · UPI · NFC" />
        <Badge icon={Wine} label="Curated wine & cocktails" />
      </div>
    </section>
  );
}

function Badge({ icon: Icon, label }: { icon: typeof ChefHat; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-5 w-5 text-[var(--gold)]" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeader eyebrow="Guest Reviews" title="Loved by 1,776 diners and counting" desc="Verified reviews from Google Maps Local Guides." />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.figure key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
              <div className="flex gap-0.5 text-[var(--gold)]">
                {Array.from({ length: r.stars }).map((_, idx) => <Star key={idx} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground/90">"{r.text}"</blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <div className="font-semibold">{r.name}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{r.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <SectionHeader eyebrow="FAQ" title="Good to know before you visit" />
      <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
        {FAQS.map((f) => (
          <details key={f.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-4">
              <span className="text-base font-semibold">{f.q}</span>
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Visit() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", guests: "2", notes: "" });
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.date) return;
    setSent(true);
  };
  return (
    <section id="visit" className="bg-[var(--forest)] text-[var(--cream)]">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:py-32 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">Visit us</span>
          <h2 className="mt-4 text-balance text-4xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            Reserve your table.
          </h2>
          <p className="mt-4 text-[var(--cream)]/80">Brunch reservations are recommended — there's usually a wait at peak hours. We'll confirm your booking by phone within 30 minutes.</p>
          <dl className="mt-10 space-y-6 text-sm">
            <Info icon={MapPin} label="Address">3/5, Desh Bandhu Gupta Rd, Bazar Sangatrashan, Multani Dhanda, Sadar Bazaar, New Delhi 110055</Info>
            <Info icon={Phone} label="Phone"><a href="tel:+919911611916" className="hover:text-[var(--gold)]">099116 11916</a></Info>
            <Info icon={Clock} label="Hours">Open daily · Closes 12:00 AM</Info>
            <Info icon={Wifi} label="Plus code">J6W6+6J, New Delhi</Info>
          </dl>
          <a href="https://maps.google.com/?q=White+Oak+Restaurant+Paharganj+New+Delhi" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 px-6 py-3 text-sm font-semibold text-[var(--gold)] transition-colors hover:bg-[var(--gold)]/10">
            Get directions <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="rounded-2xl border border-[var(--gold)]/20 bg-[var(--cream)]/5 p-8 backdrop-blur-sm md:p-10">
          {sent ? (
            <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-[var(--gold)] text-[var(--forest)]"><Calendar className="h-6 w-6" /></div>
              <h3 className="mt-6 text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>Request received</h3>
              <p className="mt-3 max-w-sm text-[var(--cream)]/80">Thank you, {form.name.split(" ")[0]}. We'll call you shortly to confirm your table for {form.guests} on {form.date}.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <Field label="Full name" required>
                <input required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone" required>
                  <input required type="tel" maxLength={15} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input" />
                </Field>
                <Field label="Guests" required>
                  <select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className="input">
                    {[1,2,3,4,5,6,7,8,"9+"].map((n) => <option key={n} className="text-foreground">{n}</option>)}
                  </select>
                </Field>
              </div>
              <Field label="Date & time" required>
                <input required type="datetime-local" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="input" />
              </Field>
              <Field label="Special requests">
                <textarea rows={3} maxLength={300} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="input resize-none" placeholder="Allergies, occasions, seating preferences…" />
              </Field>
              <button type="submit" className="group flex w-full items-center justify-center gap-2 rounded-full bg-[var(--gold)] py-4 text-sm font-semibold text-[var(--forest)] transition-transform hover:scale-[1.02]">
                Request reservation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-center text-xs text-[var(--cream)]/50">Or call us directly on 099116 11916</p>
            </form>
          )}
        </div>
      </div>
      <style>{`
        .input { width: 100%; border-radius: 12px; border: 1px solid color-mix(in oklab, var(--cream) 20%, transparent); background: color-mix(in oklab, var(--cream) 6%, transparent); padding: 0.875rem 1rem; color: var(--cream); font-size: 0.875rem; outline: none; transition: border-color .2s, background .2s; }
        .input::placeholder { color: color-mix(in oklab, var(--cream) 40%, transparent); }
        .input:focus { border-color: var(--gold); background: color-mix(in oklab, var(--cream) 10%, transparent); }
      `}</style>
    </section>
  );
}

function Info({ icon: Icon, label, children }: { icon: typeof ChefHat; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" />
      <div className="min-w-0">
        <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cream)]/50">{label}</dt>
        <dd className="mt-1 text-[var(--cream)]/90">{children}</dd>
      </div>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--cream)]/60">{label}{required && <span className="text-[var(--gold)]"> *</span>}</span>
      {children}
    </label>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">{eyebrow}</span>
      <h2 className="mt-4 text-balance text-4xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground">{desc}</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <Leaf className="h-4 w-4 text-[var(--gold)]" />
          <span>© {new Date().getFullYear()} White Oak Restaurant · Paharganj, New Delhi</span>
        </div>
        <div className="flex gap-6">
          <a href="#menu" className="hover:text-foreground">Menu</a>
          <a href="#visit" className="hover:text-foreground">Reserve</a>
          <a href="tel:+919911611916" className="hover:text-foreground">Call</a>
        </div>
      </div>
    </footer>
  );
}
