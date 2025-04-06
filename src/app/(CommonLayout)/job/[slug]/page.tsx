import { Card, CardContent } from "@/components/UI/card";
import { Calendar, MapPin, Building2, Clock } from "lucide-react";

export default function JobDetailsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-bold mb-4">Structural Designer (Intern)</h1>

        <Card className="mb-6">
          <CardContent className="p-4 space-y-2 text-sm text-muted-foreground">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> Deadline: <span className="font-medium">January 25, 2025</span>
              </div>
              <div className="flex items-center gap-1">💰 Salary: Paid Internship (6 Months)</div>
              <div className="flex items-center gap-1">
                <Building2 className="w-4 h-4" /> Vacancy: 1
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> Internship
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Work at office, Farmgate, Dhaka
              </div>
              <div className="flex items-center gap-1">🧑‍🎓 Experience: Fresher</div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="p-4">
            <h2 className="font-semibold text-lg mb-2">About this role</h2>
            <p>Start your career as a Structural Designer Intern and gain valuable experience in the construction industry! 🚀</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="p-4">
            <h2 className="font-semibold text-lg mb-2">Qualifications</h2>
            <ul className="list-disc list-inside">
              <li>Freshers and final-year students are welcome to apply.</li>
              <li>Basic knowledge of structural design principles.</li>
              <li>Familiarity with engineering drawings and design software is a plus.</li>
              <li>Strong attention to detail, eagerness to learn, and ability to work in a team.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="p-4">
            <h2 className="font-semibold text-lg mb-2">Responsibilities</h2>
            <ul className="list-disc list-inside">
              <li>Assist in creating structural designs and drawings for various construction projects.</li>
              <li>Collaborate with senior structural engineers to ensure design accuracy.</li>
              <li>Support in reviewing and updating design documents.</li>
              <li>Learn and apply industry standards and best practices in structural design.</li>
              <li>Assist in site visits and project coordination as required.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="font-semibold text-lg mb-2">Benefits</h2>
            <ul className="list-disc list-inside">
              <li>Hands-on experience in structural design.</li>
              <li>Professional mentorship and skill development.</li>
              <li>Opportunity to work on real-world projects.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="font-semibold text-xl mb-4">Related Openings</h3>
        <div className="space-y-4 text-sm">
          {[
            {
              title: "CAD Engineer (Intern)",
              salary: "Paid Internship (6 Months)",
              type: "Internship",
              deadline: "January 25, 2025",
            },
            {
              title: "BIM Modeler (Intern)",
              salary: "Paid Internship (6 Months)",
              type: "Internship",
              deadline: "January 25, 2025",
            },
            {
              title: "Video Editor",
              salary: "15,000 - 25,000 ৳",
              type: "Full time",
              deadline: "January 30, 2025",
            },
            {
              title: "BIM Modeler",
              salary: "15,000 - 25,000 ৳",
              type: "Full time",
              deadline: "January 25, 2025",
            },
            {
              title: "Graphic Designer",
              salary: "15,000 - 25,000 ৳",
              type: "Full time",
              deadline: "January 25, 2025",
            },
          ].map((job, i) => (
            <Card key={i} className="hover:border-primary transition cursor-pointer">
              <CardContent className="p-4 space-y-1">
                <p className="font-medium">{job.title}</p>
                <p>💰 {job.salary}</p>
                <p>⏱ {job.type}</p>
                <p>📅 {job.deadline}</p>
                <a className="text-blue-600 hover:underline text-xs" href="#">See details</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
