"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-red-500 to-red-400 px-6 py-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="text-white font-bold text-xl">
        <Link href="/">
      <div className="w-36">
      <img src="https://cdn-ilbhfhh.nitrocdn.com/GQAjASDcQJAOSFnCNbjHAwgJDnuIafbo/assets/images/optimized/rev-f913869/caddcore.net/wp-content/uploads/2023/03/cropped-cadd-01.png" alt="" />
      </div>
        </Link>
      
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-white font-semibold">
        <Link href="/" className="relative">
          <span className="underline decoration-white underline-offset-4">হোম</span>
        </Link>
        <Link href="/courses">কোর্স সমূহ</Link>
        <Link href="/student-corner">স্টুডেন্ট কর্নার</Link>

        {/* Dropdown Menu */}
        <div className="relative">
          <Link href={"/about-us"}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center"
          >
            আমাদের সম্পর্কে <ChevronDown size={16} className="ml-1" />
          </Link >
       
        
        {dropdownOpen && ( 
          
            <div className="absolute top-full mt-2 w-40 bg-white text-black shadow-md rounded-md">
              <Link href="/about" className="block px-4 py-2 hover:bg-gray-200">
                আমাদের টিম
              </Link>
              <Link href="/contact" className="block px-4 py-2 hover:bg-gray-200">
                যোগাযোগ করুন
              </Link>
            </div>
          
          )}
        
       
        </div>
      </div>

      {/* Button */}
      <Link
        href="/live-event"
        className="bg-white text-red-500 font-bold px-4 py-2 rounded-lg shadow-md hover:bg-gray-100"
      >
        লাইভ ইভেন্ট
      </Link>
    </nav>
  );
}
