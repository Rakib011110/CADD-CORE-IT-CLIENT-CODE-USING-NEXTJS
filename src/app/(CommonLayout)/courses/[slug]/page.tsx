"use client";
import BatchSchedule from "@/components/pages/CourseDetails/BatchSchedule/BatchSchedule";
import CourseContentList from "@/components/pages/CourseDetails/CourseContent/CourseContent";
import { CourseForWhom } from "@/components/pages/CourseDetails/CourseForWhom/CourseForWhom";
import DetailsBannar from "@/components/pages/CourseDetails/DetailsBannar/DetailsBannar";
import SoftwareTaught from "@/components/pages/CourseDetails/DetailsHeadNav/SoftwareTaught";
import { FreelancingGuide } from "@/components/pages/CourseDetails/FreelancingGuide/FreelancingGuide";
import MastercourseOverview from "@/components/pages/CourseDetails/MastercourseOverview/MastercourseOverview";
import SupportAndTraining from "@/components/pages/CourseDetails/SupportAndTraining/SupportAndTraining";
import LoadingSpinner from "@/components/UI/LoadingSpinner/LoadingSpinner";
import { useGetCourseBySlugQuery } from "@/redux/api/courseApi";

import { useGetTeamByIdQuery } from "@/redux/api/teamApi";
import { useParams, useRouter } from "next/navigation"; // ✅ Use next/navigation

export default function CourseDetails() { 

  const params = useParams();  
  console.log(params)
  const slug = params?.slug; 

  const { data: course, isError, isLoading } = useGetCourseBySlugQuery(slug, {
    skip: !slug, 
  });



  if (isLoading) return <div> 

<LoadingSpinner/>

  </div> 
  
  
  if (isError) return <p>Error fetching course details.</p>;

  return (
    <div>
      <DetailsBannar course={course?.data}/>
      <BatchSchedule course={course?.data} />
      <div  id="mastercourse-overview">
        <MastercourseOverview  course={course?.data}/>
      </div> 
      <div id="course-content">
        <CourseContentList  course={course?.data}/>
      </div>
      <SoftwareTaught  course={course?.data}/> 


      <div>
      <div>
      <FreelancingGuide />
      <CourseForWhom />
    </div> 


      </div>
    
    <div>
      <SupportAndTraining/>
    </div>
    </div>
  );
}
