"use client"
import { useState } from "react";
import { Button } from "@/components/UI/button";
import { Card, CardContent } from "@/components/UI/card";
import Link from "next/link";

const categories = [
  "Web & IT",
  "Marketing",
  "Finance",
  "General Service",
  "Graphic & Creative",
  "Administration",
  "Engineering",
];

type Job = {
  title: string;
  slug: string;
  type: string;
  duration?: string;
  salary?: string;
  date: string;
  category: string;
  location?: string;
  experience?: string;
  about?: string;
  qualifications?: string[];
  responsibilities?: string[];
  benefits?: string[];
};

const jobs: Job[] = [
  {
    title: "Structural Designer (Intern)",
    slug: "structural-designer-intern",
    type: "Internship",
    duration: "6 Months",
    date: "January 25, 2025",
    category: "Engineering",
    location: "Farmgate, Dhaka",
    experience: "Fresher",
    about:
      "Start your career as a Structural Designer Intern and gain valuable experience in the construction industry! 🚀",
    qualifications: [
      "Freshers and final-year students are welcome to apply.",
      "Basic knowledge of structural design principles.",
      "Familiarity with engineering drawings and design software is a plus.",
      "Strong attention to detail, eagerness to learn, and ability to work in a team.",
    ],
    responsibilities: [
      "Assist in creating structural designs and drawings for various construction projects.",
      "Collaborate with senior structural engineers to ensure design accuracy.",
      "Support in reviewing and updating design documents.",
      "Learn and apply industry standards and best practices in structural design.",
      "Assist in site visits and project coordination as required.",
    ],
    benefits: [
      "Hands-on experience in structural design.",
      "Professional mentorship and skill development.",
      "Opportunity to work on real-world projects.",
    ],
  },
  {
    title: "CAD Engineer (Intern)",
    slug: "cad-engineer-intern",
    type: "Internship",
    duration: "6 Months",
    date: "January 25, 2025",
    category: "Engineering",
    location: "Farmgate, Dhaka",
    experience: "Fresher",
  },
  {
    title: "BIM Modeler (Intern)",
    slug: "bim-modeler-intern",
    type: "Internship",
    duration: "6 Months",
    date: "January 25, 2025",
    category: "Engineering",
    location: "Farmgate, Dhaka",
    experience: "Fresher",
  },
  {
    title: "Video Editor",
    slug: "video-editor",
    type: "Full time",
    salary: "15,000 - 25,000 ৳",
    date: "January 30, 2025",
    category: "Graphic & Creative",
    location: "Dhaka",
    experience: "1+ year",
  },
  {
    title: "BIM Modeler",
    slug: "bim-modeler",
    type: "Full time",
    salary: "15,000 - 25,000 ৳",
    date: "January 25, 2025",
    category: "Engineering",
    location: "Dhaka",
    experience: "1+ year",
  },
  {
    title: "Graphic Designer",
    slug: "graphic-designer",
    type: "Full time",
    salary: "15,000 - 25,000 ৳",
    date: "January 25, 2025",
    category: "Graphic & Creative",
    location: "Dhaka",
    experience: "1+ year",
  },
];

export default function JobBoard() {
  const [activeTab, setActiveTab] = useState<string>("View All");

  const filteredJobs =
    activeTab === "View All"
      ? jobs
      : jobs.filter((job) => job.category === activeTab);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <p className="bg-orange-200 text-orange-700 inline-block px-3 py-1 rounded-full font-semibold mb-3">
          We're hiring!
        </p>
        <h1 className="text-4xl font-bold mb-4">
          Be Part of our <span className="text-orange-500">mission</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We’re looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-8">
        <Button
          variant={activeTab === "View All" ? "default" : "outline"}
          onClick={() => setActiveTab("View All")}
        >
          View All
        </Button>
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeTab === cat ? "default" : "outline"}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredJobs.map((job, index) => (
          <Card key={index} className="bg-gradient-to-br from-orange-100 to-pink-100">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-sm flex items-center gap-2 mb-1">🪙 {job.duration ? `Paid Internship (${job.duration}) ৳` : job.salary}</p>
              <p className="text-sm flex items-center gap-2 mb-1">⏱ {job.type}</p>
              <p className="text-sm flex items-center gap-2">📅 {job.date}</p>
              <div className="mt-2 text-blue-600 underline cursor-pointer text-sm">
             <Link href={`/job/${job.slug}`}>
             
             See details
             </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
