"use client";
import { CheckCircle } from "lucide-react";
import DetailsHeadNav from "../DetailsHeadNav/DetailsHeadNav";
import { TCourse } from "@/lib/courses";
import Link from "next/link";

export default function DetailsBannar({ course }: { course: TCourse }) {
   
  



  return (
    <section className="max-w-6xl mx-auto px-">
    {/* Use flex-col on mobile, row on md+ */}
    <div className="flex flex-col md:flex-row gap-7">
     
      <div className="md:w-1/4 order-2 md:order-1">
        <DetailsHeadNav />
      </div>

      <div className="md:w-3/4 order-1 md:order-2">
     
          <div
            className="relative bg-cover bg-center bg-no-repeat py-12 mb-6"
            style={{ backgroundImage: `url(https://caddcore.net/wp-content/uploads/2023/03/Bridge-Analysis-and-Design-2.png` }}
          >
       
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Banner Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4">
              {/* White Card */}
              <div className="backdrop-filter backdrop-blur-sm  rounded-md shadow-lg p-6 md:p-8">
                {/* SubTitle */}
                <h4 className="text-sm md:text-base text-red-500 font-semibold mb-2">
                  {/* {banner.subTitle} */} 

                  ইঞ্জিনিয়ারিং এক্সপার্টদের সাথে ক্যারিয়ার গড়ুন
                </h4>

                {/* Main Title */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-100 leading-snug mb-4">
                  {course?.title}
                </h2>

                {/* Description Paragraph */}
                <p className="text-gray-100 leading-relaxed mb-4">
                  {course?.description}
                </p>

                {/* Course Info Row */}
                <div className="flex flex-wrap items-center gap-5 text-gray-300 font-semibold mb-6">
                  {/* Duration */}
                  <div className="flex items-center gap-2 border-l-4 border-red-500 pl-3">
                    <CheckCircle className="text-red-500 w-5 h-5" />
                    <span>{course?.courseIncludes.duration}</span>
                  </div>

                  {/* Lessons */}
                  <div className="flex items-center gap-2 border-l-4 border-red-500 pl-3">
                    <CheckCircle className="text-red-500 w-5 h-5" />
                    <span>{course?.lessons}</span>
                  </div>

                  {/* Projects */}
                  <div className="flex items-center gap-2 border-l-4 border-red-500 pl-3">
                    <CheckCircle className="text-red-500 w-5 h-5" />
                    <span>{course?.projects}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md font-semibold">
                    ফ্রি ক্লাস দেখতে চাই
                  </button>
                 
                 <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe27ZcsU6VdsyYPMD4JO5VwW4d9CI3_HtTG8YRxyo43gyzGWA/viewform">
                 <button className="bg-white text-red-500 border border-red-500 hover:bg-red-50 px-5 py-2 rounded-md font-semibold">
                    এনরোল করুন
                  </button> 
                 </Link>

                  <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md font-semibold">
                 Course Fees  {course.courseFee}TK
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
  );
}
