'use client';

import Image from 'next/image';

const SupportAndTraining = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Section - Support */}
      <div className="border-r lg:pr-8">
        <h2 className="text-2xl font-bold text-black mb-3">
          ডেডিকেটেড <span className="text-black underline decoration-red-500">স্টুডেন্ট সাপোর্ট</span>
        </h2>
        <p className="font-semibold text-black mb-2">আপনার মাস্টারকোর্স জার্নি সফল হোক আমাদের প্রফেশনালদের সহায়তায়!</p>
        <p className="text-gray-700 mb-4">
        আমাদের মাস্টারকোর্সে শুধু ক্লাস নয়, আপনার সফলতার জন্য প্রয়োজনীয় সমস্ত কিছুই পাওয়া যাবে। ইন্ডাস্ট্রি স্পেশালিস্টদের দ্বারা তাৎক্ষণিক সহায়তা পাওয়ার সুযোগ পাবেন।
        হোয়াটস এপ, ফেসবুক বা ফোন কলের মাধ্যমে যেকোনো সময় প্রশ্ন করুন এবং আমাদের প্রফেশনাল সাপোর্ট ইঞ্জিনিয়াররা আপনাকে তাৎক্ষণিকভাবে সমাধান প্রদান করবেন। গুগল মিট, ফোন কল বা ব্যবহারিক নির্দেশনার মাধ্যমে আপনার শিক্ষার যাত্রা আরো সহজ হবে।
        </p>
        <Image src="https://caddcore.net/storage/2023/03/WhatsApp-Image-2024-08-29-at-11.45.03-AM-1536x1023.jpeg" alt="Support" width={500} height={300} className="rounded-lg" />
      </div>
      
      {/* Right Section - Training */}
      <div>
        <h2 className="text-2xl font-bold text-black mb-3">
          <span className="text-black underline decoration-red-500">অন-জব ট্রেইনিং</span>
        </h2>
        <p className="text-gray-700 mb-4">
        অন-জব ট্রেনিং হলো একটি শিক্ষামূলক প্রক্রিয়া যেখানে একজন ব্যক্তি একটি নির্দিষ্ট পেশায় বা কাজের ক্ষেত্রে প্রশিক্ষণ পায়, প্রকৃত কার্যক্ষেত্রে কাজ করার মাধ্যমে। এটি একটি ব্যবহারিক শিক্ষার পদ্ধতি, যেখানে শিক্ষার্থীরা তাদের শিক্ষাগত জ্ঞানকে বাস্তব পরিস্থিতিতে প্রয়োগ করার সুযোগ পায়। 


        <br /> <br />

        <span className='font-bold'>মূল কোর্সের ৭০% সম্পন্ন করার সাথে সাথে আপনি অনজব ট্রেনিংয়ের জন্য আবেদন করতে পারবেন। </span> এই ট্রেনিংয়ে আপনি একজন অভিজ্ঞ প্রকৌশলীর সরাসরি তত্ত্বাবধানে বাস্তব প্রকল্পগুলোর কাজ শুরু থেকে শেষ পর্যন্ত সম্পন্ন করার সুযোগ পাবেন।
        </p>
        <ul className="list-none font-semibold space-y-2">
          <li className="flex items-center"><span className="text-red-500 mr-2">✔</span> মোড: অনলাইন বা অফলাইন</li>
          <li className="flex items-center"><span className="text-red-500 mr-2">✔</span> অনলাইন: ফুলটাইম (৯টা -৫টা , ১ সপ্তাহ) অথবা পার্টটাইম (৬টা -১০টা , ১ মাস)</li>
          <li className="flex items-center"><span className="text-red-500 mr-2">✔</span> অফলাইন: ফুলটাইম (৯টা -৫টা ), নিজস্ব ল্যাপটপ আবশ্যক</li>
          <li className="flex items-center"><span className="text-red-500 mr-2">✔</span> মূল্যায়ন: ট্রেনিংয়ের আগে কাজ পর্যালোচনা</li>
          <li className="flex items-center"><span className="text-red-500 mr-2">✔</span> উপস্থিতি: নিয়মিত উপস্থিতি বাধ্যতামূলক</li>
          <li className="flex items-center"><span className="text-red-500 mr-2">✔</span> ফলাফল: সিভি আপডেট ও জব সেলে জমা</li>
          <li className="flex items-center"><span className="text-red-500 mr-2">✔</span> উদ্দেশ্য: বাস্তব কাজের প্রস্তুতি</li>
        </ul> 
        <p> <span className='font-bold'>মনে রাখবেন:</span> অন-জব ট্রেনিং একটি জবের মতো। অনিয়মিততা কাজের গতি বাধাগ্রস্ত করতে </p>
      </div>
    </div>
  );
};

export default SupportAndTraining;
