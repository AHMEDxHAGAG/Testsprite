import { ChecklistSection } from "@/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/ChecklistSection";
import { CicdSection } from "@/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/CicdSection";
import { FinalCtaSection } from "@/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/FinalCtaSection";
import { GridSpacer } from "@/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/GridSpacer";
import { HeroSection } from "@/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/HeroSection";
import { InstallSection } from "@/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/InstallSection";
import { JoinSection } from "@/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/JoinSection";
import { JudgingSection } from "@/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/JudgingSection";
import { LoopStepsSection } from "@/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/LoopStepsSection";
import { PastEventsSection } from "@/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/PastEventsSection";
import { PrizePoolSection } from "@/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/PrizePoolSection";
import { SiteFooter } from "@/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/SiteFooter";
import { SiteHeader } from "@/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/SiteHeader";
import { SubmissionSection } from "@/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/SubmissionSection";
import { TimelineSection } from "@/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/TimelineSection";

export default function HomePage() {
  return (
    <div className="testsprite-hackathon-page">
      <SiteHeader />
      <main>
        <HeroSection />
        <PrizePoolSection />
        <LoopStepsSection />
        <GridSpacer />
        <InstallSection />
        <SubmissionSection />
        <ChecklistSection />
        <JudgingSection />
        <CicdSection />
        <TimelineSection />
        <JoinSection />
        <PastEventsSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
