"use client";
import React, { useState } from "react";
import Link from "next/link";

const navigationSections = [
  {
    title: "Manage My Account",
    links: [
        {
          label: "Manage Courses",
          href: "/dashboard/manage-courses",
          color: "",
        },
        {
          label: "Create New Course",
          href: "/dashboard/create-course",
          color: "",
        },
        {
          label: "Add Seminar Time",
          href: "/dashboard/add-seminar-time",
          color: "",
        },
        
        {
          label: "Student Feedback",
          href: "/dashboard/student-feedback",
          color: "",
        },
        {
          label: "Manage Events and Engagements",
          href: "/dashboard/manage-events-engagements",
          color: "",
        },
        {
          label: "Manage Certificates",
          href: "/dashboard/manage-certificates",
          color: "",
        },
        {
          label: "Manage Team Members",
          href: "/dashboard/manage-team-members",
          color: "",
        },
        {
          label: "Manage Our Clients and Partners",
          href: "/dashboard/manage-clients-partners",
          color: "",
        },
       
      ]
      
  },
 
  
];

export default function AdminLayout({ children }: {children: React.ReactNode}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col ">
      <div className="md:hidden p-4 flex justify-between items-center bg-white shadow">
        <div className="font-bold">Dashboard</div>
        <button
          className="p-2 border rounded text-gray-600"
          onClick={() => setSidebarOpen(!sidebarOpen)}>
          {/* Hamburger Icon */}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-1 ">
        {/* Sidebar */}
        <aside
          className={`
            bg-gray-900 w-64 p-6 border-r transform top-0 left-0 
            md:relative md:translate-x-0 md:shadow-none shadow-md
            transition-transform duration-200 ease-in-out
            ${
              sidebarOpen
                ? "translate-x-0 absolute z-10"
                : "-translate-x-full absolute"
            }
          `}>
          <div className="space-y-6 text-white">
            {navigationSections.map((section, idx) => (
              <div key={idx}>
                <h2 className="font-bold mb-2">{section.title}</h2>
                <ul className="space-y-1 text-white p-1 ">
                  {section.links.map((link, linkIdx) => (
                    <li className="border p-2 text-center border-red border-2 font-semibold" key={linkIdx}>
                      <Link href={link.href} className={link.color}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}

        <main className="flex-1 p-6" onClick={() => setSidebarOpen(false)}>
          {children}
        </main>
      </div>
    </div>
  );
}