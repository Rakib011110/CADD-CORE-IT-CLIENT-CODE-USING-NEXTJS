import { Card } from "@/components/UI/card";
import Marquee from "react-fast-marquee";

export default function ClientsandPartners() {
    const data = [
        {
          id: 1,
          title: "BRAC Institute of Skills Development",
          photoUrl: "https://caddcore.net/wp-content/uploads/2023/04/isd.png",
        },
        {
          id: 2,
          title: "MILITARY ENGINEER SERVICES",
          photoUrl: "https://caddcore.net/wp-content/uploads/2023/04/military.png",
        },
        {
          id: 3,
          title: "বাংলাদেশ কারিগরি শিক্ষা বোর্ড",
          photoUrl:
            "https://caddcore.net/wp-content/uploads/2023/04/BANGLADESH-KARIGORI-SIKKHA.png",
        },
        {
          id: 4,
          title: "জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ",
          photoUrl: "https://caddcore.net/wp-content/uploads/2023/04/JATIO-DOKKHOTA.png",
        },
        {
          id: 5,
          title: "Saic Institute of Management & Technology",
          photoUrl: "https://caddcore.net/wp-content/uploads/2023/04/sAIC-INSTUTE.png",
        },
        {
          id: 6,
          title: "BANGLAMARK",
          photoUrl: "https://caddcore.net/wp-content/uploads/2023/04/bangla-mark.png",
        },
        {
          id: 7,
          title: "Sincos",
          photoUrl: "https://caddcore.net/wp-content/uploads/2023/04/sincos.png",
        },
        {
          id: 8,
          title: "Hatil",
          photoUrl: "https://caddcore.net/wp-content/uploads/2023/04/hatil.png",
        },
        {
          id: 9,
          title: "Certiport",
          photoUrl: "https://caddcore.net/wp-content/uploads/2023/04/Certiport.png",
        },
        {
          id: 10,
          title: "Autodesk",
          photoUrl: "https://caddcore.net/wp-content/uploads/2023/04/Autodesk.png",
        },
        {
          id: 11,
          title: "Bangladesh Association of Software_and Information Services",
          photoUrl: "https://caddcore.net/wp-content/uploads/2023/04/basic.png",
        },
        {
          id: 12,
          title: "Robust_3D",
          photoUrl: "https://caddcore.net/wp-content/uploads/2023/04/Robust.png",
        },
        {
          id: 13,
          title: "CADD CORE Creative Community",
          photoUrl:
            "https://caddcore.net/wp-content/uploads/2023/04/craetive-community.png",
        },
        {
          id: 14,
          title: "Engineering_IT_Skills",
          photoUrl:
            "https://caddcore.net/wp-content/uploads/2023/04/engineering-skill-it.png",
        },
        {
          id: 15,
          title: "Major_Construction",
          photoUrl: "https://caddcore.net/wp-content/uploads/2023/04/major.png",
        },
        {
          id: 16,
          title: "certify-bangladesh",
          photoUrl:
            "https://caddcore.net/wp-content/uploads/2023/04/certify-bangladesh.png",
        },
        {
          id: 17,
          title: "bec",
          photoUrl: "https://caddcore.net/wp-content/uploads/2023/04/bec.png",
        },
        {
          id: 18,
          title: "Creative_consaltant",
          photoUrl:
            "https://caddcore.net/wp-content/uploads/2023/04/Creative-consaltant.png",
        },
        {
          id: 19,
          title: "Spark_steel",
          photoUrl: "https://caddcore.net/wp-content/uploads/2023/04/Spark-steel.png",
        },
        {
          id: 20,
          title: "Sda-stractural",
          photoUrl: "https://caddcore.net/wp-content/uploads/2023/04/Sda-stractural.png",
        },
        {
          id: 21,
          title: "Archstone Interior",
          photoUrl:
            "https://caddcore.net/wp-content/uploads/2023/04/Archstone-interirors.png",
        },
        {
          id: 22,
          title: "SB Consultant Ltd",
          photoUrl:
            "https://caddcore.net/wp-content/uploads/2023/04/Sb-consultant-ltd.png",
        },
        {
          id: 23,
          title: "Onestop Design Solution",
          photoUrl: "https://caddcore.net/wp-content/uploads/2023/04/one-stop.png",
        },
        {
          id: 24,
          title: "Design and development solution",
          photoUrl:
            "https://caddcore.net/wp-content/uploads/2023/04/Design-and-development-solution.png",
        },
        {
          id: 25,
          title: "Compliance-BD-Ltd",
          photoUrl:
            "https://caddcore.net/wp-content/uploads/2023/04/Compliance-BD-Ltd.png",
        },
        {
          id: 26,
          title: "Steel Task Limited",
          photoUrl: "https://caddcore.net/wp-content/uploads/2023/04/Still-Task.png",
        },
        {
          id: 27,
          title: "WASO Engineers & Consultants (BD) Ltd.",
          photoUrl:
            "https://caddcore.net/wp-content/uploads/2023/04/Waso-Engineers-Consultants.png",
        },
        {
          id: 28,
          title: "Reliant Energy & Safety Technology Ltd.",
          photoUrl:
            "https://caddcore.net/wp-content/uploads/2023/04/Reliant-Energy-safty.png",
        },
        {
          id: 29,
          title: "Abdul Monem Ltd.",
          photoUrl:
            "https://caddcore.net/wp-content/uploads/2023/04/MicrosoftTeams-image-3.png",
        },
        {
          id: 30,
          title: "Barjah Engineering & Consultants",
          photoUrl:
            "https://caddcore.net/wp-content/uploads/2023/04/MicrosoftTeams-image-4-1.png",
        },
        {
          id: 31,
          title: "Momen Real Estates Limited",
          photoUrl:
            "https://caddcore.net/wp-content/uploads/2023/04/MicrosoftTeams-image-2.png",
        },
        {
          id: 32,
          title: "MicrosoftTeams",
          photoUrl:
            "https://caddcore.net/wp-content/uploads/2023/04/MicrosoftTeams-image-4.png",
        },
      ];
      
    
      

  return (
    <div> 
        <div className="text-center text-2xl font-bold">
<h1>
Our Journey

</h1>
            <h1>
          
Our Clients and Partners

            </h1>
        </div>
     <Marquee pauseOnHover={true} gradient={false}>
        <div className="flex gap-4 text-center">
          {data.map((item, index) => (
            <div key={index} className="">
            
            <div className="w-44 mx-auto ">
                    <img
                      src={item.photoUrl}
                      alt={item.title}
                      className=""
                    />
                    <div>
                      <h3 className="text-sm text-center w-36 font-semibold text-gray-800 mx-auto">
                        {item.title}
                      </h3>
                     
                    </div>
                  </div>

            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}