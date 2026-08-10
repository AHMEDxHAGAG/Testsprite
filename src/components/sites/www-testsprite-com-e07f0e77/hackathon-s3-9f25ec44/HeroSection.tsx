import Image from "next/image";
import { LockKeyhole } from "lucide-react";

import { ArrowRightIcon, ArrowUpRightIcon } from "../shared/icons";

const imageBase =
  "/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/images";

const stats = [
  { value: "$5,000", caption: "Prize Pool" },
  { value: "10", caption: "Days to Build" },
  { value: "5", caption: "Winners" },
  { value: "Open Source", caption: "CLI · Apache 2.0" },
] as const;

export function HeroSection() {
  return (
    <section className="md:px-32">
      <div className="testsprite-container border-x border-black/[0.06]">
        <div className="grid md:h-[450.703px] md:grid-cols-2">
          <div className="flex flex-col justify-center p-6 md:p-12">
            <div className="testsprite-grid-bg flex w-fit max-w-full items-start gap-2 border border-ts-green px-3 py-1.5 font-mono text-[12px] leading-[16.8px] tracking-[-0.48px] text-ts-green md:text-[14px] md:leading-[19.6px] md:tracking-[-0.56px]">
              <LockKeyhole
                aria-hidden="true"
                className="mt-0.5 size-3.5 shrink-0"
                strokeWidth={1.5}
              />
              <span>Season 3 · Closed · Winners Announced</span>
            </div>

            <h1 className="mt-6 text-[24px] leading-[26.4px] font-semibold tracking-[-0.6px] text-ts-text md:text-[46px] md:leading-[50.6px] md:tracking-[-1.15px]">
              Build the Loop.
            </h1>

            <p className="mt-4 font-mono text-[14px] leading-[19.6px] tracking-[-0.56px] text-ts-secondary md:text-[16px] md:leading-[22.4px] md:tracking-[-0.64px]">
              Your agent writes the code. The open-source TestSprite CLI checks
              it: real tests against your live app, with verdicts your agent
              acts on. Write, verify, fix, verify.
            </p>

            <div className="mt-6 flex flex-col gap-2 md:mt-8 md:flex-row md:gap-3">
              <a
                className="testsprite-primary-button w-full md:w-auto"
                href="https://discord.com/invite/GXWFjCe4an"
                rel="noreferrer"
                target="_blank"
              >
                Join Discord
                <ArrowUpRightIcon
                  aria-hidden="true"
                  className="size-4 md:size-5"
                />
              </a>
              <a
                className="inline-flex min-h-[33px] w-full items-center justify-center gap-2 bg-ts-text px-3 py-2 font-mono text-[12px] leading-[16.8px] font-medium tracking-[-0.48px] text-ts-bg transition-[background-color,opacity] duration-150 ease-[cubic-bezier(0.5,0,0,1)] hover:opacity-80 md:min-h-[54px] md:w-auto md:px-5 md:py-4 md:text-[16px] md:leading-[22.4px] md:tracking-[-0.64px]"
                href="#how-to-join"
              >
                See How It Works
                <ArrowRightIcon
                  aria-hidden="true"
                  className="size-4 md:size-5"
                />
              </a>
            </div>

            <a
              className="mt-4 inline-flex w-fit items-center gap-1 font-mono text-[14px] leading-[19.6px] tracking-[-0.56px] text-ts-green underline decoration-1 underline-offset-4 transition-opacity duration-150 ease-[cubic-bezier(0.5,0,0,1)] hover:opacity-80 md:mt-6 md:text-[16px] md:leading-[22.4px] md:tracking-[-0.64px]"
              href="https://www.testsprite.com/discover"
              rel="noreferrer"
              target="_blank"
            >
              View Past Projects
              <ArrowUpRightIcon
                aria-hidden="true"
                className="size-3.5 md:size-4"
              />
            </a>
          </div>

          <div className="border-x border-b border-ts-green p-1.5 md:p-3">
            <div className="relative flex h-[260px] items-center justify-center overflow-hidden md:h-full md:min-h-80">
              <Image
                alt=""
                className="object-cover"
                fill
                preload
                sizes="(min-width: 1200px) 560px, (min-width: 810px) 336px, calc(100vw - 60px)"
                src={`${imageBase}/frontend-content.png`}
              />
              <div className="relative z-10 w-[88%] translate-y-[18px] bg-white p-1.5 shadow-[0_20px_60px_rgba(24,50,30,0.18)] md:w-[84%]">
                <Image
                  alt="TestSprite CLI verifying a live application"
                  className="h-auto w-full"
                  height={1700}
                  sizes="(min-width: 1200px) 458px, (min-width: 810px) 282px, calc(88vw - 65px)"
                  src={`${imageBase}/cli-verify-light.png`}
                  width={2002}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:h-[156.984px] md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              className={`flex min-h-[101px] flex-col justify-center border-b border-black/[0.06] px-6 md:min-h-0 md:p-10 ${
                index === 0 || index === 2
                  ? "border-r"
                  : index === 1
                    ? "md:border-r"
                    : ""
              }`}
              key={stat.caption}
            >
              <p
                className={`font-semibold ${
                  index === 3
                    ? "text-[20px] leading-[22px] tracking-[-0.5px] md:text-[30px] md:leading-[33px] md:tracking-[-0.75px]"
                    : "text-[24px] leading-[26.4px] tracking-[-0.6px] md:text-[44px] md:leading-[48.4px] md:tracking-[-1.1px]"
                } ${index === 0 ? "text-ts-green" : "text-ts-text"}`}
              >
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-[12px] leading-[16.8px] tracking-[-0.48px] text-ts-secondary md:text-[14px] md:leading-[19.6px] md:tracking-[-0.56px]">
                {stat.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
