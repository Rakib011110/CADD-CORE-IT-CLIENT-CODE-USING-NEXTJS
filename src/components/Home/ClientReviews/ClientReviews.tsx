"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/UI/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/UI/carousel";

export default function ComponentName() {
  // Fake testimonial data
  const testimonials = [
    {
      name: "Meeraj Ebrahim",
      roles: ["Trainee", "Graphic Design Mastercourse"],
      testimonial:
        "আলহামদুলিল্লাহ্ Caddcore training institute এর Graphic Design Mastercourse টি খুব ভালো ছিল। আমি অনেক কিছু শিখেছি।",
    },
    {
      name: "Mahmodul Hasan Sifat",
      roles: [
        "Mastercourse Student",
        "Professional Graphics & Video Editor",
      ],
      testimonial:
        "আলহামদুলিল্লাহ Caddcore training institute এর professional graphics design mastercourse টি আমাকে অনেক কিছু শিখিয়েছে।",
    },
    {
      name: "নয়ম পাঠানজুলা",
      roles: ["Mastercourse Student", "RCC Building Structural Analysis"],
      testimonial:
        "It is a great initiative of giving a hand so that engineers can develop their skills in a proficient way. In BANGLADESH, engineers are falling behind due to lack of practical knowledge as well as a gap between software knowledge & theoretical knowledge. CADD Core is the bridge between these gaps. I wish all of them best.",
    },
    // Add more if you want more carousel items
  ];

  return (
    <section className="py-10 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        কেন আমরা শিক্ষার্থীদের কাছে সেরা
      </h2>

      {/* Carousel Container */}
      <Carousel className="w-full max-w-6xl mx-auto">
        <CarouselContent className="-ml-1">
          {testimonials.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-2">
                <Card className="h-full rounded-md shadow-md">
                  <CardContent className="p-6">
                    {/* Name & Roles */}
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      {item.roles.map((role, idx) => (
                        <p
                          key={idx}
                          className={`text-sm ${
                            idx === 0
                              ? "text-red-500 font-medium"
                              : "text-gray-600"
                          }`}
                        >
                          {role}
                        </p>
                      ))}
                    </div>
                    {/* Testimonial Text */}
                    <p className="text-gray-700 leading-relaxed">
                      {item.testimonial}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 transition">
          সবগুলো সাক্ষ্য দেখুন এখানেই
        </button>
      </div>
    </section>
  );
}
