import Image from "next/image";

const imageRoot =
  "/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/images";

export function SubmissionSection() {
  return (
    <section className="md:px-32">
      <div className="testsprite-container">
        <div className="testsprite-grid-bg relative h-[83px] border border-ts-border sm:h-[156px]">
          <span className="testsprite-marker absolute left-[-1px] top-[-1px]" />
          <span className="testsprite-marker absolute right-[-1px] top-[-1px]" />
          <span className="testsprite-marker absolute bottom-[-1px] left-[-1px]" />
          <span className="testsprite-marker absolute bottom-[-1px] right-[-1px]" />
        </div>

        <header className="flex h-[123px] flex-col items-center justify-center gap-4 border-x border-b border-ts-border px-6 text-center sm:h-[251px]">
          <p className="font-mono text-xs leading-[16.8px] tracking-[-0.48px] text-ts-green sm:text-base sm:leading-[22.4px] sm:tracking-[-0.64px]">
            {"// How to Submit"}
          </p>
          <h2 className="text-[22px] font-semibold leading-[24.2px] tracking-[-0.55px] sm:text-[46px] sm:leading-[50.6px] sm:tracking-[-1.15px]">
            What <span className="text-ts-green">Goes Where.</span>
          </h2>
        </header>

        <div className="grid h-[406px] grid-rows-[auto_1fr] overflow-hidden border-x border-b border-ts-border sm:h-[399px] sm:grid-cols-2 sm:grid-rows-1">
          <article className="px-6 pt-6 sm:flex sm:h-full sm:flex-col sm:p-12">
            <h3 className="text-xl font-semibold leading-[22px] tracking-[-0.5px] sm:text-[29px] sm:leading-[31.9px] sm:tracking-[-0.725px]">
              The agent writes LOOP.md.
            </h3>
            <p className="mt-2 font-mono text-xs leading-[16.8px] tracking-[-0.48px] text-ts-secondary sm:text-sm sm:leading-[19.6px] sm:tracking-[-0.56px]">
              One plain-English line per iteration: maker first, then what ran,
              what broke, what got fixed. Your agent writes it as the loop runs.
              No hand-writing. Judges read this first.
            </p>
            <p className="mt-6 font-mono text-xs leading-[16.8px] tracking-[-0.48px] text-ts-green sm:mt-auto sm:text-sm sm:leading-[19.6px] sm:tracking-[-0.56px]">
              Backed by your commit history + the platform run history, so the
              log is fast to read and easy to trust.
            </p>
          </article>

          <div className="flex min-h-0 items-start justify-center overflow-hidden sm:border-l sm:border-ts-border sm:pt-6">
            <Image
              src={`${imageRoot}/s3-loopmd-light.png`}
              alt="An agent-written LOOP.md log showing four automated coding and testing iterations"
              width={1491}
              height={1359}
              sizes="(min-width: 810px) 494px, 350px"
              className="h-auto w-full max-w-none sm:w-[494px]"
            />
          </div>
        </div>

        <div className="grid h-[135px] content-start gap-7 border-x border-b border-ts-border p-3 sm:h-[94px] sm:grid-cols-[2fr_3fr] sm:items-center sm:gap-12 sm:p-6">
          <h3 className="text-xl leading-[22px] tracking-[-0.5px] sm:text-2xl sm:leading-[26.4px] sm:tracking-[-0.6px]">
            Two steps to submit
          </h3>
          <p className="font-mono text-xs leading-[16.8px] tracking-[-0.48px] text-ts-secondary sm:text-sm sm:leading-[19.6px] sm:tracking-[-0.56px]">
            Your repo carries the proof the loop ran. Your Discord post is the
            entry that registers you. Both need to be in before the deadline.
          </p>
        </div>

        <div className="grid grid-cols-1 border-x border-b border-ts-border sm:grid-cols-2">
          <article className="h-[426px] overflow-hidden border-b border-ts-border p-6 sm:h-[678px] sm:border-b-0 sm:border-r sm:p-8">
            <h3 className="text-xl font-semibold leading-[22px] tracking-[-0.5px] sm:text-[29px] sm:leading-[31.9px] sm:tracking-[-0.725px]">
              <span className="text-ts-green">01 // </span>In your GitHub repo
            </h3>
            <p className="mt-3 font-mono text-xs leading-[16.8px] tracking-[-0.48px] text-ts-secondary sm:text-base sm:leading-[22.4px] sm:tracking-[-0.64px]">
              Your source, an agent-written LOOP.md, and a README with the app
              and live URL.
            </p>
            <Image
              src={`${imageRoot}/s3-github-repo-light.png`}
              alt="A GitHub repository diagram containing source code, LOOP.md, README.md, and optional failure bundles"
              width={1434}
              height={1299}
              sizes="(min-width: 1200px) 586px, (min-width: 810px) 365px, 350px"
              className="-mx-6 -mb-6 mt-[35px] h-auto w-[calc(100%+3rem)] max-w-none sm:-mx-8 sm:-mb-8 sm:mt-[26px] sm:w-[calc(100%+4rem)]"
            />
          </article>

          <article className="h-[451px] overflow-hidden p-6 sm:h-[678px] sm:p-8">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <h3 className="text-xl font-semibold leading-[22px] tracking-[-0.5px] sm:text-[29px] sm:leading-[31.9px] sm:tracking-[-0.725px]">
                <span className="text-ts-green">02 // </span>Post in Discord
              </h3>
              <span className="ml-2 border border-ts-border-strong bg-ts-green-alpha px-3 py-1 font-mono text-xs font-medium leading-[16.8px] tracking-[-0.48px] text-ts-green sm:ml-0 sm:text-sm sm:leading-[19.6px] sm:tracking-[-0.56px]">
                #hackathon-submissions
              </span>
            </div>
            <p className="mt-3 font-mono text-xs leading-[16.8px] tracking-[-0.48px] text-ts-secondary sm:text-base sm:leading-[22.4px] sm:tracking-[-0.64px]">
              Your live URL, public repo link, and TestSprite account. Demo video
              optional.
            </p>
            <Image
              src={`${imageRoot}/s3-submit-checklist-light.png`}
              alt="Discord submission checklist with a live URL, public repository, TestSprite account, and optional demo video"
              width={1434}
              height={1299}
              sizes="(min-width: 1200px) 586px, (min-width: 810px) 365px, 350px"
              className="-mx-6 -mb-6 mt-3.5 h-auto w-[calc(100%+3rem)] max-w-none sm:-mx-8 sm:-mb-8 sm:mt-[26px] sm:w-[calc(100%+4rem)]"
            />
          </article>
        </div>

        <div
          aria-hidden="true"
          className="relative h-[41px] border-x border-b border-ts-border sm:h-[138px]"
        >
          <span className="testsprite-marker absolute bottom-[-1px] left-[-1px]" />
          <span className="testsprite-marker absolute bottom-[-1px] right-[-1px]" />
        </div>
      </div>
    </section>
  );
}
