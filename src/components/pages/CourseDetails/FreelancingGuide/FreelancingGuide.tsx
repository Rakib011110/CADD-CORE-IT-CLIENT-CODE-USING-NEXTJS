import Image from "next/image";

export const FreelancingGuide = () => {
    const freelancingPlatforms = [
        { name: "Sketchfab", logo: "https://caddcore.net/storage/2023/03/sketchfab-01.png" },
        { name: "Guru", logo: "https://caddcore.net/storage/2023/03/guru-01.png" },
        { name: "Freelancer", logo: "https://caddcore.net/storage/2023/03/freelancer-01.png" },
        { name: "Fiverr", logo: "https://caddcore.net/storage/2023/03/fiverr-01.png" },
        { name: "Upwork", logo: "https://caddcore.net/storage/2023/03/Upwork-01.png" },
        { name: "PeoplePerHour", logo: "https://caddcore.net/storage/2023/03/PeoplePerHour-01.png" },
      ];
    return (
      <div className="bg-[#E8F8F8] mt-10 py-3 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          <span className="underline decoration-red-500 ">ফ্রিল্যান্সিং গাইড</span>
        </h2>
        <div className="grid grid-cols-2  md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {freelancingPlatforms.map((platform) => (
            <div key={platform.name} className="bg-white  shadow rounded-md border-2 border-black p-5 flex items-center justify-center">
              <Image src={platform.logo} alt={platform.name} className="h-28 w-full object-cover"  width={1000} height={1000}/>
            </div>
          ))}
        </div>
      </div>
    );
  };
  