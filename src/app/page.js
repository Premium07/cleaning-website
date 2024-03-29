import Hero from "../components/hero/page";
import Works from "../components/works/page";
import ProjectsDet from "../components/projects/page";
import Areas from "../components/areas/page";
import StatsBar from "../components/statsbar/page";
import TeamPage from "../components/team/page";
import Pricing from "@/components/pricing/page";
import ReviewPage from "@/components/reviewpage/page";
import ContactFormPage from "@/components/contactformpage/page";
import NewsSection from "@/components/newssection/page";
import NewsletterSection from "@/components/newslettersection/page";

export default function Home() {
  return (
    <div className="px-12 mt-4 flex flex-col items-center justify-center gap-8 tablet:px-4 mobile:px-2 mobile:mb-2 mobile:gap-4">
      <Hero />
      <Works />
      <ProjectsDet />
      <Areas />
      <StatsBar />
      <TeamPage />
      <Pricing />
      <ReviewPage />
      <ContactFormPage />
      <NewsSection />
      <NewsletterSection />
    </div>
  );
}
