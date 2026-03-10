type StoryCardContent = {
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
  alt: string;
  href: string;
  priority?: boolean;
};

export type FeaturedStoryContent = StoryCardContent & {
  eyebrow: string;
  summary: string;
  ctaLabel: string;
};

export type ArchiveStoryContent = StoryCardContent;

const createStoryHref = () => "/stories";

export const featuredStory: FeaturedStoryContent = {
  slug: "hazy-full-moon-of-appalachia",
  title: "Hazy Full Moon of Appalachia",
  author: "John Appleseed",
  date: "March 2nd 2020",
  image: "/images/landing-stories-01.jpg",
  alt: "Full moon rising over a hazy mountain landscape at dusk",
  href: createStoryHref(),
  eyebrow: "Last Month's Featured Story",
  summary:
    'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.',
  ctaLabel: "Read The Story",
  priority: true,
};

export const archiveStories: ArchiveStoryContent[] = [
  {
    slug: "the-mountains",
    title: "The Mountains",
    author: "John Appleseed",
    date: "April 16th 2020",
    image: "/images/the-mountains.jpg",
    alt: "Snow-covered mountain range beneath a cloudy sky",
    href: createStoryHref(),
  },
  {
    slug: "sunset-cityscapes",
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    date: "April 14th 2020",
    image: "/images/sunset-cityscapes.jpg",
    alt: "City skyline glowing under an orange sunset",
    href: createStoryHref(),
  },
  {
    slug: "18-days-voyage",
    title: "18 Days Voyage",
    author: "Alexei Borodin",
    date: "April 11th 2020",
    image: "/images/18-days-voyage.jpg",
    alt: "Traveler standing near a calm shoreline during a long voyage",
    href: createStoryHref(),
  },
  {
    slug: "architecturals",
    title: "Architecturals",
    author: "Samantha Brooke",
    date: "April 9th 2020",
    image: "/images/architecturals.jpg",
    alt: "Modern architectural structure photographed from below",
    href: createStoryHref(),
  },
  {
    slug: "world-tour-2019",
    title: "World Tour 2019",
    author: "Timothy Wagner",
    date: "April 7th 2020",
    image: "/images/world-tour-2019.jpg",
    alt: "Open road stretching toward distant mountains during a world tour",
    href: createStoryHref(),
  },
  {
    slug: "unforeseen-corners",
    title: "Unforeseen Corners",
    author: "William Malcolm",
    date: "April 3rd 2020",
    image: "/images/unforseen-corners.jpg",
    alt: "Urban corner scene with dramatic light and shadow",
    href: createStoryHref(),
  },
  {
    slug: "king-of-africa-part-ii",
    title: "King on Africa: Part II",
    author: "Tim Hillenburg",
    date: "March 29th 2020",
    image: "/images/king-of-africa-part-2.jpg",
    alt: "Wildlife portrait captured during an African expedition",
    href: createStoryHref(),
  },
  {
    slug: "the-trip-to-nowhere",
    title: "The Trip to Nowhere",
    author: "Felicia Rourke",
    date: "March 21st 2020",
    image: "/images/the-trip-to-nowhere.jpg",
    alt: "Remote travel landscape suggesting an isolated destination",
    href: createStoryHref(),
  },
  {
    slug: "rage-of-the-sea",
    title: "Rage of The Sea",
    author: "Mohammad Abdul",
    date: "March 19th 2020",
    image: "/images/rage-of-the-sea.jpg",
    alt: "Powerful ocean waves crashing under stormy skies",
    href: createStoryHref(),
  },
  {
    slug: "running-free",
    title: "Running Free",
    author: "Michelle",
    date: "March 16th 2020",
    image: "/images/running-free.jpg",
    alt: "Figure running through an open natural landscape",
    href: createStoryHref(),
  },
  {
    slug: "behind-the-waves",
    title: "Behind the Waves",
    author: "Lamarr Wilson",
    date: "March 11th 2020",
    image: "/images/behind-the-waves.jpg",
    alt: "Ocean waves seen from a low angle with the horizon beyond",
    href: createStoryHref(),
  },
  {
    slug: "calm-waters",
    title: "Calm Waters",
    author: "Samantha Brooke",
    date: "March 9th 2020",
    image: "/images/calm-waters.jpg",
    alt: "Still water reflecting a quiet natural scene",
    href: createStoryHref(),
  },
  {
    slug: "the-milky-way",
    title: "The Milky Way",
    author: "Benjamin Cruz",
    date: "March 5th 2020",
    image: "/images/the-milky-way.jpg",
    alt: "Star-filled night sky showing the Milky Way above dark terrain",
    href: createStoryHref(),
  },
  {
    slug: "night-at-the-dark-forest",
    title: "Night at The Dark Forest",
    author: "Mohammad Abdul",
    date: "March 4th 2020",
    image: "/images/night-at-the-dark-forest.jpg",
    alt: "Dark forest at night illuminated by faint natural light",
    href: createStoryHref(),
  },
  {
    slug: "somwarpets-beauty",
    title: "Somwarpet's Beauty",
    author: "Michelle",
    date: "March 1st 2020",
    image: "/images/somewarpet-beauty.jpg",
    alt: "Lush landscape highlighting the beauty of Somwarpet",
    href: createStoryHref(),
  },
  {
    slug: "land-of-dreams",
    title: "Land of Dreams",
    author: "Tim Hillenburg",
    date: "February 25th 2020",
    image: "/images/land-of-dreams.jpg",
    alt: "Dreamlike landscape with soft light and expansive scenery",
    href: createStoryHref(),
  },
];
