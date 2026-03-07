import { StoryCard } from "@/components/ui/story-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 px-6 py-16 text-neutral-950 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <header className="max-w-xl">
          <p className="text-preset-7 text-neutral-950/60">STORY CARD PREVIEW</p>
          <h1 className="mt-4 text-preset-2 uppercase">The Mountains</h1>
          <p className="mt-4 text-preset-5-regular text-neutral-950/70">
            Simple page preview for the reusable Story Card component.
          </p>
        </header>

        <section className="rounded-4xl border border-neutral-300 bg-neutral-0 p-6 shadow-sm sm:p-10">
          <StoryCard
            author="John Appleseed"
            date="April 16th 2020"
            image="/window.svg"
            title="The Mountains"
            alt="Placeholder local asset for The Mountains story preview"
            priority
          />
        </section>
      </div>
    </main>
  );
}
