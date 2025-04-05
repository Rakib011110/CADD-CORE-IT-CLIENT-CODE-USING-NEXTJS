"use client"

import ClientReviews from "@/components/Home/ClientReviews/ClientReviews";
import OurCourses from "@/components/Home/OurCourses/OurCourses";
import OurServices from "@/components/Home/OurServices/OurServices";
import SeminarSchedule from "@/components/Home/SeminarSchedule/SeminarSchedule";
import StateSection from "@/components/Home/StatsSection/StatsSection";
import Banner from "@/components/pages/Banner/Banner";

export default function homeLayoutPage() {
 
  return (
    <div>
    <div  className="">
    <Banner/> 
    </div>
      <div>
<StateSection/>

      </div>

      <div>
        <SeminarSchedule/>
      </div>  

      <div>
<OurCourses/>

      </div> 

      <div>
        <OurServices/>
      </div> 

      <div>
        <ClientReviews/>
      </div>
    </div>
  );
}