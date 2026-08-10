import Image from "next/image";

interface PastEventCard {
  href: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  description: string;
}

const imageRoot =
  "/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/images";

const pastEvents: PastEventCard[] = [
  {
    href: "https://luma.com/n84hk0l9",
    image: `${imageRoot}/event-aws-datadog.png`,
    imageWidth: 1396,
    imageHeight: 1400,
    title: "AWS x Anthropic x Datadog GenAI...",
    description:
      "Join us for an immersive, hands-on hackathon featuring builders shipping with the leading GenAI stack.",
  },
  {
    href: "https://luma.com/wz634w2s",
    image: `${imageRoot}/event-testsprite-ai-dev.png`,
    imageWidth: 1402,
    imageHeight: 1406,
    title: "TestSprite AI Dev Hackathon: Building...",
    description:
      "Join us for a full-day AI-powered hackathon focused on building production-ready dev tooling.",
  },
  {
    href: "https://luma.com/f13dwefh",
    image: `${imageRoot}/event-sf-vibe-coding.png`,
    imageWidth: 1410,
    imageHeight: 1406,
    title: "SF AI Vibe Coding Hackathon",
    description:
      "Join us for future of coding — one-day SF event collaborating with the AI builder community.",
  },
];

export function PastEventsSection() {
  return (
    <section id="past-events" className="md:px-32">
      <div className="testsprite-container">
        <header className="border border-ts-border px-6 pb-5 pt-14 sm:pb-6 sm:pt-24">
          <h2 className="text-[22px] font-semibold leading-[24.2px] tracking-[-0.55px] sm:text-[46px] sm:leading-[50.6px] sm:tracking-[-1.15px]">
            Past Events.
          </h2>
        </header>

        <div className="grid grid-cols-1 border-x border-b border-ts-border sm:h-[555px] sm:grid-cols-3">
          {pastEvents.map((event, index) => (
            <a
              key={event.href}
              href={event.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex min-w-0 flex-col overflow-hidden p-3 ${
                index < pastEvents.length - 1
                  ? "border-b border-ts-border sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <Image
                src={event.image}
                alt=""
                width={event.imageWidth}
                height={event.imageHeight}
                sizes="(min-width: 1200px) 366px, (min-width: 810px) 219px, 350px"
                className="h-[230px] w-full shrink-0 object-cover object-top transition-[filter,opacity] duration-150 group-hover:opacity-90 group-hover:contrast-105 sm:h-[420px]"
              />
              <h3 className="mt-3 line-clamp-2 text-lg font-normal leading-[20px] tracking-[-0.45px] sm:text-[22px] sm:leading-[24.2px] sm:tracking-[-0.55px]">
                {event.title}
              </h3>
              <p className="mt-2 line-clamp-2 font-mono text-xs leading-[16.8px] tracking-[-0.48px] text-ts-secondary sm:text-sm sm:leading-[19.6px] sm:tracking-[-0.56px]">
                {event.description}
              </p>
            </a>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="h-10 border-x border-b border-ts-border sm:h-[142px]"
        />
      </div>
    </section>
  );
}
