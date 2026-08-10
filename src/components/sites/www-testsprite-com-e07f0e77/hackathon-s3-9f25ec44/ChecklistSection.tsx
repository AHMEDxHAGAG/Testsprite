import {
  FileText,
  GitFork,
  Layers3,
  Users,
  Video,
  Zap,
} from "lucide-react";

const checklistItems = [
  {
    title: "TestSprite CLI",
    status: "Required",
    description: "Install from GitHub · Node ≥ 20 · paid plan via promo code.",
    icon: Zap,
    hasInstallLink: true,
  },
  {
    title: "Public URL",
    status: "Required",
    description:
      "The CLI tests in the cloud, no localhost. Deploy early, keep it live the whole build.",
    icon: Users,
    hasInstallLink: false,
  },
  {
    title: "Public Repo",
    status: "Required",
    description:
      "Source in a public repo. Commit history is the proof the loop ran.",
    icon: FileText,
    hasInstallLink: false,
  },
  {
    title: "LOOP.md",
    status: "Required",
    description:
      "Agent-written, one line per iteration. No log = invalid submission.",
    icon: GitFork,
    hasInstallLink: false,
  },
  {
    title: "README",
    status: "Required",
    description: "App, live URL, and what the loop covered.",
    icon: Layers3,
    hasInstallLink: false,
  },
  {
    title: "Demo Video",
    status: "Optional",
    description: "Encouraged. Link it in Discord. Boosts ranking.",
    icon: Video,
    hasInstallLink: false,
  },
] as const;

export function ChecklistSection() {
  return (
    <section className="bg-[#f5faf2] md:px-32">
      <div className="testsprite-container border-x border-black/10">
        <header className="relative grid px-6 pt-14 pb-6 md:grid-cols-[7fr_3fr] md:gap-12 md:pt-24">
          <div>
            <p className="font-mono text-xs leading-[16.8px] text-[#4d8c58] sm:text-sm sm:leading-[19.6px] md:text-base md:leading-[22.4px]">
              {"// Prerequisites"}
            </p>
            <h2 className="mt-4 text-[22px] leading-[24.2px] font-semibold tracking-[-0.55px] text-[#030303] sm:text-[34px] sm:leading-[37.4px] sm:tracking-[-0.85px] md:text-[46px] md:leading-[50.6px] md:tracking-[-1.15px]">
              The Checklist.
            </h2>
          </div>
          <span
            aria-hidden="true"
            className="absolute top-[73px] right-6 hidden h-6 w-6 bg-[#4d8c58] md:block"
          />
        </header>

        <ul className="grid border-t border-l border-[#4d8c58] sm:grid-cols-2 md:grid-cols-3">
          {checklistItems.map((item) => {
            const Icon = item.icon;

            return (
              <li
                className="min-h-[176px] border-r border-b border-[#4d8c58] p-6 sm:min-h-[220px] sm:p-7 md:min-h-[260px] md:p-8"
                key={item.title}
              >
                <span
                  aria-hidden="true"
                  className={`testsprite-grid-bg flex h-9 w-9 items-center justify-center border md:h-[52px] md:w-[52px] ${item.status === "Required" ? "border-[#4d8c58] bg-[#54b365]/5 text-[#4d8c58]" : "border-black/10 bg-[#f5faf2] text-[#7c827d]"}`}
                >
                  <Icon className="h-[18px] w-[18px] stroke-[1.5] md:h-6 md:w-6" />
                </span>

                <div className="mt-3 flex flex-wrap items-center gap-2 md:mt-8">
                  <h3 className="text-xl leading-[22px] font-normal tracking-[-0.4px] text-[#030303] sm:text-2xl sm:leading-[26.4px] md:text-[29px] md:leading-[31.9px] md:tracking-[-0.58px]">
                    {item.title}
                  </h3>
                  <span
                    className={`border px-2 py-1 font-mono text-xs leading-[16.8px] ${item.status === "Required" ? "border-[#4d8c58] bg-[#54b365]/10 text-[#4d8c58]" : "border-black/10 text-[#030303]"}`}
                  >
                    {item.status}
                  </span>
                </div>

                <p className="mt-2 max-w-[330px] font-mono text-xs leading-[16.8px] text-[#7c827d] sm:text-sm sm:leading-[19.6px] md:mt-3 md:text-base md:leading-[22.4px]">
                  {item.hasInstallLink ? (
                    <>
                      <a
                        className="text-[#4d8c58] underline decoration-1 underline-offset-2 transition-opacity duration-150 ease-[cubic-bezier(.5,0,0,1)] hover:opacity-75"
                        href="https://github.com/TestSprite/testsprite-cli"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Install from GitHub
                      </a>{" "}
                      · Node ≥ 20 · paid plan via promo code.
                    </>
                  ) : (
                    item.description
                  )}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
