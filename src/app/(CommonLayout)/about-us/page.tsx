import AboutStatsSection from "@/components/pages/About/AboutStatsSection/AboutStatsSection";
import AboutUsBanner from "@/components/pages/About/AboutUsBanner/AboutUsBanner";
import AboutCoreValues from "@/components/pages/About/AboutCoreValues/AboutCoreValues";
import ReviewsAboutUs from "@/components/pages/About/ReviewsAboutUs/ReviewsAboutUs";
import EventsandEngagements from "@/components/pages/About/EventsandEngagements/EventsandEngagements";
import CADDTeamSection from "@/components/pages/About/CADDTeamSection/CADDTeamSection";
import ClientsandPartners from "@/components/pages/About/ClientsandPartners/ClientsandPartners";
import OurLocations from "@/components/pages/About/OurLocations/OurLocations";

export default function AboutUsPage() {
  return (
    <div>
      <AboutUsBanner></AboutUsBanner>

      <div>

        <AboutStatsSection/>
      </div>
      <div>
        <AboutCoreValues/>
      </div>
      <div>
        <ReviewsAboutUs/>
      </div>
      <div>
        <EventsandEngagements/>
      </div> 

      <CADDTeamSection/> 
      <div>
        <ClientsandPartners/>
      </div> 

      <div>
        <OurLocations/>
      </div>
    </div>
  );
}