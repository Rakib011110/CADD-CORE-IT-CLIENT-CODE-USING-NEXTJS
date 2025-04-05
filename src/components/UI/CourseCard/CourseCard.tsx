import React from 'react';
import { Card } from '../card';
import { Book, Clock, Settings } from 'lucide-react';
import Link from 'next/link';
import { TCourse } from '@/lib/courses';



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



const CourseCard: React.FC<TCourse> = ({ title, duration, lessons, projects,  photoUrl ,_id , slug}) => {
  return (
    <Card className="relative h-[320px] rounded-lg overflow-hidden shadow-lg">
               
    <img
      src={photoUrl}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
    />

{/*  */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/75 to-transparent" />


    <div className="relative  z-20 flex flex-col items-center justify-end h-full text-center text-white px-4">
      <h3 className="text-lg font-semibold">{title}</h3>

      <div className="flex items-center justify-between gap-2">
  
  <div className="flex items-center   border-white ">
    <Clock className="text-red-500 " />
    <p className="text-md">{duration}</p>
  </div>

  <div className="flex items-center  border-l-4 border-white pl-1">
    <Book className="text-red-500 " />
    <p className="text-md">{lessons}</p>
  </div>

  <div className="flex items-center  border-l-4 border-white pl-1">
    <Settings className="text-red-500 " />
    <p className="text-md">{projects}</p>
  </div>
</div>



     <Link href={`/courses/${slug}`}>
     
     <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
        বিস্তারিত
      </button>
     </Link>
    </div>
  </Card>
  );
};

export default CourseCard;
