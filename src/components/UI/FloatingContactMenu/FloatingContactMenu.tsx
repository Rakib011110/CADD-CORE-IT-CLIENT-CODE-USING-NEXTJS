"use client";

import { useState } from "react";
import { FaFacebookMessenger, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaSms, FaTimes } from "react-icons/fa";

export default function FloatingContactMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menu */}
      {isOpen && (
        <div className="bg-white rounded-xl shadow-lg p-4 mb-4 flex flex-col gap-4">
          <a href="https://m.me/yourpage" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-500">
            <FaFacebookMessenger size={24} />
            <span>Messenger</span>
          </a>
          <a href="https://wa.me/yourwhatsappphonenumber" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-500">
            <FaWhatsapp size={24} />
            <span>Whatsapp</span>
          </a>
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-blue-400">
            <FaPhone size={24} />
            <span>Call Us</span>
          </a>
          <a href="https://goo.gl/maps/yourlocationlink" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-red-500">
            <FaMapMarkerAlt size={24} />
            <span>Visit Us</span>
          </a>
          <a href="sms:+1234567890" className="flex items-center gap-2 hover:text-purple-500">
            <FaSms size={24} />
            <span>SMS</span>
          </a>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg focus:outline-none"
      >
        {isOpen ? <FaTimes size={24} /> : "+"}
      </button>
    </div>
  );
}
