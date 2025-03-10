import StudentCornerBannar from "@/components/pages/StudentCorner/StudentCorner";
import CertificateVerification from "@/components/StudentCornar/CertificateVerification/CertificateVerification";
import PopularCourses from "@/components/StudentCornar/PopularCourses/PopularCourses";
import SupportForms from "@/components/StudentCornar/SupportForms/SupportForms";

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