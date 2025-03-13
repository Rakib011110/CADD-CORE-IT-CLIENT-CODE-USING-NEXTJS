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
<div className="">
  <MastercourseOverview/>
</div>


<div className="">
<CourseContentList/>
</div>
<div className="h-24 w-full border-4 text-amber-50 bg-blue-500">
<CourseContent/>
</div>
<div className="h-24 w-full border-4 text-amber-50 bg-red-500">

  <SoftwareTaught/>
</div>


    </div>
  );
}