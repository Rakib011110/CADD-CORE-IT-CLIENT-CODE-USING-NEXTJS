import { TCourse } from "@/lib/courses";


type software = {
  id: number;
  title: string;
  image: string; 
};

export default function SoftwareTaught ({ course }: { course: TCourse }) {



  

  const servicesData: software[] = [
    {
      id: 1,
      title: "",
      image: "https://caddcore.net/wp-content/uploads/2023/03/excel-01.png",
    },
    {
      id: 2,
      title: "",
      image: "https://caddcore.net/wp-content/uploads/2024/09/PlanSwift-01.png",
    },
    {
      id: 3,
      title: "",
      image: "https://caddcore.net/wp-content/uploads/2023/03/excel-01.png",
    },
    {
      id: 4,
      title: "",
      image: "https://caddcore.net/wp-content/uploads/2024/09/PlanSwift-01.png",
    },
   
  ];

  return (
    <div id="software-taught">
   
   <section className="max-w-6xl mx-auto px-4 py-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center ">
      যে সকল সফটওয়্যার শেখানো হবে
      </h2>
      <div className="flex justify-center mb-8">
        <span className="inline-block w-24 h-1 bg-red-500 rounded"></span>
      </div>
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="flex items-start gap-4 p-6 bg-white border border-gray-800  rounded-md shadow-sm"
          >
            {/* Service Image (Icon) */}
            <img
              src={service.image}
              alt={service.title}
              className=" object-contain"
            />

            
          </div>
        ))}
      </div>
    </section>


    </div>
  );
}