const ctaClassName =
  "mt-5 inline-flex w-fit items-center justify-center bg-ts-text px-4 py-3 font-mono text-[14px] leading-[19.6px] font-medium tracking-[-0.56px] text-ts-bg transition-[background-color,opacity] duration-150 ease-[cubic-bezier(0.5,0,0,1)] hover:opacity-80";

export function JoinSection() {
  return (
    <section className="md:px-32" id="how-to-join">
      <div className="testsprite-container border-x border-black/[0.06]">
        <div className="grid sm:h-[393px] sm:grid-cols-2">
          <header className="min-h-[156px] px-6 pt-12 pb-6 sm:min-h-0 sm:px-6 sm:py-24">
            <p className="font-mono text-[14px] leading-[19.6px] tracking-[-0.56px] text-ts-green md:text-[16px] md:leading-[22.4px] md:tracking-[-0.64px]">
              {"// Join"}
            </p>
            <h2 className="mt-4 text-[22px] leading-[24.2px] font-semibold tracking-[-0.55px] text-ts-text md:mt-6 md:text-[46px] md:leading-[50.6px] md:tracking-[-1.15px]">
              Two steps
              <br />
              and you&apos;re <span className="text-ts-green">in.</span>
            </h2>
          </header>

          <div className="grid border border-ts-green sm:grid-rows-2">
            <article className="flex flex-col justify-center border-b border-ts-green p-6 md:p-8">
              <h3 className="text-[18px] leading-[19.8px] font-normal tracking-[-0.45px] text-ts-text md:text-[22px] md:leading-[24.2px] md:tracking-[-0.55px]">
                Step 1 // Follow @TestSprite on X
              </h3>
              <p className="mt-3 font-mono text-[12px] leading-[16.8px] tracking-[-0.48px] text-ts-secondary md:text-[16px] md:leading-[22.4px] md:tracking-[-0.64px]">
                Announcements, countdowns, and winner reveals go out on{" "}
                <span className="text-ts-text">X first.</span>
              </p>
              <a
                className={ctaClassName}
                href="https://x.com/test_sprite"
                rel="noreferrer"
                target="_blank"
              >
                Follow on X
              </a>
            </article>

            <article className="flex flex-col justify-center p-6 md:p-8">
              <h3 className="text-[18px] leading-[19.8px] font-normal tracking-[-0.45px] text-ts-text md:text-[22px] md:leading-[24.2px] md:tracking-[-0.55px]">
                Step 2 // Join the Discord
              </h3>
              <p className="mt-3 font-mono text-[12px] leading-[16.8px] tracking-[-0.48px] text-ts-secondary md:text-[16px] md:leading-[22.4px] md:tracking-[-0.64px]">
                Rules, submissions, polls, Q&amp;A.{" "}
                <span className="text-ts-text">CLI quickstart</span> pinned in
                #hackathon-info.
              </p>
              <a
                className={ctaClassName}
                href="https://discord.com/invite/GXWFjCe4an"
                rel="noreferrer"
                target="_blank"
              >
                Join Discord
              </a>
            </article>
          </div>
        </div>

        <div className="testsprite-grid-bg relative h-[47px] border-b border-black/[0.06] sm:h-[175px]">
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
