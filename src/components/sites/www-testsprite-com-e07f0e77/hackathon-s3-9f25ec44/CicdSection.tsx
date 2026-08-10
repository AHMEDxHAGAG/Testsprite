import Image from "next/image";

const backgroundImage =
  "/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/images/hero-bg-light.png";

export function CicdSection() {
  return (
    <section className="md:px-32">
      <div className="testsprite-container">
        <header className="relative flex h-[107px] flex-col justify-center gap-4 border border-ts-border px-3 sm:h-48 sm:px-6">
          <p className="font-mono text-xs leading-[16.8px] tracking-[-0.48px] text-ts-green sm:text-base sm:leading-[22.4px] sm:tracking-[-0.64px]">
            {"// Go further"}
          </p>
          <h2 className="whitespace-pre-line text-[22px] font-semibold leading-[24.2px] tracking-[-0.55px] sm:text-[46px] sm:leading-[50.6px] sm:tracking-[-1.15px]">
            Wire the checker{"\n"}into <span className="text-ts-green">CI/CD.</span>
          </h2>
          <span className="testsprite-marker absolute right-3 top-6 hidden sm:block" />
        </header>

        <div className="grid grid-cols-1 border-x border-b border-ts-border md:h-[376px] md:grid-cols-[2fr_3fr]">
          <article className="flex h-[276px] flex-col p-6 sm:p-8 md:h-[376px]">
            <p className="w-fit border border-ts-border-strong bg-ts-green-alpha px-2 py-0.5 font-mono text-xs leading-[16.8px] tracking-[-0.48px] text-ts-green sm:text-sm sm:leading-[19.6px] sm:tracking-[-0.56px]">
              +5 Innovation points · optional
            </p>
            <h3 className="mt-4 text-xl font-normal leading-[22px] tracking-[-0.5px] sm:text-[29px] sm:leading-[31.9px] sm:tracking-[-0.725px]">
              The loop, on autopilot.
            </h3>
            <p className="mt-4 font-mono text-xs leading-[19px] tracking-[-0.48px] text-ts-secondary sm:text-base sm:leading-[26px] sm:tracking-[-0.64px]">
              Gate a GitHub Actions pipeline on TestSprite. Every push reruns
              your tests and fails the build if something breaks. One workflow
              file, one secret. The stickiest way to keep the checker working
              long after the hackathon.
            </p>
            <a
              href="https://docs.testsprite.com/cli/integrations/ci-cd"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-fit font-mono text-xs leading-[16.8px] tracking-[-0.48px] text-ts-green underline underline-offset-2 sm:text-base sm:leading-[22.4px] sm:tracking-[-0.64px]"
            >
              Read the CI guide →
            </a>
          </article>

          <div className="relative h-[357px] overflow-hidden border-t border-ts-border p-4 sm:px-8 sm:py-6 md:h-[376px] md:border-l md:border-t-0">
            <Image
              src={backgroundImage}
              alt=""
              fill
              sizes="(min-width: 1200px) 703px, 350px"
              className="object-cover"
            />
            <pre className="relative z-10 overflow-x-auto whitespace-pre-wrap break-words border border-ts-border-strong bg-ts-bg px-4 py-3 font-mono text-xs leading-[19px] tracking-[-0.48px] text-ts-text sm:whitespace-pre sm:text-base sm:leading-[26px] sm:tracking-[-0.64px]">
              <code>
                <span className="text-ts-green">
                  # .github/workflows/testsprite.yml
                </span>
                {"\n"}
                {"on: pull_request\n"}
                {"env:\n"}
                {"  TESTSPRITE_API_KEY: "}
                <span className="text-ts-green">
                  {"${{ secrets.TESTSPRITE_API_KEY }}"}
                </span>
                {"\n"}
                {"  PROJECT_ID: "}
                <span className="text-ts-green">proj_xxxxxxxx</span>
                {"\n"}
                {"steps:\n"}
                {"  - run: npm i -g @testsprite/testsprite-cli\n"}
                {'  - run: testsprite test run --all --project "$PROJECT_ID" \\\n'}
                {"           --wait --output json\n"}
                <span className="text-ts-green">
                  {"    # non-zero exit fails the build ↓\n"}
                  {"  # --all = backend tests; for frontend, pass a test-id"}
                </span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
