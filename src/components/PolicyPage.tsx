import type { ReactNode } from "react";

export function PolicyPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <header>
        <p className="text-sm font-medium text-primary">Policy</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>
      </header>
      <div className="prose-policy mt-10 space-y-6 text-foreground/90 leading-relaxed">
        {children}
      </div>
    </article>
  );
}

export function PolicySection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground">{heading}</h2>
      <div className="mt-2 space-y-3 text-muted-foreground">{children}</div>
    </section>
  );
}
