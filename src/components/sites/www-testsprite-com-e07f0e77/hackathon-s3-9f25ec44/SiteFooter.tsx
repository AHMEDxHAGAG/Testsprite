import Image from "next/image";
import Link from "next/link";
import { Globe2, Monitor, Moon, Sun } from "lucide-react";
import type { SVGProps } from "react";

function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        d="M22.54 6.42a2.78 2.78 0 0 0-1.96-1.97C18.85 4 12 4 12 4s-6.85 0-8.58.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.96 1.97C5.15 20 12 20 12 20s6.85 0 8.58-.45a2.78 2.78 0 0 0 1.96-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58Z"
        fill="currentColor"
      />
      <path d="m10 15.5 6-3.5-6-3.5v7Z" fill="#f5faf2" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.27-8.31L3 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.84h1.73L8.46 4.05H6.6L17.8 19.84Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 .7a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.7 1.2 3.4.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.9 1.2 2 1.2 3.2 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.8.8.6A11.5 11.5 0 0 0 12 .7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.04H3.54V8.98H7.1v11.47Z"
        fill="currentColor"
      />
    </svg>
  );
}

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
  {
    label: "YouTube",
    icon: YouTubeIcon,
    href: "https://youtube.com/@testsprite",
  },
  { label: "X", icon: XIcon, href: "https://x.com/test_sprite" },
  {
    label: "GitHub",
    icon: GitHubIcon,
    href: "https://github.com/testsprite",
  },
  {
    label: "LinkedIn",
    icon: LinkedInIcon,
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
                    {"external" in link ? (
                      <a
                        className={`text-sm leading-5 text-[#030303] md:text-base md:leading-[22.4px] ${linkTransition}`}
                        href={link.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        className={`text-sm leading-5 text-[#030303] md:text-base md:leading-[22.4px] ${linkTransition}`}
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex min-h-[84px] flex-col gap-4 border-b border-black/10 p-4 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Social media" className="flex flex-wrap gap-2">
            {socialLinks.map((social) => {
              const SocialIcon = social.icon;

              return (
                <a
                  aria-label={social.label}
                  className={`flex h-10 w-10 items-center justify-center border border-black/10 text-[#030303] md:h-[50px] md:w-[50px] ${linkTransition}`}
                  href={social.href}
                  key={social.label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <SocialIcon aria-hidden="true" className="h-4 w-4" />
                </a>
              );
            })}
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

            <div
              className="flex h-10 w-[114px] items-center justify-center gap-2 border border-black/10 px-3 font-mono text-xs leading-[16.8px] text-[#030303] md:h-[50px] md:text-sm md:leading-[19.6px]"
            >
              <Globe2 aria-hidden="true" className="h-4 w-4 stroke-[1.5]" />
              <span className="sr-only">Language: </span>
              English
            </div>

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
