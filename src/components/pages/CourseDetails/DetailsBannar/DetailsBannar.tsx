"use client";
import { CheckCircle } from "lucide-react";
import DetailsHeadNav from "../DetailsHeadNav/DetailsHeadNav";

export default function DetailsBannar() {
    const bannerData = [
        {
          id: 1,
          subTitle: "ইঞ্জিনিয়ারিং এক্সপার্টদের সাথে ক্যারিয়ার গড়ুন",
          title:
            "আরসিসি বিল্ডিং স্ট্রাকচারাল অ্যানালাইসিস, ডিজাইন অ্যান্ড ডিটেইলিং মাস্টারকোর্স",
          description:
            "৬ মাসব্যাপী এই কোর্সে আপনি ETABS & SAFE ব্যবহার করে বিল্ডিং স্ট্রাকচারের বিশ্লেষণ ও ডিজাইন শিখবেন। এখানে BNBC 2020 অনুযায়ী Lateral Loads, Wind Loads, সাইসমিক লোড সহ সকল গুরুত্বপূর্ণ বাস্তব প্রজেক্ট কিভাবে প্রয়োগ করা যায় তা হাতে-কলমে দেখানো হবে।",
          duration: "৬ মাস",
          lessons: "৫০ টি লেসন",
          projects: "১৫ টি প্রজেক্ট",
          bgImage:
            "https://caddcore.net/wp-content/uploads/2023/03/Bridge-Analysis-and-Design-2.png",
        },
      
      ];
  return (
    <section className="max-w-6xl mx-auto px-">
    {/* Use flex-col on mobile, row on md+ */}
    <div className="flex flex-col md:flex-row gap-7">
     
      <div className="md:w-1/4 order-2 md:order-1">
        <DetailsHeadNav />
      </div>

      <div className="md:w-3/4 order-1 md:order-2">
        {bannerData.map((banner) => (
          <div
            key={banner.id}
            className="relative bg-cover bg-center bg-no-repeat py-12 mb-6"
            style={{ backgroundImage: `url(${banner.bgImage})` }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Banner Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4">
              {/* White Card */}
              <div className="backdrop-filter backdrop-blur-sm  rounded-md shadow-lg p-6 md:p-8">
                {/* SubTitle */}
                <h4 className="text-sm md:text-base text-red-500 font-semibold mb-2">
                  {banner.subTitle}
                </h4>

                {/* Main Title */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-100 leading-snug mb-4">
                  {banner.title}
                </h2>

                {/* Description Paragraph */}
                <p className="text-gray-100 leading-relaxed mb-4">
                  {banner.description}
                </p>

                {/* Course Info Row */}
                <div className="flex flex-wrap items-center gap-5 text-gray-300 font-semibold mb-6">
                  {/* Duration */}
                  <div className="flex items-center gap-2 border-l-4 border-red-500 pl-3">
                    <CheckCircle className="text-red-500 w-5 h-5" />
                    <span>{banner.duration}</span>
                  </div>

                  {/* Lessons */}
                  <div className="flex items-center gap-2 border-l-4 border-red-500 pl-3">
                    <CheckCircle className="text-red-500 w-5 h-5" />
                    <span>{banner.lessons}</span>
                  </div>

                  {/* Projects */}
                  <div className="flex items-center gap-2 border-l-4 border-red-500 pl-3">
                    <CheckCircle className="text-red-500 w-5 h-5" />
                    <span>{banner.projects}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md font-semibold">
                    ফ্রি ক্লাস দেখতে চাই
                  </button>
                  <button className="bg-white text-red-500 border border-red-500 hover:bg-red-50 px-5 py-2 rounded-md font-semibold">
                    এনরোল করুন
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}
