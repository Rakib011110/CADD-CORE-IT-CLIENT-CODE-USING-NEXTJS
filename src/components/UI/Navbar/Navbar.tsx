"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="bg-gradient-to-r from-red-500 to-red-400 px-6 py-4 flex items-center justify-between relative">
      {/* Logo Section */}
      <div className="text-white font-bold text-xl">
        <Link href="/">
          <div className="w-36">
            <img
              src="https://cdn-ilbhfhh.nitrocdn.com/GQAjASDcQJAOSFnCNbjHAwgJDnuIafbo/assets/images/optimized/rev-f913869/caddcore.net/wp-content/uploads/2023/03/cropped-cadd-01.png"
              alt="Logo"
            />
          </div>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 text-white font-semibold z-50">
        <Link href="/" className="relative">
          <span className="underline decoration-white underline-offset-4">হোম</span>
        </Link>
        <Link href="/courses">কোর্স সমূহ</Link>
        <Link href="/student-corner">স্টুডেন্ট কর্নার</Link>

        {/* Dropdown Menu */}
        <div className="relative z-50">
        <Link href={"/about-us"}>
        <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
            আমাদের সম্পর্কে <ChevronDown size={16} className="ml-1" />
          </button>
        </Link>
          {dropdownOpen && (
            <div className="absolute top-full mt-2 w-40 bg-white text-black shadow-md rounded-md">
              <Link
                href="/team"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={() => setDropdownOpen(false)}
              >
                আমাদের টিম
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={() => setDropdownOpen(false)}
              >
                যোগাযোগ করুন
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Live Event Button */}
      <div className="hidden md:block">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLScZysZu-d44Md-KbsIPXOX-wuoobxWbcBaXN04ITkgWYNR6Fw/viewform?pli=1"
          className="bg-white text-red-500 font-bold px-4 py-2 rounded-lg shadow-md hover:bg-gray-100"
        >
          লাইভ ইভেন্ট
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full  left-0 w-full bg-red-500 text-white flex flex-col space-y-4 py-4 md:hidden ">
          <Link href="/" className="px-6" onClick={() => setMobileMenuOpen(false)}>
            হোম
          </Link>
          <Link href="/courses" className="px-6" onClick={() => setMobileMenuOpen(false)}>
            কোর্স সমূহ
          </Link>
          <Link href="/student-corner" className="px-6" onClick={() => setMobileMenuOpen(false)}>
            স্টুডেন্ট কর্নার
          </Link>
          <div className="px-6">
            <button onClick={toggleDropdown} className="flex z-50 items-center w-full focus:outline-none">
              আমাদের সম্পর্কে <ChevronDown size={16} className="ml-1" />
            </button>
            {dropdownOpen && (
              <div className="mt-2 ml-4 z-50 bg-white text-black shadow-md rounded-md">
                <Link
                  href="/team"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => {
                    setDropdownOpen(false);
                    setMobileMenuOpen(false);
                  }}
                >
                  আমাদের টিম
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => {
                    setDropdownOpen(false);
                    setMobileMenuOpen(false);
                  }}
                >
                  যোগাযোগ করুন
                </Link>
              </div>
            )}
          </div>
          <Link href="/https://docs.google.com/forms/d/e/1FAIpQLScZysZu-d44Md-KbsIPXOX-wuoobxWbcBaXN04ITkgWYNR6Fw/viewform?pli=1" className="px-6" onClick={() => setMobileMenuOpen(false)}>
            লাইভ ইভেন্ট
          </Link>
        </div>
      )}
    </nav>
  );
}
