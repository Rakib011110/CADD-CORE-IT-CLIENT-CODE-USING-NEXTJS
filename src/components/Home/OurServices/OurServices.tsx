"use client"; // If using Next.js App Router for client-side rendering

type Service = {
  id: number;
  title: string;
  desc: string;
  image: string; // Link to your icon image
};

const servicesData: Service[] = [
  {
    id: 1,
    title: "লাইভটাইম সাপোর্ট",
    desc: "সার্বক্ষণিক সাপোর্ট ও সহযোগিতা, যাতে আপনার সব প্রশ্নের সমাধান পাওয়া যায়।",
    image: "https://caddcore.net/wp-content/uploads/2023/03/Icon-02.png",
  },
  {
    id: 2,
    title: "অনলাইন ডিজিটাল লাইব",
    desc: "ডিজিটাল লাইব্রেরি যেখানে কোর্স ম্যাটেরিয়াল, রিসোর্স, ইবুক ইত্যাদি রয়েছে।",
    image: "https://cdn-ilbhfhh.nitrocdn.com/GQAjASDcQJAOSFnCNbjHAwgJDnuIafbo/assets/images/optimized/rev-f913869/caddcore.net/wp-content/uploads/2023/03/Icon-06.png",
  },
  {
    id: 3,
    title: "জব প্লেসমেন্ট",
    desc: "প্রশিক্ষণ শেষে চাকরির সুযোগ বা ইন্টার্নশিপের সুপারিশ।",
    image: "https://cdn-ilbhfhh.nitrocdn.com/GQAjASDcQJAOSFnCNbjHAwgJDnuIafbo/assets/images/optimized/rev-f913869/caddcore.net/wp-content/uploads/2023/03/Icon-04.png",
  },
  {
    id: 4,
    title: "শ্রেণীকক্ষীয় সকল রিসোর্স",
    desc: "ভিডিও লেকচার, স্লাইড, নোট, এবং অনলাইন সাপোর্ট এক জায়গায়।",
    image: "https://cdn-ilbhfhh.nitrocdn.com/GQAjASDcQJAOSFnCNbjHAwgJDnuIafbo/assets/images/optimized/rev-f913869/caddcore.net/wp-content/uploads/2023/03/Icon-01.png",
  },
  {
    id: 5,
    title: "ডেস্কটপ ইনস্টলেশন / পিসি-ল্যাপটপ ট্রাবলশুট",
    desc: "যেকোনো প্রযুক্তিগত সহায়তা ও সেটআপ নির্দেশনা, দ্রুত এবং নির্ভুলভাবে।",
    image: "https://cdn-ilbhfhh.nitrocdn.com/GQAjASDcQJAOSFnCNbjHAwgJDnuIafbo/assets/images/optimized/rev-f913869/caddcore.net/wp-content/uploads/2023/03/Icon-04.png",
  },
  {
    id: 6,
    title: "সার্টিফিকেট (জাতীয় ও আন্তর্জাতিক)",
    desc: "আপনার সাফল্যকে স্বীকৃতি দিতে জাতীয় ও আন্তর্জাতিক সার্টিফিকেশন প্রদান।",
    image: "https://cdn-ilbhfhh.nitrocdn.com/GQAjASDcQJAOSFnCNbjHAwgJDnuIafbo/assets/images/optimized/rev-f913869/caddcore.net/wp-content/uploads/2023/03/Icon-03.png",
  },
];

export default function OurServices() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-8">
        আমাদের সেবা সমূহ
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="flex items-start gap-4 p-6 bg-white border border-gray-800  rounded-md shadow-sm"
          >
            {/* Service Image (Icon) */}
            <img
              src={service.image}
              alt={service.title}
              className="w-20 h-20 object-contain"
            />

            {/* Text Content */}
            <div>
              <h3 className="text-xl font-semibold text-red-500">
                {service.title}
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
