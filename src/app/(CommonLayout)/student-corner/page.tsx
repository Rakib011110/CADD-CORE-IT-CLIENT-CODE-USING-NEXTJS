import StudentCornerBannar from "@/components/pages/StudentCornar/StudentCornerBanner/StudentCorner";
import CertificateVerification from "@/components/pages/StudentCornar/CertificateVerification/CertificateVerification";
import PopularCourses from "@/components/pages/StudentCornar/PopularCourses/PopularCourses";
import SupportForms from "@/components/pages/StudentCornar/SupportForms/SupportForms";

export default function StudentCorner() {
  return (
    <div>
    <StudentCornerBannar/>

    <div>
      <CertificateVerification/>
    </div>
    <div>
      <SupportForms/>
    </div> 

    <div>
      <PopularCourses/>
    </div>
    </div>
  );
}