import AllCourses from "@/components/pages/Courses/Courses";



export const metadata = {
  title: "Courses - CADD CORE",
  description: "Explore a wide range of professional courses including Civil, Mechanical, Electrical, Architectural, and BIM at CADD CORE.",
  keywords: [
    "CADD CORE Courses",
    "Civil Courses",
    "Mechanical Courses",
    "Electrical Courses",
    "Architectural Courses",
    "BIM Courses",
    "Professional Training",
    "Technical Education"
  ],
  openGraph: {
    title: "Courses - CADD CORE",
    description: "Advance your career with industry-focused courses in Civil, Mechanical, Electrical, Architectural, and BIM disciplines at CADD CORE.",
    // url: "https://yourdomain.com/courses", 
    type: "website",
    // images: [
    //   {
    //     // url: "https://yourdomain.com/images/courses-banner.jpg", 
    //     width: 1200,
    //     height: 630,
    //     alt: "Courses at CADD CORE",
    //   },
    // ],
  },
 
  authors: [{ name: "CADD CORE" }],
  creator: "CADD CORE",
  publisher: "CADD CORE",
};



export default function Course() { 



  return (
    <div>
     <AllCourses/>
    </div>
  );
}