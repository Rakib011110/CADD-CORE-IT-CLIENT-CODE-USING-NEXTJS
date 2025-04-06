"use client";

import {  MessageSquareDotIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { FaFacebookMessenger, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaSms, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; 
import { MagicCard } from "@/components/magicui/magic-card";

export default function FloatingContactMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);

   useEffect(() => {
    if (isOpen) {
      setShowHint(true);
      const timer = setTimeout(() => {
        setShowHint(false);
      }, 5000); 
  
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  

  
  return (
    <div className="fixed bottom-6 right-6 z-50">
  
     
      {showHint && (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white text-sm px-4 py-2 rounded-lg shadow-md mb-3 w-fit mx-auto"
    >
      💬 Send us a message!
    </motion.div>
  )}



      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl p-4 mb-4 flex flex-col gap-4 w-48"
          >
            {[
              { href: "https://m.me/caddcorebd", icon: <FaFacebookMessenger size={24} />, label: "Messenger", color: "hover:text-blue-500" },
              { href: "https://wa.me/+8801611223631", icon: <FaWhatsapp size={24} />, label: "Whatsapp", color: "hover:text-green-500" },
              { href: "tel:+8809613202060", icon: <FaPhone size={24} />, label: "Call Us", color: "hover:text-blue-400" },
              { href: "https://www.google.com/maps/place/CADD+CORE+Training+Institute/@23.760747,90.389486,639m/data=!3m1!1e3!4m6!3m5!1s0x3755b954b526d24b:0x5f1116b39789def9!8m2!3d23.7605933!4d90.3892575!16s%2Fg%2F11h4c9wf8k?hl=en&entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D", icon: <FaMapMarkerAlt size={24} />, label: "Visit Us", color: "hover:text-red-500" },
              { href: "sms:+8801611223637", icon: <FaSms size={24} />, label: "SMS", color: "hover:text-purple-500" },
            ].map((item, idx) => (
             <MagicCard     key={idx}>
 <motion.a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 ${item.color}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </motion.a>

                
             </MagicCard>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
 
</AnimatePresence>

     
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-red-500 hover:bg-purple-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl focus:outline-none"
      >
        {isOpen ? <FaTimes size={28} /> :   
            
<div>

   <MessageSquareDotIcon size={36} className="" />
</div>

       
            }
      </motion.button> 

    
    </div>
  );
}
