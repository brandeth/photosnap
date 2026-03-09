import { Button } from "@/components/ui/button";

const featuredStories = [
  {
    title: "Behind The Lens",
    label: "Editor pick",
    copy: "A quiet look at the process, planning, and patience that shape every memorable photo story.",
  },
  {
    title: "Field Notes",
    label: "New series",
    copy: "Dispatches from recent shoots, collected as short-form entries for teams and readers who want the context behind the image.",
  },
  {
    title: "Community Journal",
    label: "Coming soon",
    copy: "A flexible space for member features, creative routines, and standout work from the wider Photosnap audience.",
  },
] as const;

export default function StoriesPage() {
  return (
    <section className="bg-neutral-100 text-neutral-950">
      <div className="mx-auto flex min-h-[calc(100vh-4.5rem)] w-full max-w-6xl flex-col gap-8 px-6 pb-16 pt-8 sm:px-10 sm:pt-10 md:min-h-[calc(100vh-5rem)] lg:gap-10 lg:px-16 lg:pb-20 lg:pt-12">
        <section className="overflow-hidden rounded-4xl bg-neutral-950 text-neutral-0 shadow-sm">
          <div className="grid gap-8 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-end lg:px-10 lg:py-12">
            <div className="max-w-2xl">
              <p className="text-preset-7 text-neutral-0/70">STORIES</p>
              <h1 className="mt-4 text-preset-2 uppercase sm:text-preset-1">
                Stories That Give The Navbar A Real Destination
              </h1>
              <p className="mt-4 max-w-xl text-preset-5-regular text-neutral-0/75">
                This placeholder page gives the Stories route a proper landing
                point with editorial framing, preview content, and a tone that
                fits the existing Photosnap interface.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href="/pricing" tone="light">
                  View Pricing
                </Button>
                <Button href="/features" variant="secondary">
                  Explore Features
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-0/15 bg-neutral-0/5 p-5 backdrop-blur-sm sm:p-6">
              <p className="text-preset-7 text-neutral-0/60">CURRENT FOCUS</p>
              <h2 className="mt-3 text-preset-3 uppercase">
                Fresh space for campaign stories, launch notes, and creator
                updates
              </h2>
              <p className="mt-4 text-preset-5-regular text-neutral-0/72">
                Built as a polished holding page now, ready to expand into a
                full story archive later without leaving the route empty.
              </p>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="h-1.5 w-full"
            style={{ background: "var(--gradient-6)" }}
          />
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {featuredStories.map((story) => (
            <article
              key={story.title}
              className="rounded-3xl border border-neutral-300 bg-neutral-0 p-6 shadow-sm sm:p-7"
            >
              <p className="text-preset-7 text-neutral-950/55">{story.label}</p>
              <h2 className="mt-4 text-preset-3 uppercase">{story.title}</h2>
              <p className="mt-4 text-preset-5-regular text-neutral-950/70">
                {story.copy}
              </p>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}
