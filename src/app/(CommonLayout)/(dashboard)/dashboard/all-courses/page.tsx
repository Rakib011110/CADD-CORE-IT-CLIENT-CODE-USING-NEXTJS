"use client";

import { Button } from "@/components/UI/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/UI/card";
import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/UI/select";
import { Textarea } from "@/components/UI/textarea";
import { useState } from "react";

import { toast } from "sonner";

export default function CourseForm() {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    price: "",
    instructor: "",
    duration: "",
    category: "",
    thumbnail: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCourseData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: string) => {
    setCourseData((prev) => ({ ...prev, category: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Course Created Successfully!");
    console.log("Course Data:", courseData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-3xl shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center font-bold">Create a New Course</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            
            {/* Title */}
            <div>
              <Label htmlFor="title">Course Title</Label>
              <Input type="text" id="title" name="title" placeholder="Enter course title" required value={courseData.title} onChange={handleChange} />
            </div>

            {/* Description */}
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" placeholder="Write a brief description" required value={courseData.description} onChange={handleChange} />
            </div>

            {/* Price & Instructor */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price">Price ($)</Label>
                <Input type="number" id="price" name="price" placeholder="Enter price" required value={courseData.price} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="instructor">Instructor</Label>
                <Input type="text" id="instructor" name="instructor" placeholder="Enter instructor name" required value={courseData.instructor} onChange={handleChange} />
              </div>
            </div>

            {/* Duration & Category */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="duration">Duration (hrs)</Label>
                <Input type="number" id="duration" name="duration" placeholder="Enter duration" required value={courseData.duration} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select onValueChange={handleCategoryChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Programming">Programming</SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Thumbnail */}
            <div>
              <Label htmlFor="thumbnail">Thumbnail URL</Label>
              <Input type="text" id="thumbnail" name="thumbnail" placeholder="Enter image URL" value={courseData.thumbnail} onChange={handleChange} />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Create Course
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
