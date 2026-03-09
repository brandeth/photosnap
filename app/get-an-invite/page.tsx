import { Button } from "@/components/ui/button";

const inviteBenefits = [
  {
    title: "Publishing support",
    copy: "Get early access to the Photosnap workflow and a clearer path for turning new shoots into polished stories.",
  },
  {
    title: "Team-ready setup",
    copy: "Start with a structure built for contributors, campaign planning, and handoff between creative and production teams.",
  },
  {
    title: "Launch updates",
    copy: "Stay close to feature releases, product milestones, and the next set of tools rolling into the platform.",
  },
] as const;

const inviteSteps = [
  "Review the current feature direction and plan options.",
  "Choose the path that matches your publishing cadence.",
  "Reach launch-ready with a cleaner Photosnap workflow.",
] as const;

export default function GetAnInvitePage() {
  return (
    <section className="bg-neutral-100 text-neutral-950">
      <div className="mx-auto flex min-h-[calc(100vh-4.5rem)] w-full max-w-6xl flex-col gap-8 px-6 pb-16 pt-8 sm:px-10 sm:pt-10 md:min-h-[calc(100vh-5rem)] lg:gap-10 lg:px-16 lg:pb-20 lg:pt-12">
        <section className="overflow-hidden rounded-4xl bg-neutral-950 text-neutral-0 shadow-sm">
          <div className="grid gap-8 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)] lg:items-center lg:px-10 lg:py-12">
            <div className="max-w-2xl">
              <p className="text-preset-7 text-neutral-0/70">GET AN INVITE</p>
              <h1 className="mt-4 text-preset-2 uppercase sm:text-preset-1">
                Step Into The Next Photosnap Launch Window
              </h1>
              <p className="mt-4 max-w-xl text-preset-5-regular text-neutral-0/75">
                The navbar call to action now lands on a real destination page
                that explains what the invite is for, what you can expect next,
                and where to go if you want more product detail first.
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

            <div className="rounded-3xl border border-neutral-0/15 bg-neutral-0/5 p-6 backdrop-blur-sm sm:p-7">
              <p className="text-preset-7 text-neutral-0/60">
                WHAT HAPPENS NEXT
              </p>
              <ol className="mt-4 space-y-4">
                {inviteSteps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="text-preset-7 text-neutral-0/60">
                      0{index + 1}
                    </span>
                    <p className="text-preset-5-regular text-neutral-0/78">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="h-1.5 w-full"
            style={{ background: "var(--gradient-6)" }}
          />
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {inviteBenefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-3xl border border-neutral-300 bg-neutral-0 p-6 shadow-sm sm:p-7"
            >
              <h2 className="text-preset-4 uppercase">{benefit.title}</h2>
              <p className="mt-4 text-preset-5-regular text-neutral-950/70">
                {benefit.copy}
              </p>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}
