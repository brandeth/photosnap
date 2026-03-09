import { Button } from "@/components/ui/button";
import { StoryCard } from "@/components/ui/story-card";

export default function Home() {
  return (
    <main className="bg-neutral-100 text-neutral-950">
      <div className="mx-auto flex min-h-[calc(100vh-4.5rem)] w-full max-w-6xl flex-col gap-8 px-6 pb-16 pt-8 sm:px-10 sm:pt-10 md:min-h-[calc(100vh-5rem)] lg:gap-10 lg:px-16 lg:pb-20 lg:pt-12">
        <section className="grid gap-8 rounded-[2rem] border border-neutral-300 bg-neutral-0 p-6 shadow-sm sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,360px)] lg:items-center lg:gap-10 lg:p-10">
          <div className="max-w-2xl">
            <p className="text-preset-7 text-neutral-950/60">
              COMPONENT DEMO SURFACE
            </p>
            <h1 className="mt-4 text-preset-2 uppercase sm:text-preset-1">
              Homepage Preview For Reusable UI
            </h1>
            <p className="mt-4 max-w-xl text-preset-5-regular text-neutral-950/70">
              This page now intentionally showcases the existing Story Card and
              Button components with production-style content instead of a
              placeholder preview.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href="#story-card-demo">View Story Card</Button>
              <Button href="#button-demo" variant="primary">
                Browse Buttons
              </Button>
            </div>
          </div>

          <div
            id="story-card-demo"
            className="flex justify-center lg:justify-end"
          >
            <StoryCard
              author="John Appleseed"
              date="April 16th 2020"
              href="#story-card-demo"
              image="/images/the-mountains.jpg"
              title="The Mountains"
              alt="Snow-covered mountains under a cloudy sky"
              priority
            />
          </div>
        </section>

        <section
          id="button-demo"
          className="rounded-[2rem] border border-neutral-300 bg-neutral-0 p-6 shadow-sm sm:p-8"
        >
          <div className="max-w-2xl">
            <p className="text-preset-7 text-neutral-950/60">BUTTON DEMO</p>
            <h2 className="mt-4 text-preset-3 uppercase">
              Available Button Variants
            </h2>
            <p className="mt-4 text-preset-5-regular text-neutral-950/70">
              A compact sample of the current link, primary, and secondary
              button styles.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href="#story-card-demo">Read Story</Button>
            <Button href="#button-demo" variant="primary">
              Create Account
            </Button>
            <Button href="#button-demo" variant="secondary">
              View Pricing
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
