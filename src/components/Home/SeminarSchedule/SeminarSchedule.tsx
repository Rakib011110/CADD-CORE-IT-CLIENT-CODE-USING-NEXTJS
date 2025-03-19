"use client"; 

import LoadingSpinner from "@/components/UI/LoadingSpinner/LoadingSpinner";
import { TSeminar } from "@/lib/types/TSeminars";
import { useGetAllSeminarQuery } from "@/redux/api/seminarApi";
import Aos from "aos";
import React, { useEffect } from "react";

export default function SeminarSchedule() {
  const { data: seminars, isLoading } = useGetAllSeminarQuery({});

  useEffect(() => {
    Aos.init({ duration: 1000 }); 
  }, []); 

  return (
    <section data-aos="fade-up">
      <div className="bg-[#eafcfe] py-10">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-1">
          ফ্রি/পেইড সেমিনারের সময়সূচী
        </h2>
        <div className="flex justify-center mb-6">
          <span className="inline-block w-24 h-1 bg-red-500 rounded"></span>
        </div>

        {/* Conditionally render loading spinner or content */}
        {isLoading ? (
          <div className="flex justify-center items-center">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="max-w-6xl mx-auto px-4">
            <div className="overflow-x-auto bg-white rounded-md">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-red-500 text-white">
                    <th className="py-2 px-4">Topic</th>
                    <th className="py-2 px-4">Place</th>
                    <th className="py-2 px-4">Date</th>
                    <th className="py-2 px-4">Time</th>
                    <th className="py-2 px-4">Join</th>
                    <th className="py-2 px-4">Remaining Days</th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                  {seminars?.data?.map((seminar: TSeminar, index: any) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-[#fff1f1]" : "bg-white"
                      } hover:bg-red-50 transition-colors`}
                    >
                      <td className="py-2 px-4 border-b border-red-200">
                        {seminar.topic}
                      </td>
                      <td className="py-2 px-4 border-b border-red-200">
                        {seminar.place}
                      </td>
                      <td className="py-2 px-4 border-b border-red-200">
                        {seminar.date}
                      </td>
                      <td className="py-2 px-4 border-b border-red-200">
                        {seminar.time}
                      </td>
                      <td className="py-2 px-4 border-b border-red-200">
                        <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition">
                          Join
                        </button>
                      </td>
                      <td className="py-2 px-4 border-b border-red-200">
                        {seminar.remainingDays}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
