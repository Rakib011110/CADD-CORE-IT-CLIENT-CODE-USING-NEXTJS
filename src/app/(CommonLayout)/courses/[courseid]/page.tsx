import BatchSchedule from "@/components/pages/CourseDetails/BatchSchedule/BatchSchedule";
import CourseContentList from "@/components/pages/CourseDetails/CourseContent/CourseContent";
import CourseContent from "@/components/pages/CourseDetails/CourseContent/CourseContent";
import DetailsBannar from "@/components/pages/CourseDetails/DetailsBannar/DetailsBannar";
import SoftwareTaught from "@/components/pages/CourseDetails/DetailsHeadNav/SoftwareTaught";

import MastercourseOverview from "@/components/pages/CourseDetails/MastercourseOverview/MastercourseOverview";

export default function CourseDetails() {
  return (
    <div>
     
<div>
<DetailsBannar/>

</div>


<div className="">
  <BatchSchedule/>
</div>
<div id="mastercourse-overview" className="">
  <MastercourseOverview/>
</div>


<div id="course-content" className="">
<CourseContentList/>
</div>

<div className="">

  <SoftwareTaught/>
</div>


    </div>
  );
}