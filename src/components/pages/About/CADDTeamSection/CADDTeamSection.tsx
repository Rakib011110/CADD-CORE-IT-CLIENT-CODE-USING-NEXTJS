// components/CADDTeamSection.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CADDTeamSection = () => {
  
  
  const ctaData = [
    {
      title: "Meet Our Team",
      description:
        "Discover the experts behind CADD CORE-8A innovation and their groundbreaking work in antenna technology",
      buttonText: "View Profiles →",
      bgColor: "bg-gray-900",
      textColor: "text-white",
      buttonColor: "bg-white text-gray-900",
    },
    {
      title: "Be Part of Our Team",
      description:
        "Join pioneers in radio frequency technology and contribute to next-generation antenna systems",
      buttonText: "Career Opportunities →",
      bgColor: "bg-blue-600",
      textColor: "text-white",
      buttonColor: "bg-white text-blue-600",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Main Heading */}
      <h1 className="text-3xl uppercase font-bold text-center mb-3">CADD CORE Team</h1>

<div className="max-w-3xl mb-5 mx-auto text-sm" >
    <p>CADD CORE-এর নেতৃত্বে আছেন প্রতিভাবান এবং দক্ষ একটি উদ্যমী টিম, যারা প্রকৌশল ও প্রযুক্তি খাতে বাস্তব অভিজ্ঞতা এবং বিশেষজ্ঞ দক্ষতা অর্জন করেছেন। আমাদের টিমের প্রতিটি সদস্য উদ্ভাবনী প্রশিক্ষণ পদ্ধতি এবং হাতে-কলমে শেখানোর মাধ্যমে শিক্ষার্থীদের সাফল্য অর্জনে সহায়ক ভূমিকা পালন করছেন।</p>
</div>
      {/* Technical Specifications Section */}
      <div className="mb-5">
        <div className="max-w-2xl mx-auto">
          <Image
            width={500}
            height={500}
            className="w-full h-auto"
            src="https://caddcore.net/wp-content/uploads/2024/11/328939820_5704020059708467_6702706886993250094_n.jpg"
            alt="cadd-core-team"
          />
        </div>
      </div>

<div className="max-w-3xl  mx-auto mb-5 text-sm">
    <p>আমরা বিশ্বাস করি, প্রতিটি শিক্ষার্থীর মধ্যে অসীম সম্ভাবনা রয়েছে, আর সেই সম্ভাবনাকে কাজে লাগাতে আমাদের টিম নিবেদিতভাবে কাজ করে যাচ্ছে। দেশীয় এবং আন্তর্জাতিক প্রকৌশল খাতে অভিজ্ঞ তরুণ পেশাজীবীরা আমাদের সাথে আছেন, যারা আপনার ক্যারিয়ারকে নেক্সট লেভেলে নিয়ে যেতে প্রস্তুত, আপনি প্রস্তুত তো?</p>
</div>

      {/* Team CTAs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-sm text-center mx-auto">
        {/* Meet Our Team Card */}
        <div className="">
          <Button className="text-md md:text-lg font-semibold mb-3 bg-red-500">Meet Our Team</Button>
       
       
        </div>

        {/* Be Part of Our Team Card */}
        <div className="">
          <Button className="text-md md:text-lg font-semibold mb-3  bg-red-500">Be Part of Our Team</Button>
         
      
        </div>
      </div>
    </div>
  );
};

export default CADDTeamSection;
