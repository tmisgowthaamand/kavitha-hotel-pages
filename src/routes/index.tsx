import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-pg.jpg";
import roomImg from "@/assets/room.jpg";
import foodImg from "@/assets/food.jpg";
import loungeImg from "@/assets/lounge.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kavitha PG Hotel — Comfortable PG Stays in Bengaluru" },
      {
        name: "description",
        content:
          "Kavitha PG Hotel offers safe, hygienic and homely paying guest accommodation in Bengaluru with home-cooked meals, Wi-Fi and 24/7 security.",
      },
      { property: "og:title", content: "Kavitha PG Hotel — Homely PG Stays" },
      { property: "og:description", content: "Safe rooms, hot meals, fast Wi-Fi. Book your stay today." },
    ],
  }),
  component: Home,
});

const features = [
  { title: "Home-cooked Meals", desc: "Three fresh meals a day, South Indian comfort food." },
  { title: "High-Speed Wi-Fi", desc: "Stable broadband across rooms and common areas." },
  { title: "24/7 Security", desc: "CCTV coverage, biometric entry and a watchful warden." },
  { title: "Daily Housekeeping", desc: "Clean rooms, fresh linens and tidy shared spaces." },
  { title: "Power Backup", desc: "Full inverter backup so work and study never stop." },
  { title: "Prime Location", desc: "Walking distance to metro, IT parks and grocery stores." },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-accent-foreground">
              Now accepting bookings · Bengaluru
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              A homely PG stay you'll actually love coming back to.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Kavitha PG Hotel is a warm, family-run paying guest residence with
              clean rooms, home-cooked meals and a community that feels like home.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="tel:+919999999999"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:opacity-90"
              >
                Book a Visit
              </a>
              <a
                href="#rooms"
                className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary"
              >
                Explore Rooms
              </a>
            </div>
            <div className="mt-8 flex gap-8 text-sm text-muted-foreground">
              <div><div className="text-2xl font-bold text-foreground">12+</div>Years hosting</div>
              <div><div className="text-2xl font-bold text-foreground">200+</div>Happy guests</div>
              <div><div className="text-2xl font-bold text-foreground">4.8★</div>Avg. rating</div>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Kavitha PG Hotel building exterior at golden hour"
              width={1600}
              height={1024}
              className="h-full w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Everything you need, nothing you don't.
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          We focus on the essentials — comfort, food, safety and connectivity — so
          you can focus on work, study or simply relaxing.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rooms gallery */}
      <section id="rooms" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">A look inside</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { img: roomImg, title: "Private Rooms", desc: "Single & sharing rooms with study desk and wardrobe." },
            { img: foodImg, title: "Dining Hall", desc: "Hot meals served fresh, three times a day." },
            { img: loungeImg, title: "Common Lounge", desc: "Unwind, read, or hang out with fellow residents." },
          ].map((c) => (
            <div key={c.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <img src={c.img} alt={c.title} loading="lazy" width={1280} height={896} className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-foreground">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-3xl bg-primary p-10 text-primary-foreground md:p-14">
          <h2 className="text-3xl font-bold tracking-tight">Ready to move in?</h2>
          <p className="mt-2 max-w-xl opacity-90">
            Schedule a free visit and tour the rooms, dining area and common spaces.
            We'd love to host you.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:+919999999999" className="rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground hover:opacity-90">
              Call +91 99999 99999
            </a>
            <Link to="/house-rules" className="rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-medium hover:bg-primary-foreground/10">
              Read House Rules
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
