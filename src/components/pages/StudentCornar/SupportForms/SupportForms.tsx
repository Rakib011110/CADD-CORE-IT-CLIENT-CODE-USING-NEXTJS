export default function SupportForms() {
    return (
      <div className="flex flex-col items-center justify-center px-4 py-10">
        {/* Forms Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
          {/* Service Request Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#0F1840]">
              সার্ভিস রিকোয়েস্ট ফর্ম
            </h2>
            <p className="text-gray-600 mt-2">
              কোর্স সম্পর্কিত যেকোনো সাপোর্ট এর জন্য নিচের ফরমটি ফিল আপ করুন
            </p>
            <button className="bg-red-500 text-white px-5 py-2 mt-4 rounded-md">
              ফর্ম পূরণ করুন
            </button>
          </div>
  
          {/* Student Complaint Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#0F1840]">
              স্টুডেন্ট কমপ্লেইন ফর্ম
            </h2>
            <p className="text-gray-600 mt-2">
              যেকোনো অভিযোগ জানাতে নিচের ফরমটি ফিল আপ করুন
            </p>
            <button className="bg-red-500 text-white px-5 py-2 mt-4 rounded-md">
              ফর্ম পূরণ করুন
            </button>
          </div>
        </div>
  
        {/* Video Section */}
        <div className="mt-10">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/O9L-fCFBKr4?si=Cl9wzm7GF2Nyj8xQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    );
  }
  