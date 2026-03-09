import { Button } from "@/components/ui/button";

const featureHighlights = [
  {
    title: "Responsive storytelling",
    copy: "Layouts, imagery, and text blocks stay readable and deliberate across mobile, tablet, and desktop breakpoints.",
  },
  {
    title: "Fast publishing workflow",
    copy: "A clear route for uploading visuals, organizing projects, and keeping launch content moving without friction.",
  },
  {
    title: "Shared team visibility",
    copy: "Useful for internal previews, client-ready presentation, and keeping production status obvious at a glance.",
  },
] as const;

export default function FeaturesPage() {
  return (
    <section className="bg-neutral-100 text-neutral-950">
      <div className="mx-auto flex min-h-[calc(100vh-4.5rem)] w-full max-w-6xl flex-col gap-8 px-6 pb-16 pt-8 sm:px-10 sm:pt-10 md:min-h-[calc(100vh-5rem)] lg:gap-10 lg:px-16 lg:pb-20 lg:pt-12">
        <section className="grid gap-8 rounded-4xl border border-neutral-300 bg-neutral-0 p-6 shadow-sm sm:p-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] lg:items-center lg:gap-10 lg:p-10">
          <div className="max-w-2xl">
            <p className="text-preset-7 text-neutral-950/60">FEATURES</p>
            <h1 className="mt-4 text-preset-2 uppercase sm:text-preset-1">
              A Clear Overview Of What Photosnap Is Building Toward
            </h1>
            <p className="mt-4 max-w-xl text-preset-5-regular text-neutral-950/70">
              This route now acts as a concise feature landing page with enough
              structure to feel intentional while the fuller product detail is
              still being developed.
            </p>
          </div>

          <div
            className="rounded-3xl p-6 text-neutral-0 sm:p-7"
            style={{ background: "var(--gradient-6)" }}
          >
            <p className="text-preset-7 text-neutral-0/75">AT A GLANCE</p>
            <h2 className="mt-3 text-preset-3 uppercase">
              Purpose-built for visual publishing and clean presentation
            </h2>
            <p className="mt-4 text-preset-5-regular text-neutral-0/82">
              The page balances placeholder status with a real product message,
              so the navbar link feels finished instead of temporary.
            </p>
            <div className="mt-8">
              <Button href="/stories" tone="light">
                Read Stories
              </Button>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {featureHighlights.map((feature, index) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-neutral-300 bg-neutral-0 p-6 shadow-sm sm:p-7"
            >
              <p className="text-preset-7 text-neutral-950/55">0{index + 1}</p>
              <h2 className="mt-4 text-preset-4 uppercase">{feature.title}</h2>
              <p className="mt-4 text-preset-5-regular text-neutral-950/70">
                {feature.copy}
              </p>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}
