
export default function MastercourseOverview() {
// Sample data array
const mastercourseOverviewData = [
  {
    id: 1,
    heading: "মাস্টারকোর্স ওভারভিউ",
    paragraphs: [
      `যেকোনো বিল্ডিং নির্মাণ করার পূর্বে পুরো একটি স্ট্রাকচারাল অ্যানালাইসিস ও ডিজাইন এর প্রয়োজন হয়। হাতে কলমে বিট্রস এবং রিভিট সহ অন্যান্য সফটওয়্যারের সাহায্যে আপনি শেখার সুযোগ পাবেন। এতে থাকছে রিয়েল লাইফ প্রজেক্ট এবং ইন্ডাস্ট্রি স্ট্যান্ডার্ড সিলেবাস।`,
      `এই মাস্টারকোর্সে ETABS, SAFE, Excel, AutoCAD ইত্যাদি সফটওয়্যার ব্যবহার করে কাঠামোগত বিশ্লেষণ, ডিজাইন, এবং ডিটেইলিং শেখানো হবে। পাশাপাশি থাকবে সাইসমিক লোড, উইন্ড লোড, বিভিন্ন স্ট্যান্ডার্ড কোডের ব্যবহার, বিল্ডিং ইন্সপেকশন পদ্ধতি এবং সাইট ভিজিটের অভিজ্ঞতা।`
    ],
    videoUrl: "https://youtu.be/XiC4hIKsjIY"
  },
  
];


  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {mastercourseOverviewData.map((item) => (
          <div
            key={item.id}
            id={`overview-section-${item.id}`} // Optional unique ID
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            {/* Left Column: Heading + Paragraphs */}
            <div>
              {/* Heading with Red Underline */}
              <h2 className="text-3xl font-bold text-gray-800 mb-4 relative inline-block">
                {item.heading}
                <span className="absolute -bottom-1 left-0 w-32 h-1 bg-red-500"></span>
              </h2>

              {/* Paragraphs */}
              {item.paragraphs.map((para, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
            </div>

            {/* Right Column: Embedded Video */}
            <div className="w-full aspect-video rounded-md overflow-hidden ">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/XiC4hIKsjIY?si=sjXvKzuu4oKC3rb3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

