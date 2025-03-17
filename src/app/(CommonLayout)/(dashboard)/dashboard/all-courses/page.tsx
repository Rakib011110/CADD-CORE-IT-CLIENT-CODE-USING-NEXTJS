"use client";

import { useState } from "react";
import { Button } from "@/components/UI/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/UI/card";
import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/UI/select";
import { Textarea } from "@/components/UI/textarea";
import { toast } from "sonner";

export default function CourseForm() {
  const [courseData, setCourseData] = useState({
    title: "",
    duration: "",
    lessons: "",
    photoUrl: "",
    projects: "",
    description: "",
    schedule: {
      startingDate: "",
      mode: "Online",
      days: "",
      time: ""
    },
    overview: {
      totalClasses: "",
      classDuration: "",
      interactiveSessions: false,
      assignments: false,
      digitalLabAccess: false
    },
    courseIncludes: {
      duration: "",
      weeklyLiveClasses: "",
      weeklyClassHours: ""
    },
    topicsCovered: [
      { topicTitle: "", topicDescription: "" }
    ],
    softwaresTaught: [
      { softwareTitle: "", photoUrl: "" }
    ],
    expertPanel: {
      advisors: [
        { name: "", role: "", company: "", photoUrl: "" }
      ],
      teachers: [
        { name: "", role: "", photoUrl: "" }
      ]
    },
    courseFee: "",
    faqs: [
      { question: "", answer: "" }
    ]
  });

  // Top-level fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    if (!name.includes(".")) {
      setCourseData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  // For nested objects (schedule, overview, courseIncludes)
  const handleNestedChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    const keys = name.split(".");
    if (keys.length === 2) {
      const [parent, child] = keys;
      setCourseData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === "checkbox" ? checked : value,
        },
      }));
    }
  };

  // For Topics Covered (assuming editing the first topic for simplicity)
  const handleTopicChange = (index: number, field: string, value: string) => {
    setCourseData((prev) => {
      const topics = [...prev.topicsCovered];
      topics[index] = { ...topics[index], [field]: value };
      return { ...prev, topicsCovered: topics };
    });
  };

  // For Softwares Taught (first item)
  const handleSoftwareChange = (index: number, field: string, value: string) => {
    setCourseData((prev) => {
      const softwares = [...prev.softwaresTaught];
      softwares[index] = { ...softwares[index], [field]: value };
      return { ...prev, softwaresTaught: softwares };
    });
  };

 

  // For FAQs (first FAQ)
  const handleFaqChange = (index: number, field: string, value: string) => {
    setCourseData((prev) => {
      const faqs = [...prev.faqs];
      faqs[index] = { ...faqs[index], [field]: value };
      return { ...prev, faqs };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Course Created Successfully!");
    console.log("Course Data:", courseData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-y-auto">
      <Card className="w-full max-w-5xl shadow-xl mb-10">
        <CardHeader>
          <CardTitle className="text-2xl text-center font-bold">Create a New Course</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-6">
            {/* Basic Course Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Course Title</Label>
                <Input type="text" id="title" name="title" placeholder="Enter course title" required value={courseData.title} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="duration">Duration</Label>
                <Input type="text" id="duration" name="duration" placeholder="e.g., ৪ মাস" required value={courseData.duration} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="lessons">Lessons</Label>
                <Input type="number" id="lessons" name="lessons" placeholder="Enter number of lessons" required value={courseData.lessons} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="projects">Projects</Label>
                <Input type="number" id="projects" name="projects" placeholder="Enter number of projects" required value={courseData.projects} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="photoUrl">Course Photo URL</Label>
                <Input type="text" id="photoUrl" name="photoUrl" placeholder="Enter course photo URL" required value={courseData.photoUrl} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="courseFee">Course Fee</Label>
                <Input type="number" id="courseFee" name="courseFee" placeholder="Enter course fee" required value={courseData.courseFee} onChange={handleChange} />
              </div>
            </div>

            {/* Description */}
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" placeholder="Write a brief description" required value={courseData.description} onChange={handleChange} />
            </div>

            {/* Schedule */}
            <div className="border p-4 rounded">
              <h3 className="font-bold mb-2">Schedule</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="schedule.startingDate">Starting Date</Label>
                  <Input type="date" id="schedule.startingDate" name="schedule.startingDate" required value={courseData.schedule.startingDate} onChange={handleNestedChange} />
                </div>
                <div>
                  <Label htmlFor="schedule.mode">Mode</Label>
                  <Select onValueChange={(value) =>
                    setCourseData((prev) => ({
                      ...prev,
                      schedule: { ...prev.schedule, mode: value },
                    }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Online">Online</SelectItem>
                      <SelectItem value="Offline">Offline</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="schedule.days">Days (comma separated)</Label>
                  <Input type="text" id="schedule.days" name="schedule.days" placeholder="e.g., Saturday, Monday, Wednesday" required value={courseData.schedule.days} onChange={handleNestedChange} />
                </div>
                <div>
                  <Label htmlFor="schedule.time">Time</Label>
                  <Input type="text" id="schedule.time" name="schedule.time" placeholder="e.g., 07:00 PM - 09:00 PM" required value={courseData.schedule.time} onChange={handleNestedChange} />
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="border p-4 rounded">
              <h3 className="font-bold mb-2">Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="overview.totalClasses">Total Classes</Label>
                  <Input type="number" id="overview.totalClasses" name="overview.totalClasses" placeholder="Enter total classes" required value={courseData.overview.totalClasses} onChange={handleNestedChange} />
                </div>
                <div>
                  <Label htmlFor="overview.classDuration">Class Duration</Label>
                  <Input type="text" id="overview.classDuration" name="overview.classDuration" placeholder="e.g., ২ - ২.৫ ঘন্টা" required value={courseData.overview.classDuration} onChange={handleNestedChange} />
                </div>
                <div className="flex items-center space-x-2">
                  <Input type="checkbox" id="overview.interactiveSessions" name="overview.interactiveSessions" checked={courseData.overview.interactiveSessions} onChange={handleNestedChange} />
                  <Label htmlFor="overview.interactiveSessions">Interactive Sessions</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input type="checkbox" id="overview.assignments" name="overview.assignments" checked={courseData.overview.assignments} onChange={handleNestedChange} />
                  <Label htmlFor="overview.assignments">Assignments</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input type="checkbox" id="overview.digitalLabAccess" name="overview.digitalLabAccess" checked={courseData.overview.digitalLabAccess} onChange={handleNestedChange} />
                  <Label htmlFor="overview.digitalLabAccess">Digital Lab Access</Label>
                </div>
              </div>
            </div>

            {/* Course Includes */}
            <div className="border p-4 rounded">
              <h3 className="font-bold mb-2">Course Includes</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="courseIncludes.duration">Duration</Label>
                  <Input type="text" id="courseIncludes.duration" name="courseIncludes.duration" placeholder="e.g., ৪ মাস" required value={courseData.courseIncludes.duration} onChange={handleNestedChange} />
                </div>
                <div>
                  <Label htmlFor="courseIncludes.weeklyLiveClasses">Weekly Live Classes</Label>
                  <Input type="number" id="courseIncludes.weeklyLiveClasses" name="courseIncludes.weeklyLiveClasses" placeholder="Enter weekly live classes" required value={courseData.courseIncludes.weeklyLiveClasses} onChange={handleNestedChange} />
                </div>
                <div>
                  <Label htmlFor="courseIncludes.weeklyClassHours">Weekly Class Hours</Label>
                  <Input type="number" id="courseIncludes.weeklyClassHours" name="courseIncludes.weeklyClassHours" placeholder="Enter weekly class hours" required value={courseData.courseIncludes.weeklyClassHours} onChange={handleNestedChange} />
                </div>
              </div>
            </div>

            {/* Topics Covered */}
            <div className="border p-4 rounded">
              <h3 className="font-bold mb-2">Topics Covered</h3>
              {/* For simplicity, only the first topic is handled */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="topicsCovered.0.topicTitle">Topic Title</Label>
                  <Input type="text" id="topicsCovered.0.topicTitle" name="topicsCovered.0.topicTitle" placeholder="Enter topic title" required value={courseData.topicsCovered[0].topicTitle} onChange={(e) => handleTopicChange(0, "topicTitle", e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="topicsCovered.0.topicDescription">Topic Description</Label>
                  <Textarea id="topicsCovered.0.topicDescription" name="topicsCovered.0.topicDescription" placeholder="Enter topic description" required value={courseData.topicsCovered[0].topicDescription} onChange={(e) => handleTopicChange(0, "topicDescription", e.target.value)} />
                </div>
              </div>
            </div>

            {/* Softwares Taught */}
            <div className="border p-4 rounded">
              <h3 className="font-bold mb-2">Softwares Taught</h3>
              {/* For simplicity, only the first software is handled */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  {/* <Label htmlFor="softwaresTaught.0.softwareTitle">Software Title</Label> */}
                  <Input type="text" id="softwaresTaught.0.softwareTitle" name="softwaresTaught.0.softwareTitle" placeholder="Enter software title" required value={courseData.softwaresTaught[0].softwareTitle} onChange={(e) => handleSoftwareChange(0, "softwareTitle", e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="softwaresTaught.0.photoUrl">Software Photo URL</Label>
                  <Input type="text" id="softwaresTaught.0.photoUrl" name="softwaresTaught.0.photoUrl" placeholder="Enter software photo URL" required value={courseData.softwaresTaught[0].photoUrl} onChange={(e) => handleSoftwareChange(0, "photoUrl", e.target.value)} />
                </div>
              </div>
            </div>

          

            {/* FAQs */}
            <div className="border p-4 rounded">
              <h3 className="font-bold mb-2">FAQs</h3>
              {/* For simplicity, only the first FAQ is handled */}
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="faqs.0.question mb-2">FAQ Question</Label>
                  <Input type="text" id="faqs.0.question mt-2" name="faqs.0.question" placeholder="Enter FAQ question" required value={courseData.faqs[0].question} onChange={(e) => handleFaqChange(0, "question", e.target.value)} />
                </div>
                <div  className="">
                  <Label htmlFor="faqs.0.answer mb-2 ">FAQ Answer</Label>

                  <Textarea id="faqs.0.answer mt-2" name="faqs.0.answer" placeholder="Enter FAQ answer" required value={courseData.faqs[0].answer} onChange={(e) => handleFaqChange(0, "answer", e.target.value)} />
                </div>
              </div>
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
