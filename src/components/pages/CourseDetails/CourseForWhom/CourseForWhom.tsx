import Image from "next/image";

const courseAudiences = [
    { name: "গ্র্যাজুয়েট ", image: "https://caddcore.net/storage/2023/04/MicrosoftTeams-image-8-300x300.png" },
    { name: "শিক্ষার্থী ", image: "https://caddcore.net/storage/2023/03/Student-type-5-300x300.png" },
    { name: "চাকরিতে ইচ্ছুক", image: "https://caddcore.net/storage/2023/03/Student-type-3-300x300.png" },
    { name: "ফ্রিল্যান্সিং ইচ্ছুক", image: "https://caddcore.net/storage/2023/03/Student-type-2-300x300.png" },
    { name: "উদ্যোক্তা", image: "https://caddcore.net/storage/2023/03/Student-type-1-300x300.png" },
  ];

 export const CourseForWhom = () => {
    return (
      <div className="bg-[#fcfcfc] py-10 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          <span className="underline decoration-red-500">কোর্সটি যাদের জন্য</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {courseAudiences.map((audience) => (
            <div key={audience.name} className="text-center">
              <Image src={audience.image} alt={audience.name} className="w-36h-36 rounded-full  mx-auto" width={1000} height={1000} />
              <p className="text-gray-700 border-b-4 rounded-b-full p-3 border-red-400 mt-2 text-lg font-bold md:text-base ">{audience.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  