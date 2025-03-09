"use client"
import Image from "next/image";
import AOS from 'aos';
import { useEffect } from "react";
import Aos from "aos";



export default function Banner() {
useEffect(() => {
    Aos.init({ duration: 1000 }); 
  }, []); 



    return (
      <div data-aos="fade-up"  className="w-full h-full"> 
        <Image className="w-full h-full" height={1000} width={1000} src="https://cdn-ilbhfhh.nitrocdn.com/GQAjASDcQJAOSFnCNbjHAwgJDnuIafbo/assets/images/optimized/rev-f913869/caddcore.net/wp-content/uploads/2023/04/website-banner_Website-Banner-2048x640.png" alt="bannar"/>
      </div>
    );
  }
  