"use client";

import { useState } from "react";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";


// Data array (you can keep it in the same file or import from another file)
const courseTopics = [
  {
    id: 1,
    title: "বেসিক টু অ্যাডভান্সড ডিজাইনের বিষয়ে (RCC Building)",
    details: `এই সেকশনে আপনি RCC বিল্ডিং ডিজাইনের বেসিক কনসেপ্ট থেকে শুরু করে অ্যাডভান্সড লোড ক্যালকুলেশন ও কোড অনুসরণ করে ডিজাইন শেখার সুযোগ পাবেন।`,
  },
  {
    id: 2,
    title: "BNBC 2020 এর অনুসরণ ও কোড ব্যবহার",
    details: `BNBC 2020 অনুসারে বিভিন্ন লোড (Dead Load, Live Load, Wind Load, Seismic Load) কিভাবে বিবেচনা করতে হয় তা হাতে কলমে শেখানো হবে।`,
  },
  {
    id: 3,
    title: "Complete Load Calculation (BNBC 2020)",
    details: `পূর্ণাঙ্গ লোড ক্যালকুলেশন, সেফটি ফ্যাক্টর, এবং অন্যান্য ডিজাইন প্যারামিটার নিয়ে বিস্তারিত আলোচনা করা হবে।`,
  },
  {
    id: 4,
    title: "বেসিক অ্যানালাইসিস (ETABS)",
    details: `ETABS সফটওয়্যার ব্যবহার করে বেসিক স্ট্রাকচারাল অ্যানালাইসিস কীভাবে করতে হয়, মডেলিং এবং রেজাল্ট ইন্টারপ্রেটেশন করা হবে।`,
  },
  {
    id: 5,
    title: "বিল্ডিং ফাউন্ডেশন ক্যালকুলেশন (ETABS & SAFE)",
    details: `সেফ এবং ETABS ব্যবহার করে বিভিন্ন প্রকার ফাউন্ডেশন ডিজাইন, পায়ার ক্যালকুলেশন, সাপোর্ট কন্ডিশন ইত্যাদি হাতে-কলমে শেখানো হবে।`,
  },
];


export default function CourseContentList() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  // Toggle function to expand/collapse an item
  const handleToggle = (id: number) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-[#e8f8f8] py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          এই কোর্সে যা যা থাকবে
        </h2>

        <div className="space-y-4">
          {courseTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white shadow-sm rounded-md p-4 cursor-pointer"
              onClick={() => handleToggle(topic.id)}
            >
              {/* Header: Check Icon + Title + Chevron */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-yellow-500 w-5 h-5" />
                  <span className="text-gray-800 font-medium">
                    {topic.title}
                  </span>
                </div>

                {/* Chevron Icon */}
                {openItem === topic.id ? (
                  <ChevronUp className="text-gray-600 w-5 h-5" />
                ) : (
                  <ChevronDown className="text-gray-600 w-5 h-5" />
                )}
              </div>

              {/* Collapsible Content */}
              {openItem === topic.id && (
                <div className="mt-3 text-gray-700 border-l-2 border-yellow-500 pl-3">
                  {topic.details}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

