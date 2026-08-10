const cardClassName =
  "p-6 md:grid md:grid-cols-[185px_1fr] md:items-center md:gap-8 md:p-8";

const scoreClassName =
  "whitespace-nowrap text-[32px] leading-[35.2px] font-semibold tracking-[-0.8px] text-ts-green md:text-[44px] md:leading-[48.4px] md:tracking-[-1.1px]";

const titleClassName =
  "text-[20px] leading-[22px] font-normal tracking-[-0.5px] text-ts-text md:text-[22px] md:leading-[24.2px] md:tracking-[-0.55px]";

const bodyClassName =
  "mt-2 font-mono text-[12px] leading-[16.8px] tracking-[-0.48px] text-ts-secondary md:mt-3 md:text-[16px] md:leading-[22.4px] md:tracking-[-0.64px]";

export function JudgingSection() {
  return (
    <section className="md:px-32">
      <div className="testsprite-container border-x border-black/[0.06]">
        <header className="grid min-h-[140px] grid-cols-[1fr_auto] gap-6 border-b border-black/[0.06] px-6 pt-14 pb-6 md:min-h-[213px] md:grid-cols-[7fr_3fr] md:gap-12 md:pt-24">
          <div>
            <p className="font-mono text-[14px] leading-[19.6px] tracking-[-0.56px] text-ts-green md:text-[16px] md:leading-[22.4px] md:tracking-[-0.64px]">
              {"// Judging Criteria"}
            </p>
            <h2 className="mt-4 text-[22px] leading-[24.2px] font-semibold tracking-[-0.55px] text-ts-text md:text-[46px] md:leading-[50.6px] md:tracking-[-1.15px]">
              Human <span className="text-ts-green">Judges.</span>
            </h2>
          </div>
          <span
            aria-hidden="true"
            className="hidden size-6 justify-self-end bg-ts-green md:block"
          />
        </header>

        <div className="grid border-b border-black/[0.06] md:h-[413px] md:grid-cols-2 md:grid-rows-2">
          <article className={`${cardClassName} border-b border-black/[0.06] md:border-r`}>
            <p className={scoreClassName}>40 pts</p>
            <div className="mt-2 md:mt-0">
              <h3 className={titleClassName}>Project Quality</h3>
              <p className={bodyClassName}>
                Craft, polish, completeness. Does the live app actually work
                well?
              </p>
            </div>
          </article>

          <article className={`${cardClassName} testsprite-grid-bg border-b border-black/[0.06]`}>
            <p className={scoreClassName}>40 pts</p>
            <div className="mt-2 md:mt-0">
              <h3 className={titleClassName}>Loop Quality</h3>
              <p className={bodyClassName}>
                Did a real loop run, and catch and fix real things? Read from
                LOOP.md, commits, and runs.
              </p>
            </div>
          </article>

          <article className={`${cardClassName} border-b border-black/[0.06] md:border-r md:border-b-0`}>
            <p className={scoreClassName}>
              20 pts <span className="text-ts-green/70">+5</span>
            </p>
            <div className="mt-2 md:mt-0">
              <h3 className={titleClassName}>Innovation</h3>
              <p className={bodyClassName}>
                Creativity of the project or the loop design.{" "}
                <span className="text-ts-green">
                  Plus 5 for wiring the checker into CI/CD.
                </span>
              </p>
            </div>
          </article>

          <article className={cardClassName}>
            <p className={scoreClassName}>
              ∞ <span className="bg-ts-green-alpha px-1.5 py-0.5">Bonus</span>
            </p>
            <div className="mt-2 md:mt-0">
              <h3 className={titleClassName}>Engagement</h3>
              <p className={bodyClassName}>
                Discord polls, X shares, and long-form write-ups about your
                loop.
              </p>
            </div>
          </article>
        </div>

        <div className="testsprite-grid-bg relative h-[47px] border-b border-black/[0.06] md:h-[156px]">
          <span
            aria-hidden="true"
            className="testsprite-marker absolute -top-[3px] -left-[3px]"
          />
          <span
            aria-hidden="true"
            className="testsprite-marker absolute -top-[3px] -right-[3px]"
          />
          <span
            aria-hidden="true"
            className="testsprite-marker absolute -bottom-[3px] -left-[3px]"
          />
          <span
            aria-hidden="true"
            className="testsprite-marker absolute -right-[3px] -bottom-[3px]"
          />
        </div>
      </div>
    </section>
  );
}
