import { archiveStories } from "@/app/stories/stories-data";
import { StoriesHeroSection } from "@/components/ui/stories-hero-section";
import { StoryCard } from "@/components/ui/story-card";

export default function StoriesPage() {
  return (
    <main className="bg-neutral-100 text-neutral-950">
      <StoriesHeroSection />

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {archiveStories.map((story) => (
          <StoryCard
            key={story.slug}
            title={story.title}
            author={story.author}
            date={story.date}
            image={story.image}
            alt={story.alt}
            href={story.href}
            className="max-w-none"
          />
        ))}
      </section>
    </main>
  );
}
