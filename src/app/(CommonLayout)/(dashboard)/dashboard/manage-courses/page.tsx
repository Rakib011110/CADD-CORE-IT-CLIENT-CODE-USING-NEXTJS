"use client";

import { Button } from "@/components/UI/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/UI/table";
import { useDeleteCourseMutation, useGetAllCourseQuery } from "@/redux/api/courseApi";
import { useDeleteEventMutation } from "@/redux/api/eventApi";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function ManageCourses() {
  const { data: courses, isLoading } = useGetAllCourseQuery({});
  const [deleteEvent] = useDeleteCourseMutation();



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
                  {/* <Image
                    src={course?.photoUrl || "/placeholder.png"}
                    alt={course.title}
                    width={50}
                    height={50}
                    className="rounded-md object-cover"
                  /> */}
                </TableCell>
                <TableCell>{course.title}</TableCell>
                <TableCell>{course.courseFee}</TableCell>
                <TableCell>{course.categories}</TableCell>
                <TableCell className="text-center flex gap-2 justify-center">
                  <Button variant="ghost" className="text-blue-500 hover:bg-blue-100">
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
    </div>
  );
}
