import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-pg.jpg";
import roomImg from "@/assets/room.jpg";
import foodImg from "@/assets/food.jpg";
import loungeImg from "@/assets/lounge.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kavitha PG Hostel — Comfortable PG Stays in Bengaluru" },
      {
        name: "description",
        content:
          "Kavitha PG Hostel offers safe, hygienic and homely paying guest accommodation in Bengaluru with home-cooked meals, Wi-Fi and 24/7 security.",
      },
      { property: "og:title", content: "Kavitha PG Hostel — Homely PG Stays" },
      { property: "og:description", content: "Safe rooms, hot meals, fast Wi-Fi. Book your stay today." },
    ],
  }),
  component: Home,
});

const features = [
  { title: "Ghar Jaisa Khana", desc: "Three fresh home-style meals daily — sambar, rasam, chapati, sabzi and curd rice." },
  { title: "High-Speed Wi-Fi", desc: "Stable broadband across rooms and common areas, perfect for work and study." },
  { title: "24/7 Suraksha", desc: "CCTV, biometric entry and a watchful warden — your safety is our promise." },
  { title: "Daily Housekeeping", desc: "Clean rooms, fresh bedsheets and tidy shared spaces, every single day." },
  { title: "Power Backup", desc: "Full inverter backup so studies and Zoom calls never stop." },
  { title: "Prime Location", desc: "Walking distance to BMTC bus stop, metro, offices and kirana stores." },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-accent-foreground">
              Namaste · Now accepting bookings in Bengaluru
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Apna ghar, Bengaluru mein.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Kavitha PG Hostel is a family-run paying guest residence in the heart of
              Bengaluru — clean rooms, ghar ka khana, and the warmth of an Indian
              joint family. Stay with us, feel at home.
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
              <div><div className="text-2xl font-bold text-foreground">12+</div>Saal of seva</div>
              <div><div className="text-2xl font-bold text-foreground">200+</div>Happy residents</div>
              <div><div className="text-2xl font-bold text-foreground">4.8★</div>Avg. rating</div>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Kavitha PG Hostel building exterior at golden hour"
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
          Sab kuch hai jo chahiye.
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Aaram, khana, suraksha aur internet — bas itna hi toh chahiye. We take
          care of everything so you can focus on padhai, work or just unwinding.
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
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Ek jhalak andar ki</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { img: roomImg, title: "Kamre (Rooms)", desc: "Single & sharing rooms with cot, almirah and study table." },
            { img: foodImg, title: "Bhojanalaya", desc: "Hot South & North Indian thalis served three times a day." },
            { img: loungeImg, title: "Baithak", desc: "Common hall with jhoola, festivals, chai and chitchat." },
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
          <h2 className="text-3xl font-bold tracking-tight">Aa jaiye, ghar tayar hai.</h2>
          <p className="mt-2 max-w-xl opacity-90">
            Ek baar visit kijiye — kamre dekhiye, bhojanalaya ghoomiye, aur khud
            mehsoos kijiye ki Kavitha PG aapka apna ghar kyun ban jata hai.
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
