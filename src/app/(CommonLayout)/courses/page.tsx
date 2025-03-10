"use client";
import { useState } from "react";
import CoursesBanner from "@/components/pages/@courses/CourseBanner";
import CourseCard from "@/components/UI/CourseCard/CourseCard";
import { Category, courses } from "@/lib/courses";

// Extend the category type to include "All"
type CategoryWithAll = Category | "All";

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryWithAll>("All");

  // Our array of categories (including 'All')
  const categories: CategoryWithAll[] = ["All", "Civil", "Architectural", "Mechanical", "Electrical", "BIM"];

  // Filter logic
  const filteredCourses = selectedCategory === "All"
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div>
      <CoursesBanner />

      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-8 items-center justify-center text-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2  rounded-md text-sm font-medium transition-colors
                  ${selectedCategory === category
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-blue-200 hover:bg-blue-50"
                  }`}
              >
                {category === "All" ? "All Courses" : category}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
