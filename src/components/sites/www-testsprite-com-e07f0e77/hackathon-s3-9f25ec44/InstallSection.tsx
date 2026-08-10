const setupSteps = [
  {
    label: "01 // Install",
    title: "Get the CLI",
    link: {
      href: "https://github.com/TestSprite/testsprite-cli",
      label: "View on GitHub →",
    },
  },
  {
    label: "02 // Onboard",
    title: "testsprite setup",
    description: "API key + agent skill.",
  },
  {
    label: "03 // Target",
    title: "Your live URL",
    description:
      "The CLI tests in the cloud, point it at your deployed app.",
  },
  {
    label: "04 // Loop",
    title: "create · fix · rerun",
    description: "The agent drives the loop. Every pass banks.",
  },
] as const;

export function InstallSection() {
  return (
    <section className="md:px-32">
      <div className="testsprite-container border-x border-black/[0.06]">
        <header className="grid gap-6 border-b border-black/[0.06] px-3 py-[18px] sm:gap-8 sm:p-6 md:min-h-[192px] md:grid-cols-[3fr_2fr] md:items-center md:gap-12">
          <div>
            <p className="font-mono text-[14px] leading-[19.6px] tracking-[-0.56px] text-ts-green sm:text-[16px] sm:leading-[22.4px] sm:tracking-[-0.64px]">
              {"// Start in 3 minutes"}
            </p>
            <h2 className="mt-4 text-[22px] leading-[24.2px] font-semibold tracking-[-0.55px] text-ts-text sm:text-[46px] sm:leading-[50.6px] sm:tracking-[-1.15px]">
              Install. Onboard.
              <br />
              <span className="text-ts-green">Loop.</span>
            </h2>
          </div>

          <p className="font-mono text-[12px] leading-[19.6px] tracking-[-0.48px] text-ts-secondary sm:text-[16px] sm:leading-[26px] sm:tracking-[-0.64px]">
            One install, one init, and the CLI installs a verification skill
            into your agent, so it knows when and how to run the checker. Full
            commands &amp; docs live in the open-source repo.
          </p>
        </header>

        <ol className="grid sm:h-[194px] sm:grid-cols-4">
          {setupSteps.map((step, index) => (
            <li
              className={`border-b border-black/[0.06] p-6 sm:p-8 ${
                index < setupSteps.length - 1 ? "sm:border-r" : ""
              }`}
              key={step.label}
            >
              <p className="font-mono text-[12px] leading-[16.8px] tracking-[-0.48px] text-ts-green sm:text-[14px] sm:leading-[19.6px] sm:tracking-[-0.56px]">
                {step.label}
              </p>
              <h3 className="mt-2 text-[20px] leading-[22px] font-normal tracking-[-0.5px] text-ts-text sm:text-[22px] sm:leading-[24.2px] sm:tracking-[-0.55px]">
                {step.title}
              </h3>
              {"link" in step ? (
                <a
                  className="mt-2 inline-block font-mono text-[12px] leading-[16.8px] tracking-[-0.48px] text-ts-green underline decoration-1 underline-offset-4 transition-opacity duration-150 ease-[cubic-bezier(0.5,0,0,1)] hover:opacity-80 sm:text-[16px] sm:leading-[22.4px] sm:tracking-[-0.64px]"
                  href={step.link.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {step.link.label}
                </a>
              ) : (
                <p className="mt-2 font-mono text-[12px] leading-[16.8px] tracking-[-0.48px] text-ts-secondary sm:text-[16px] sm:leading-[22.4px] sm:tracking-[-0.64px]">
                  {step.description}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
