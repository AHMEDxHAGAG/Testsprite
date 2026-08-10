import Image from "next/image";

const imageRoot =
  "/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/images";

export function PrizePoolSection() {
  return (
    <section className="md:px-32">
      <div className="testsprite-container">
        <div className="relative flex h-[229px] flex-col items-center gap-4 border border-black/[0.06] px-6 pt-8 text-center sm:h-[313px] sm:pt-20">
          <p className="font-mono text-xs leading-[16.8px] tracking-[-0.48px] text-ts-green sm:text-base sm:leading-[22.4px] sm:tracking-[-0.64px]">
            {"// Prize Pool"}
          </p>

          <h2 className="text-2xl font-semibold leading-[26.4px] tracking-[-0.6px] sm:text-[46px] sm:leading-[50.6px] sm:tracking-[-1.15px]">
            <span className="text-ts-green">$5,000</span> total.
          </h2>

          <p className="max-w-[540px] font-mono text-xs leading-[16.8px] tracking-[-0.48px] text-ts-secondary sm:text-base sm:leading-[22.4px] sm:tracking-[-0.64px]">
            Build the best loop, or make the CLI better while you build.
          </p>

          <div className="testsprite-grid-bg relative z-10 border border-ts-border-strong bg-ts-green-alpha px-3 py-2 font-mono text-xs leading-[16.8px] tracking-[-0.48px] text-ts-green sm:text-base sm:leading-[22.4px] sm:tracking-[-0.64px]">
            Two ways to win
          </div>

          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-10 border-l border-ts-green/60 sm:left-1/4 sm:right-1/4 sm:h-[50px] sm:border-l-0"
          >
            <span className="absolute inset-x-0 bottom-0 top-6 hidden border-x border-ts-green/60 sm:block" />
            <span className="absolute left-0 right-0 top-6 hidden border-t border-ts-green/60 sm:block" />
            <span className="absolute left-1/2 top-0 hidden h-6 border-l border-ts-green/60 sm:block" />
          </div>
        </div>

        <div className="grid grid-cols-1 border-x border-b border-black/[0.06] sm:grid-cols-2">
          <article className="overflow-hidden border-b border-black/[0.06] px-6 pt-6 sm:border-b-0 sm:border-r sm:px-8 sm:pt-8">
            <h3 className="text-xl font-semibold leading-[22px] tracking-[-0.5px] sm:text-[29px] sm:leading-[31.9px] sm:tracking-[-0.725px]">
              Project Awards
            </h3>
            <p className="font-mono text-xs leading-[16.8px] tracking-[-0.48px] text-ts-green sm:text-base sm:leading-[22.4px] sm:tracking-[-0.64px]">
              $3,000 · 5 winners
            </p>
            <p className="mt-3 font-mono text-xs leading-[16.8px] tracking-[-0.48px] text-ts-secondary sm:text-base sm:leading-[22.4px] sm:tracking-[-0.64px]">
              Best projects built with the CLI in a real testing loop. Judged on
              the loop, not polish or pitch.
            </p>

            <div className="relative -mx-6 mt-10 aspect-[1434/1299] w-[calc(100%+3rem)] sm:-mx-8 sm:mt-[35px] sm:w-[calc(100%+4rem)]">
              <Image
                src={`${imageRoot}/hero-bg-light.png`}
                alt=""
                fill
                sizes="(min-width: 1200px) 586px, (min-width: 810px) 365px, 350px"
                className="object-cover"
              />
              <Image
                src={`${imageRoot}/s3-prize-tiers-light.png`}
                alt="Project award tiers: $1,500 first place, $750 second place, $450 third place, and two $150 honorable mentions"
                width={1434}
                height={1299}
                sizes="(min-width: 1200px) 586px, (min-width: 810px) 365px, 350px"
                className="relative h-auto w-full"
              />
            </div>
          </article>

          <article className="overflow-hidden px-6 pt-6 sm:px-8 sm:pt-8">
            <h3 className="text-xl font-semibold leading-[22px] tracking-[-0.5px] sm:text-[29px] sm:leading-[31.9px] sm:tracking-[-0.725px]">
              CLI Improvement Bonus
            </h3>
            <p className="font-mono text-xs leading-[16.8px] tracking-[-0.48px] text-ts-green sm:text-base sm:leading-[22.4px] sm:tracking-[-0.64px]">
              $2,000 pool · standing bounty
            </p>
            <p className="mt-3 font-mono text-xs leading-[16.8px] tracking-[-0.48px] text-ts-secondary sm:text-base sm:leading-[22.4px] sm:tracking-[-0.64px]">
              Separate from judging. Cash for merged improvements, doesn&apos;t
              affect your Project Award score.
            </p>

            <div className="relative -mx-6 mt-10 aspect-[1434/1299] w-[calc(100%+3rem)] sm:-mx-8 sm:mt-[35px] sm:w-[calc(100%+4rem)]">
              <Image
                src={`${imageRoot}/s3-cli-bonus-light.png`}
                alt="CLI improvement bounty: $100 or more per merged pull request, paid from the $2,000 pool"
                width={1434}
                height={1299}
                sizes="(min-width: 1200px) 586px, (min-width: 810px) 365px, 350px"
                className="h-auto w-full"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
