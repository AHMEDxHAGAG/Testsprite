import Image from "next/image";
import { ChevronDown, Globe2, Monitor, Moon, Sun } from "lucide-react";

const footerCategories = [
  {
    heading: "Solutions",
    links: [
      { label: "MCP Server", href: "/solutions/mcp" },
      { label: "Backend Testing", href: "/solutions/backend" },
      { label: "Frontend Testing", href: "/solutions/frontend" },
      {
        label: "Data Testing",
        href: "https://calendly.com/contact-hmul/schedule",
        external: true,
      },
      {
        label: "AI Agent/Model Testing",
        href: "https://calendly.com/contact-hmul/schedule",
        external: true,
      },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Docs", href: "https://docs.testsprite.com/", external: true },
      { label: "Changelog", href: "/changelog" },
      { label: "Hackathon", href: "/hackathon-s3" },
      { label: "Discover", href: "/discover" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Use Cases", href: "/use-cases" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
] as const;

const socialLinks = [
  { label: "YouTube", mark: "YT", href: "https://youtube.com/@testsprite" },
  { label: "X", mark: "X", href: "https://x.com/test_sprite" },
  { label: "GitHub", mark: "GH", href: "https://github.com/testsprite" },
  {
    label: "LinkedIn",
    mark: "in",
    href: "https://linkedin.com/company/testsprite",
  },
] as const;

const linkTransition =
  "transition-opacity duration-150 ease-[cubic-bezier(.5,0,0,1)] hover:opacity-65";

export function SiteFooter() {
  return (
    <footer className="bg-[#f5faf2] md:px-32">
      <div className="testsprite-container border-x border-black/10">
        <div className="grid grid-cols-2 border-b border-black/10 md:min-h-[386px] md:grid-cols-[235px_repeat(4,minmax(0,1fr))]">
          <section
            aria-labelledby="stay-updated-heading"
            className="col-span-2 border-b border-black/10 px-4 py-6 md:col-span-1 md:border-r md:border-b-0 md:pt-20 md:pb-8"
          >
            <h2
              className="text-xl leading-[22px] font-normal tracking-[-0.4px] text-[#030303] md:text-[29px] md:leading-[31.9px] md:tracking-[-0.58px]"
              id="stay-updated-heading"
            >
              Stay Updated
            </h2>
            <a
              className={`mt-6 flex min-h-10 w-full items-center justify-between bg-[#030303] px-4 font-mono text-xs leading-[16.8px] font-medium text-[#f5faf2] md:text-sm md:leading-[19.6px] ${linkTransition}`}
              href="https://discord.com/invite/GXWFjCe4an"
              rel="noopener noreferrer"
              target="_blank"
            >
              Join Discord
              <span aria-hidden="true">↗</span>
            </a>
            <Image
              alt="AICPA SOC 2"
              className="mx-auto mt-8 h-[98px] w-[98px] object-contain"
              height={98}
              src="/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/images/soc2-light.png"
              width={98}
            />
          </section>

          {footerCategories.map((category, index) => (
            <nav
              aria-label={category.heading}
              className={`min-w-0 px-4 py-8 md:px-6 md:pt-20 md:pb-8 ${index % 2 === 0 ? "border-r border-black/10" : ""} ${index < 2 ? "border-b border-black/10" : ""} ${index < footerCategories.length - 1 ? "md:border-r md:border-black/10" : "md:border-r-0"} md:border-b-0`}
              key={category.heading}
            >
              <h2 className="font-mono text-xs leading-[16.8px] text-[#4d8c58] md:text-base md:leading-[22.4px]">
                {category.heading}
              </h2>
              <ul className="mt-6 space-y-4 md:mt-7 md:space-y-[18px]">
                {category.links.map((link) => (
                  <li key={link.label}>
                    <a
                      className={`text-sm leading-5 text-[#030303] md:text-base md:leading-[22.4px] ${linkTransition}`}
                      href={link.href}
                      rel={"external" in link ? "noopener noreferrer" : undefined}
                      target={"external" in link ? "_blank" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex min-h-[84px] flex-col gap-4 border-b border-black/10 p-4 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Social media" className="flex flex-wrap gap-2">
            {socialLinks.map((social) => (
              <a
                aria-label={social.label}
                className={`flex h-10 w-10 items-center justify-center border border-black/10 font-mono text-[11px] font-medium text-[#030303] md:h-[50px] md:w-[50px] md:text-xs ${linkTransition}`}
                href={social.href}
                key={social.label}
                rel="noopener noreferrer"
                target="_blank"
              >
                {social.mark}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <div
              aria-label="Theme preference"
              className="flex border border-black/10"
              role="group"
            >
              <button
                aria-label="Use system theme"
                aria-pressed="false"
                className="flex h-10 w-10 items-center justify-center text-[#030303] transition-colors duration-150 hover:bg-[#e8efe5] md:h-[50px] md:w-[50px]"
                type="button"
              >
                <Monitor aria-hidden="true" className="h-4 w-4 stroke-[1.5]" />
              </button>
              <button
                aria-label="Use light theme"
                aria-pressed="true"
                className="flex h-10 w-10 items-center justify-center bg-[#dcebdd] text-[#4d8c58] md:h-[50px] md:w-[50px]"
                type="button"
              >
                <Sun aria-hidden="true" className="h-4 w-4 stroke-[1.5]" />
              </button>
              <button
                aria-label="Use dark theme"
                aria-pressed="false"
                className="flex h-10 w-10 items-center justify-center text-[#030303] transition-colors duration-150 hover:bg-[#e8efe5] md:h-[50px] md:w-[50px]"
                type="button"
              >
                <Moon aria-hidden="true" className="h-4 w-4 stroke-[1.5]" />
              </button>
            </div>

            <button
              aria-label="Language: English"
              className="flex h-10 items-center gap-2 border border-black/10 px-3 font-mono text-xs leading-[16.8px] text-[#030303] transition-colors duration-150 hover:bg-[#e8efe5] md:h-[50px] md:text-sm md:leading-[19.6px]"
              type="button"
            >
              <Globe2 aria-hidden="true" className="h-4 w-4 stroke-[1.5]" />
              English
              <ChevronDown aria-hidden="true" className="h-3.5 w-3.5 stroke-[1.5]" />
            </button>

            <p className="w-full font-mono text-xs leading-[16.8px] text-[#7c827d] md:w-auto md:text-sm md:leading-[19.6px]">
              Copyright © 2026 TestSprite.
            </p>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="flex h-[110px] items-start justify-center overflow-hidden pt-4 text-[64px] leading-none font-bold tracking-[-5px] text-transparent italic [-webkit-text-stroke:1px_rgba(77,140,88,0.08)] sm:h-[160px] sm:text-[120px] sm:tracking-[-9px] md:h-[220px] md:text-[220px] md:tracking-[-16px]"
        >
          TestSprite
        </div>
      </div>
    </footer>
  );
}
