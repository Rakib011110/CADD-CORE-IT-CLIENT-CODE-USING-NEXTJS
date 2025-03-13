import { Card } from "@/components/UI/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/UI/carousel";
import Link from "next/link";

type Course = {
  id: number;
  title: string;
  desc: string;
  image: string;
};

const coursesData: Course[] = [
  {
    id: 1,
    title: "আরসিসি বিল্ডিং স্ট্রাকচারাল কোর্স",
    desc: "আর্কিটেকচার, ডিজাইন, এবং ডিটেইলিং সম্পর্কে বিস্তারিত",
    image: "https://caddcore.net/wp-content/uploads/2023/02/3d-printing.jpg",
  },
  {
    id: 2,
    title: "ঝুঁকিপূর্ণ বিল্ডিং মডেলিং ইউটিলিটি",
    desc: "মডেলিং এবং বিশ্লেষণের মাধ্যমে কাঠামোর সুরক্ষা নিশ্চিত",
    image: "https://caddcore.net/wp-content/uploads/2023/03/AdobeStock_5864164341_crop.webp",
  },
  {
    id: 3,
    title: "ঝুঁকিপূর্ণ মেকানিক্যাল ক্যাড মাস্টারকোর্স",
    desc: "উন্নত যন্ত্রাংশ ডিজাইন, সমাবেশ, এবং বিশ্লেষণ শিখুন",
    image: "https://caddcore.net/wp-content/uploads/2023/02/3d-printing.jpg",
  },
  {
    id: 4,
    title: "ইলেক্ট্রিক্যাল ক্যাড স্পেশালিস্ট",
    desc: "সার্কিট ডিজাইন, পাওয়ার সিস্টেম, এবং ওয়্যারিং লেআউট",
    image: "https://caddcore.net/wp-content/uploads/2023/02/3d-printing.jpg",
  },
  {
    id: 5,
    title: "প্লাম্বিং ও পাইপলাইন সলিউশন কোর্স",
    desc: "সিস্টেম ডিজাইন ও অপ্টিমাইজেশনে বিশেষজ্ঞ হন",
    image: "https://caddcore.net/wp-content/uploads/2023/02/3d-printing.jpg",
  },
];

export default function OurCourses() {
  return (
    <section data-aos="fade-up">

<div className="max-w-6xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        আমাদের জনপ্রিয় কোর্স সমূহ
      </h2>
      <div className="flex justify-center mb-6">
        <span className="inline-block w-24 h-1 bg-red-500 rounded"></span>
      </div>

      <Carousel opts={{ align: "center" }} className="w-full max-w-6xl mx-auto">
        <CarouselContent>
          {coursesData.map((course) => ( 

            
            <CarouselItem
              key={course.id}
              className="md:basis-1/2 lg:basis-1/3 p-4"
            >
              <Card className="relative h-[320px] rounded-lg overflow-hidden shadow-lg">
               
                <img
                  src={course.image}
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Full Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                {/* Centered Content */}
                <div className="relative z-20 flex flex-col items-center justify-end h-full text-center text-white px-4">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <p className="text-sm mt-2">{course.desc}</p>
                 <Link href={`/courses/${course.id}`}>
                 <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                    বিস্তারিত
                  </button>
                 </Link>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

      
        <CarouselPrevious className="bg-red-600 text-white" />
        <CarouselNext  className="bg-red-600 text-white"/>
      </Carousel>

  
      <div className="text-center mt-6">
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold">
          সকল কোর্স
        </button>
      </div>
    </div>
    </section>
  );
}
