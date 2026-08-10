const timelineEntries = [
  {
    date: "Jun 30 · 5:00 PM PDT",
    title: "Launch & Setup",
    detail: "Install the CLI, onboard your agent, deploy your app.",
  },
  {
    date: "Jun 30 – Jul 10",
    title: "Build & Loop",
    detail: "Run write → verify → fix against your live app.",
  },
  {
    date: "Jul 10 · 4:59 PM PDT",
    title: "Submissions Close",
    detail:
      "Live URL + repo + LOOP.md + account. Extended from Jul 7, three extra days to build.",
  },
  {
    date: "Jul 11 – Jul 15",
    title: "Review",
    detail: "Every entry against the rubric.",
  },
  {
    date: "Jul 15",
    title: "Winners",
    detail: "Top 5 revealed on X & Discord.",
  },
  {
    date: "No end date",
    title: "CLI Improvement Bonus, always open",
    detail:
      "Separate from hackathon clock. The $2,000 improvement bounty runs until pool exhausted. Open a PR improving CLI any time, even after Jul 16.",
    ongoing: true,
  },
] as const;

export function TimelineSection() {
  return (
    <section
      aria-labelledby="timeline-heading"
      className="bg-[#f5faf2] md:px-32"
    >
      <div className="testsprite-container border-x border-black/10">
        <header className="px-6 pt-14 pb-6">
          <p className="font-mono text-xs leading-[16.8px] text-[#4d8c58] sm:text-sm sm:leading-[19.6px] md:text-base md:leading-[22.4px]">
            {"// Execution Timeline"}
          </p>
          <h2
            className="mt-4 text-[22px] leading-[24.2px] font-semibold tracking-[-0.55px] text-[#030303] sm:text-[34px] sm:leading-[37.4px] sm:tracking-[-0.85px] md:text-[46px] md:leading-[50.6px] md:tracking-[-1.15px]"
            id="timeline-heading"
          >
            One Week to <span className="text-[#4d8c58]">Ship.</span>
          </h2>
        </header>

        <div className="min-h-[932px] bg-[url('/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/images/with-testsprite.png')] bg-cover bg-center p-3 sm:p-6 md:min-h-[1099px] md:p-10">
          <article className="min-h-[908px] border border-[#4d8c58] bg-[#f5faf2] md:min-h-[1019px]">
            <header className="testsprite-grid-bg flex h-12 items-center justify-center border-b border-black/10 px-5 font-mono text-xs leading-[16.8px] text-[#4d8c58] sm:text-sm sm:leading-[19.6px] md:text-base md:leading-[22.4px]">
              {"// Season 03"}
            </header>

            <div className="px-5 py-7 md:px-[52px] md:py-12">
              <ol className="relative ml-1 space-y-6 border-l border-[#4d8c58] md:space-y-[52px]">
                {timelineEntries.map((entry) => (
                  <li className="relative pl-7 md:pl-[30px]" key={entry.title}>
                    <span
                      aria-hidden="true"
                      className="absolute top-[4px] left-[-6.5px] h-3 w-3 bg-[#4d8c58]"
                    />
                    <p className="font-mono text-xs leading-[16.8px] text-[#4d8c58] sm:text-sm sm:leading-[19.6px] md:text-base md:leading-[22.4px]">
                      {entry.date}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <h3 className="text-lg leading-[21px] font-normal tracking-[-0.36px] text-[#030303] sm:text-xl sm:leading-[22px] md:text-[22px] md:leading-[24.2px] md:tracking-[-0.44px]">
                        {entry.title}
                      </h3>
                      {"ongoing" in entry ? (
                        <span className="border border-[#4d8c58] bg-[#54b365]/10 px-2 py-0.5 font-mono text-[11px] leading-[15.4px] text-[#4d8c58] md:text-xs md:leading-[16.8px]">
                          ongoing
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 max-w-[930px] font-mono text-xs leading-[16.8px] text-[#7c827d] sm:text-sm sm:leading-[19.6px] md:text-base md:leading-[22.4px]">
                      {entry.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
