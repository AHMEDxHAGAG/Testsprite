const steps = [
  {
    number: "01",
    role: "Maker",
    title: "Write",
    description:
      "Your coding agent ships code. Claude Code, Codex, Antigravity, whatever you build with.",
  },
  {
    number: "02",
    role: "Checker",
    title: "Verify",
    description:
      "The TestSprite CLI runs real tests against your live app and returns verdicts.",
  },
  {
    number: "03",
    role: "Maker",
    title: "Fix",
    description:
      "Agent reads the failure bundle and fixes the root cause.",
  },
  {
    number: "04",
    role: "Checker",
    title: "Verify Again",
    description: "Rerun. Pass banks. Then back to the top.",
  },
] as const;

export function LoopStepsSection() {
  return (
    <section id="how-it-works" className="bg-[#f5faf2] md:px-32">
      <div className="testsprite-container border-x border-black/10">
        <header className="relative grid border-b border-black/10 px-6 pt-16 pb-6 md:grid-cols-[7fr_3fr] md:gap-12 md:pt-28">
          <div>
            <p className="font-mono text-xs leading-[16.8px] text-[#4d8c58] sm:text-sm sm:leading-[19.6px] md:text-base md:leading-[22.4px]">
              {"// The Loop"}
            </p>
            <h2 className="mt-4 text-[22px] leading-[24.2px] font-semibold tracking-[-0.55px] text-[#030303] sm:text-[34px] sm:leading-[37.4px] sm:tracking-[-0.85px] md:text-[46px] md:leading-[50.6px] md:tracking-[-1.15px]">
              Four Steps.
              <br />
              One <span className="text-[#4d8c58]">Repeats.</span>
            </h2>
          </div>
          <span
            aria-hidden="true"
            className="absolute top-[93px] right-0 hidden h-6 w-6 bg-[#4d8c58] md:block"
          />
        </header>

        <div className="grid sm:grid-cols-2">
          {steps.map((step, index) => (
            <article
              className={`relative min-h-[118px] overflow-hidden border-b border-black/10 p-6 sm:min-h-[154px] sm:p-8 ${index % 2 === 1 ? "sm:border-l sm:border-black/10" : ""}`}
              key={step.number}
            >
              <div className="relative z-10 flex items-center gap-2">
                <h3 className="text-xl leading-[22px] font-normal tracking-[-0.4px] text-[#030303] sm:text-2xl sm:leading-[26.4px] md:text-[29px] md:leading-[31.9px] md:tracking-[-0.58px]">
                  {step.title}
                </h3>
                <span className="border border-[#4d8c58] bg-[#4d8c58]/5 px-3 py-1 font-mono text-xs leading-[16.8px] text-[#4d8c58] md:text-sm md:leading-[19.6px]">
                  {step.role}
                </span>
              </div>
              <p className="relative z-10 mt-3 max-w-[420px] font-mono text-xs leading-[16.8px] text-[#7c827d] sm:text-sm sm:leading-[19.6px] md:text-base md:leading-[22.4px]">
                {step.description}
              </p>
              <span
                aria-hidden="true"
                className="absolute right-3 bottom-[-3px] font-sans text-[56px] leading-none font-semibold tracking-[-2px] text-[#4d8c58]/20 sm:right-4 sm:bottom-[-8px] sm:text-[72px] md:text-[88px] md:tracking-[-3px]"
              >
                {step.number}
              </span>
            </article>
          ))}
        </div>

        <footer className="flex flex-col gap-4 border-b border-black/10 px-6 py-6 font-mono text-xs leading-[16.8px] sm:px-8 sm:text-sm sm:leading-[19.6px] md:flex-row md:items-center md:justify-between md:gap-8">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 whitespace-nowrap">
            <strong className="font-semibold text-[#030303]">Maker</strong>
            <span className="text-[#7c827d]">your coding agent</span>
            <span aria-hidden="true" className="text-[#7c827d]">
              ⇆
            </span>
            <strong className="font-semibold text-[#030303]">Checker</strong>
            <span className="text-[#7c827d]">TestSprite CLI</span>
          </p>
          <p className="max-w-[610px] text-[#7c827d] md:text-right">
            <span aria-hidden="true">⟳ </span>a loop with no real checker
            doesn&apos;t fail loudly. It{" "}
            <span className="text-[#4d8c58]">hallucinates progress.</span>
          </p>
        </footer>
      </div>
    </section>
  );
}
