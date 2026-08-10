const ctaLinks = [
  {
    label: "Join Discord Now",
    href: "https://discord.com/invite/GXWFjCe4an",
    primary: true,
  },
  {
    label: "Follow @TestSprite on X",
    href: "https://x.com/test_sprite",
    primary: false,
  },
] as const;

const swiftTransition =
  "transition-[color,background-color,border-color,opacity] duration-150 ease-[cubic-bezier(.5,0,0,1)]";

export function FinalCtaSection() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-[#f5faf2] md:px-32"
    >
      <div className="testsprite-container border-y border-black/10">
        <div className="flex min-h-[377px] bg-[url('/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/images/with-testsprite.png')] bg-cover bg-center px-3 py-5 md:h-[514px] md:min-h-0 md:px-20 md:pt-[46px] md:pb-[78px]">
          <div className="flex w-full flex-col items-center justify-center bg-[#f5faf2] px-5 py-10 text-center shadow-[0_32px_60px_rgba(21,44,24,0.12)] md:h-[390px] md:px-16 md:py-16">
            <h2
              className="text-2xl leading-[26.4px] font-semibold tracking-[-0.6px] text-[#030303] md:text-[46px] md:leading-[50.6px] md:tracking-[-1.15px]"
              id="final-cta-heading"
            >
              Build the <span className="text-[#4d8c58]">Whole Loop.</span>
            </h2>
            <p className="mt-4 max-w-[620px] font-mono text-xs leading-[18px] text-[#7c827d] md:text-base md:leading-[22.4px]">
              Including the half most people skip. Install the CLI, wire it in as
              your checker, then let your agent loop. Follow on X and join
              Discord, where everything happens.
            </p>
            <div className="mt-[34px] flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              {ctaLinks.map((link) => (
                <a
                  className={`flex min-h-10 items-center justify-center px-4 py-3 font-mono text-xs leading-[16.8px] font-medium md:min-h-[54px] md:px-5 md:py-4 md:text-base md:leading-[22.4px] ${swiftTransition} ${link.primary ? "bg-[#4d8c58] text-[#f5faf2] hover:bg-[#396641] active:bg-[#28402c]" : "border border-[#4d8c58] bg-[#f5faf2] text-[#4d8c58] hover:bg-[#e8efe5] hover:text-[#396641]"}`}
                  href={link.href}
                  key={link.label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="hidden h-[171px] bg-[#f5faf2] md:block" />
      </div>
    </section>
  );
}
