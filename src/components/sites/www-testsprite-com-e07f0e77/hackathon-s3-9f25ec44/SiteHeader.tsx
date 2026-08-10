"use client";

import { useEffect, useRef, useState } from "react";

import {
  ArrowUpRightIcon,
  CloseIcon,
  MenuIcon,
  TestSpriteLogo,
} from "../shared/icons";

const navigationLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "https://docs.testsprite.com" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Hackathon", href: "/hackathon-s3" },
] as const;

const solutionLinks = [
  {
    label: "MCP Server",
    description: "Context-aware test intelligence",
    href: "https://www.testsprite.com/solutions/mcp",
  },
  {
    label: "Backend Testing",
    description: "Test APIs & logic",
    href: "https://www.testsprite.com/solutions/backend",
  },
  {
    label: "Frontend Testing",
    description: "Test UI behavior",
    href: "https://www.testsprite.com/solutions/frontend",
  },
  {
    label: "Data Testing",
    description: "Validate your data",
    href: "https://calendly.com/contact-hmul/schedule",
  },
  {
    label: "AI Agent / Model Testing",
    description: "Check AI responses",
    href: "https://calendly.com/contact-hmul/schedule",
  },
] as const;

const actionLinks = {
  signIn: "/auth/cognito/sign-in",
  schedule: "https://calendly.com/contact-hmul/schedule",
  signUp: "/auth/cognito/sign-up",
} as const;

const swiftTransition =
  "transition-[color,background-color,border-color,opacity,transform,box-shadow] duration-150 ease-[cubic-bezier(.5,0,0,1)]";

export function SiteHeader() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const solutionsRootRef = useRef<HTMLLIElement>(null);
  const solutionsButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!solutionsOpen && !mobileMenuOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        solutionsOpen &&
        event.target instanceof Node &&
        !solutionsRootRef.current?.contains(event.target)
      ) {
        setSolutionsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      } else if (solutionsOpen) {
        setSolutionsOpen(false);
        solutionsButtonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen, solutionsOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const desktopQuery = window.matchMedia("(min-width: 75rem)");

    function closeAtDesktop(event: MediaQueryListEvent) {
      if (event.matches) {
        setMobileMenuOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    desktopQuery.addEventListener("change", closeAtDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      desktopQuery.removeEventListener("change", closeAtDesktop);
    };
  }, [mobileMenuOpen]);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <div className="sticky top-0 z-50 w-full bg-[#f5faf2]">
      <header className="border-b border-[#4d8c58] bg-[#f5faf2] px-6 md:px-32">
        <div className="testsprite-container flex !w-full !max-w-none items-center gap-6 py-3 md:!max-w-[1200px] md:py-3.5">
          <a
            aria-label="TestSprite home"
            className={`flex h-8 w-[152px] shrink-0 items-center text-[#030303] ${swiftTransition} hover:opacity-75`}
            href="https://www.testsprite.com"
          >
            <TestSpriteLogo />
          </a>

          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex h-[39.5938px] items-stretch gap-1 text-sm leading-[19.6px] font-medium">
              <li
                className="relative"
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setSolutionsOpen(false);
                  }
                }}
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
                ref={solutionsRootRef}
              >
                <button
                  aria-controls="desktop-solutions-menu"
                  aria-expanded={solutionsOpen}
                  aria-haspopup="menu"
                  className={`flex h-full items-center gap-2 px-4 text-[#030303] ${swiftTransition} hover:bg-[#e8efe5] focus-visible:bg-[#e8efe5]`}
                  onClick={() => setSolutionsOpen((open) => !open)}
                  onFocus={() => setSolutionsOpen(true)}
                  ref={solutionsButtonRef}
                  type="button"
                >
                  Solutions
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 border-t border-l border-current ${swiftTransition} ${solutionsOpen ? "rotate-45" : "rotate-[225deg]"}`}
                  />
                </button>

                {solutionsOpen ? (
                  <div
                    aria-label="Solutions"
                    className="absolute top-full left-0 z-50 grid h-72 w-[642px] origin-top-left animate-in grid-cols-[320px_1fr] border border-black/10 bg-[#f5faf2] text-[#030303] shadow-[0_24px_56px_rgba(21,44,24,0.13),0_8px_18px_rgba(21,44,24,0.08)] duration-150 fade-in zoom-in-95 slide-in-from-top-2 [animation-timing-function:cubic-bezier(.5,0,0,1)]"
                    id="desktop-solutions-menu"
                    role="menu"
                  >
                    <span className="absolute top-[-1px] left-[-1px] h-1.5 w-1.5 bg-[#4d8c58]" />
                    <span className="absolute top-[-1px] right-[-1px] h-1.5 w-1.5 bg-[#4d8c58]" />
                    <span className="absolute bottom-[-1px] left-[-1px] h-1.5 w-1.5 bg-[#4d8c58]" />
                    <span className="absolute right-[-1px] bottom-[-1px] h-1.5 w-1.5 bg-[#4d8c58]" />

                    <a
                      className={`group flex min-h-0 flex-col border-r border-black/10 p-[18px] ${swiftTransition} hover:bg-[#e8efe5] focus-visible:bg-[#e8efe5]`}
                      href={solutionLinks[0].href}
                      role="menuitem"
                    >
                      <span className="flex items-start justify-between gap-4 text-[20px] leading-6 tracking-[-0.6px]">
                        {solutionLinks[0].label}
                        <ArrowUpRightIcon className="mt-0.5 h-4 w-4 opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100" />
                      </span>
                      <span className="mt-1 font-mono text-sm leading-5 text-[#7c827d]">
                        {solutionLinks[0].description}
                      </span>

                      <span
                        aria-hidden="true"
                        className="relative mt-8 ml-6 h-[126px] w-[232px] border border-[#4d8c58]/10 bg-[linear-gradient(to_right,rgba(77,140,88,.08)_1px,transparent_1px),linear-gradient(rgba(77,140,88,.08)_1px,transparent_1px)] bg-[size:12px_12px]"
                      >
                        <span className="absolute top-3 left-8 h-[86px] w-[156px] border border-[#4d8c58]/20 bg-[#fbfefb]/90 p-3 shadow-[0_8px_20px_rgba(21,44,24,0.08)]">
                          <span className="block h-2 w-16 bg-[#4d8c58]/15" />
                          <span className="mt-3 block h-5 border border-[#4d8c58]/15 bg-[#f5faf2]" />
                          <span className="mt-2 block h-5 border border-[#4d8c58]/15 bg-[#f5faf2]" />
                        </span>
                      </span>
                    </a>

                    <div className="grid min-h-0 grid-rows-4">
                      {solutionLinks.slice(1).map((solution, index) => (
                        <a
                          className={`group flex min-h-0 items-center justify-between gap-4 px-[18px] ${index < 3 ? "border-b border-black/10" : ""} ${swiftTransition} hover:bg-[#e8efe5] focus-visible:bg-[#e8efe5]`}
                          href={solution.href}
                          key={solution.label}
                          role="menuitem"
                        >
                          <span>
                            <span className="block text-[20px] leading-6 tracking-[-0.6px]">
                              {solution.label}
                            </span>
                            <span className="mt-0.5 block font-mono text-sm leading-5 text-[#7c827d]">
                              {solution.description}
                            </span>
                          </span>
                          <ArrowUpRightIcon className="h-4 w-4 shrink-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100" />
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </li>

              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className={`flex h-full items-center px-4 text-[#030303] ${swiftTransition} hover:bg-[#e8efe5] focus-visible:bg-[#e8efe5]`}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto hidden h-[41.5938px] w-[411.953px] items-stretch gap-2 text-sm leading-[19.6px] font-medium whitespace-nowrap md:flex">
            <a
              className={`flex flex-1 items-center justify-center px-4 text-[#030303] ${swiftTransition} hover:bg-[#e8efe5] focus-visible:bg-[#e8efe5]`}
              href={actionLinks.signIn}
            >
              Sign In
            </a>
            <a
              className={`flex w-[152px] items-center justify-center border border-black/10 px-4 text-[#030303] ${swiftTransition} hover:border-[#4d8c58] hover:bg-[#e8efe5] focus-visible:border-[#4d8c58]`}
              href={actionLinks.schedule}
            >
              Schedule a Call
            </a>
            <a
              className={`flex w-[158px] items-center justify-center bg-[#4d8c58] px-4 text-[#f5faf2] ${swiftTransition} hover:bg-[#396641] focus-visible:bg-[#396641] active:bg-[#28402c]`}
              href={actionLinks.signUp}
            >
              Get Started Free
            </a>
          </div>

          <button
            aria-controls="compact-navigation"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className={`ml-auto flex h-9 w-9 shrink-0 items-center justify-center border border-black/10 text-[#030303] md:hidden ${swiftTransition} hover:border-[#4d8c58] hover:bg-[#e8efe5]`}
            onClick={() => setMobileMenuOpen((open) => !open)}
            ref={menuButtonRef}
            type="button"
          >
            {mobileMenuOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {mobileMenuOpen ? (
        <nav
          aria-label="Compact navigation"
          className="fixed inset-x-0 top-[61px] bottom-0 z-40 overflow-y-auto bg-[#f5faf2] px-6 pt-[84px] pb-8 md:hidden"
          id="compact-navigation"
        >
          <div className="mx-auto w-full">
            <a
              className={`flex h-[55px] items-center justify-between border-b border-black/10 text-[21px] leading-7 tracking-[-0.6px] ${swiftTransition} hover:text-[#4d8c58]`}
              href={solutionLinks[0].href}
              onClick={closeMobileMenu}
            >
              Solutions
              <span aria-hidden="true" className="relative h-5 w-5 text-[#858b86]">
                <span className="absolute top-1/2 left-0 h-px w-5 bg-current" />
                <span className="absolute top-0 left-1/2 h-5 w-px bg-current" />
              </span>
            </a>

            {navigationLinks.map((link) => (
              <a
                className={`flex h-[55px] items-center border-b border-black/10 text-[21px] leading-7 tracking-[-0.6px] ${swiftTransition} hover:text-[#4d8c58]`}
                href={link.href}
                key={link.label}
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            ))}

            <div className="mt-8 flex flex-col gap-3 font-mono text-xs leading-[16.8px] font-medium">
              <a
                className={`flex h-9 items-center justify-center text-[#030303] ${swiftTransition} hover:text-[#4d8c58]`}
                href={actionLinks.signIn}
                onClick={closeMobileMenu}
              >
                Sign In
              </a>
              <a
                className={`flex h-10 items-center justify-center border border-black/10 text-[#030303] ${swiftTransition} hover:border-[#4d8c58] hover:bg-[#e8efe5]`}
                href={actionLinks.schedule}
                onClick={closeMobileMenu}
              >
                Schedule a Call
              </a>
              <a
                className={`flex h-10 items-center justify-center bg-[#4d8c58] text-[#f5faf2] ${swiftTransition} hover:bg-[#396641] active:bg-[#28402c]`}
                href={actionLinks.signUp}
                onClick={closeMobileMenu}
              >
                Get Started Free
              </a>
            </div>
          </div>
        </nav>
      ) : null}
    </div>
  );
}
