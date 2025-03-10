import { Course } from '@/lib/courses';
import React from 'react';
import { Card } from '../card';
import { Book, Clock, Settings } from 'lucide-react';

const CourseCard: React.FC<Course> = ({ title, duration, lessons, projects, details ,image}) => {
  return (
    <Card className="relative h-[320px] rounded-lg overflow-hidden shadow-lg">
               
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
    />


    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/75 to-transparent" />


    <div className="relative  z-20 flex flex-col items-center justify-end h-full text-center text-white px-4">
      <h3 className="text-lg font-semibold">{title}</h3>

      <div className="flex items-center justify-between gap-2">
  
  <div className="flex items-center   border-white ">
    <Clock className="text-red-500 " />
    <p className="text-md">{duration}</p>
  </div>

  <div className="flex items-center  border-l-4 border-white pl-1">
    <Book className="text-red-500 " />
    <p className="text-md">{lessons}</p>
  </div>

  <div className="flex items-center  border-l-4 border-white pl-1">
    <Settings className="text-red-500 " />
    <p className="text-md">{projects}</p>
  </div>
</div>



      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
        বিস্তারিত
      </button>
    </div>
  </Card>
  );
};

export default CourseCard;
