import { Card } from "@/components/UI/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/UI/carousel";
import { TCourse } from "@/lib/courses";
import { useGetAllCourseQuery } from "@/redux/api/courseApi";
import Link from "next/link";




export default function OurCourses() {
const { data: courses, isLoading } = useGetAllCourseQuery({});

if (isLoading) {
    return <div className="text-center py-10 text-lg font-semibold">Loading...</div>;  

}
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
          {courses?.data?.map((course:TCourse) => ( 

            
            <CarouselItem
              key={course._id}
              className="md:basis-1/2 lg:basis-1/3 p-4"
            >
              <Card className="relative h-[320px] rounded-lg overflow-hidden shadow-lg">
               
                <img
                  src={course.photoUrl}
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Full Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                {/* Centered Content */}
                <div className="relative z-20 flex flex-col items-center justify-end h-full text-center text-white px-4">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                 <Link href={`/courses/${course.slug}`}>
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
