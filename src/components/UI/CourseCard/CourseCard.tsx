import { Course } from '@/lib/courses';
import React from 'react';

const CourseCard: React.FC<Course> = ({ title, duration, lessons, projects, details }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">{title}</h3>
      
      <div className="space-y-2 mb-4">
        <p className="text-sm text-gray-600 flex justify-between">
          <span>সময়:</span>
          <span className="font-medium">{duration}</span>
        </p>
        <p className="text-sm text-gray-600 flex justify-between">
          <span>লেসন:</span>
          <span className="font-medium">{lessons}</span>
        </p>
        {projects && (
          <p className="text-sm text-gray-600 flex justify-between">
            <span>প্রজেক্ট:</span>
            <span className="font-medium">{projects}</span>
          </p>
        )}
      </div>

      {details && (
        <button className="w-full py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors">
          বিস্তারিত
        </button>
      )}
    </div>
  );
};

export default CourseCard;
