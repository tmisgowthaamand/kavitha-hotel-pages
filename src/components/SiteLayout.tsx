import { Link, Outlet } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/terms", label: "Terms" },
  { to: "/privacy", label: "Privacy" },
  { to: "/refund", label: "Refund" },
  { to: "/house-rules", label: "House Rules" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-bold">K</span>
          <span className="font-semibold tracking-tight text-foreground">Kavitha PG</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground hover:text-foreground"
              activeProps={{ className: "text-sm text-foreground font-medium" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+919999999999"
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:opacity-90"
        >
          Book a Visit
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-foreground">Kavitha PG Hostel</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Aapka apna ghar in Bengaluru — safe rooms, ghar ka khana and a caring Indian family vibe.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Policies</h4>
          <ul className="mt-2 space-y-1 text-sm">
            {nav.slice(1).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground hover:text-foreground">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Contact</h4>
          <p className="mt-2 text-sm text-muted-foreground">
            12, MG Road, Bengaluru<br />
            +91 99999 99999<br />
            hello@kavithapg.in
          </p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Kavitha PG Hostel. All rights reserved.
      </div>
    </footer>
  );
}

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}