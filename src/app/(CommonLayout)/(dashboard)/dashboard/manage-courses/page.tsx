"use client";

import UpdateCourse from "@/components/pages/Courses/UpdateCourses";
import { Button } from "@/components/UI/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/UI/table";
import { TCourse } from "@/lib/types/TCourses";
import { useDeleteCourseMutation, useGetAllCourseQuery, useUpdateCourseMutation } from "@/redux/api/courseApi";
import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export default function ManageCourses() {
  const { data: courses, isLoading } = useGetAllCourseQuery({});
  const [deleteEvent] = useDeleteCourseMutation();
  const [updateCourses] =  useUpdateCourseMutation();
console.log(updateCourses)
const [selectedCourses, setSelectedCourses] = useState(null);

const [formData, setFormData] = useState<TCourse>({
    title: "",
    slug: "",
    categories: "",
    duration: "",
    lessons: "",
    photoUrl: "",
    projects: "",
    description: "",
    courseFee: "",
    schedule: {
      startingDate: "",
      mode: "",
      days: "",
      time: ""
    },
    overview: {
      overviewDescription: "",
      videoUrl: ""
    },
    courseIncludes: {
      duration: "",
      weeklyLiveClasses: "",
      weeklyClassHours: ""
    },
    topicsCovered: [{ topicTitle: "", topicDescription: "" }],
    softwaresTaught: [{ softwareTitle: "", photoUrl: "" }],
    expertPanel: {
      advisors: [{ name: "", title: "", photoUrl: "" }],
      teachers: [{ name: "", role: "", photoUrl: "" }]
    },
    learningProject: [{ title: "", description: "", photoUrl: "" }],
    freeTrainingSessions: [{ title: "", videoUrl: "" }],
    faqs: [{ question: "", answer: "" }]
  });

const handleEdit = (course: any) => {
    setSelectedCourses(course._id);
    setFormData({
      title: course.title,
      slug: course.slug,
      categories: course.categories,
      duration: course.duration,
      lessons: course.lessons,
      photoUrl: course.photoUrl,
      projects: course.projects,
      description: course.description,
      courseFee: course.courseFee,
      schedule: {
        startingDate: course.schedule.startingDate,
        mode: course.schedule.mode,
        days: course.schedule.days,
        time: course.schedule.time
      },
      overview: {
        overviewDescription: course.overview.overviewDescription,
        videoUrl: course.overview.videoUrl
      },
      courseIncludes: {
        duration: course.courseIncludes.duration,
        weeklyLiveClasses: course.courseIncludes.weeklyLiveClasses,
        weeklyClassHours: course.courseIncludes.weeklyClassHours
      },
      topicsCovered: [{ topicTitle: "", topicDescription: "" }],
      softwaresTaught: [{ softwareTitle: "", photoUrl: "" }],
      expertPanel: {
        advisors: [{ name: "", title: "", photoUrl: "" }],
        teachers: [{ name: "", role: "", photoUrl: "" }]
      },
      learningProject: [{ title: "", description: "", photoUrl: "" }],
      freeTrainingSessions: [{ title: "", videoUrl: "" }],
      faqs: [{ question: "", answer: "" }]
    });
  };
  const handleUpdate = async () => {

    try {
      await updateCourses({ id: selectedCourses, courseData: formData }).unwrap();
      toast.success("Course updated successfully!");
    } catch (error) {
      toast.error("Failed to update course!");
    }
    setSelectedCourses(null);


  }




  const handleDelete = async (id: string) => {
    try {
      await deleteEvent(id).unwrap();
      toast.success("Event deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete event!");
    }
  };



  if (isLoading) {
    return <div className="text-center py-10 text-lg font-semibold">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Courses</h1>
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="p-4">Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Fee</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody >
            {courses?.data?.map((course: any) => (
              <TableRow key={course._id} className="border-t">
                <TableCell className="p-4">
                  <Image
                    src={course?.photoUrl || "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"}
                    alt={course.title}
                    width={50}
                    height={50}
                    className="rounded-md object-cover"
                  />
                </TableCell>
                <TableCell>{course.title}</TableCell>
                <TableCell>{course.courseFee}</TableCell>
                <TableCell>{course.categories}</TableCell>
                <TableCell className="text-center flex gap-2 justify-center">
                  <Button  onClick={()=>handleEdit(course)} variant="ghost" className="text-blue-500 hover:bg-blue-100">
                    <Pencil size={18} />
                  </Button>
                  <Button    onClick={() => handleDelete(course._id || course.id)} variant="ghost" className="text-red-500 hover:bg-red-100">
                    <Trash2 size={18} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>  


      {selectedCourses && (
            <UpdateCourse  formData={formData} setFormData={setFormData}  setSelectedCourses={setSelectedCourses} handleUpdate={handleUpdate} />
            )}  
           

    </div>
  );
}
