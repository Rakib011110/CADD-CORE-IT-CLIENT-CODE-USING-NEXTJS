export default function Advisors() {
    const teamMembers = [
      {
        category: "Honorable Advisors",
        members: [
          {
            name: "Hashnat Badsha",
            title: "PhD in Civil (Environmental) Engineering",
            location: "San Luis Obispo, California, United States",
            photoUrl:
              "https://caddcore.net/wp-content/uploads/2023/04/Badsha-Sir.png",
          },
          {
            name: "K.M. Ariful Islam",
            title: "Sr. Lead Structural Engineer",
            location: "Bangladesh",
            photoUrl:
              "https://caddcore.net/wp-content/uploads/2023/04/K.M.Ariful-Islam.png",
          },
          {
            name: "Hamidul Bari PEng",
            title:
              "Licensed Structural Engineer, DMINB/CE/(C:SD), MIEB, MACI, Researcher, and Reviewer",
            location: "Dhaka, Bangladesh",
            photoUrl:
              "https://caddcore.net/wp-content/uploads/2023/04/Hamidur-Bari-Peng.png",
          },
          {
            name: "Md. Bazlur Rahman",
            title: "Structural Engineer, Seismic Assessment and Retrofitting",
            location: "Dhaka, Bangladesh",
            photoUrl:
              "https://caddcore.net/wp-content/uploads/2023/04/Md.-bazlur-Rahman.png",
          },
        ],
      },
      {
        category: "Management",
        members: [
          {
            name: "Hachnayen Ahmed",
            title: "Founder & CEO",
            photoUrl: "https://caddcore.net/wp-content/uploads/2023/04/Hachnayen-Ahmed.png",
          },
          {
            name: "Engr. Md. Easin",
            title: "Head of Business Development",
            photoUrl: "https://caddcore.net/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-28-at-10.34.14-AM-Md-Easin.jpeg",
          },
          {
            name: "Farjana Akter",
            title: "Accountants & HR",
            photoUrl: "https://caddcore.net/wp-content/uploads/2024/09/inbound3137485866319682761-Farjana-Akter.jpg",
          },
        ],
      },
      {
        category: "Civil Engineering Team",
        members: [
          {
            name: "Hachnayen Ahmed",
            title: "Structural Engineer",
            photoUrl: "https://caddcore.net/wp-content/uploads/2023/04/Hachnayen-Ahmed.png",
          },
          {
            name: "Mahmodul Hoque",
            title: "CAD ENGINEER (CIVIL)",
            photoUrl: "https://caddcore.net/wp-content/uploads/2024/09/IMG_20240901_123608-Mahmodul-Hoque-Misho.jpg",
          },
          {
            name: "Md. Sazzadul Islam",
            title: "Structural Engineer",
            photoUrl: "https://caddcore.net/wp-content/uploads/2024/09/1-Md.-Sazzadul-Islam.jpg",
          },
          {
            name: "Habib Basar",
            title: "BIM Modeler",
            photoUrl: "https://caddcore.net/wp-content/uploads/2024/09/WhatsApp-Image-2024-03-23-at-3.35.07-PM-Habib-Basar.jpeg",
          },
          {
            name: "Raisul Hasan Rasu",
            title: "Structural Detailing Engineer",
            photoUrl: "https://caddcore.net/wp-content/uploads/2024/09/Glass_edited-Raisul-Hasan-Rasu.jpg",
          },
          {
            name: "MD. AL BABUL LESAN",
            title: "Structural Engineer",
            photoUrl: "https://caddcore.net/wp-content/uploads/2024/09/MD-AL-BABUL-LESAN-PHOTO-Al-Babul-Lesan.jpg",
          },
          {
            name: "Kawsar Islam",
            title: "Architectural Visualizer",
            photoUrl: "https://via.placeholder.com/300",
          },
        ],
      },
      {
        category: "Mechanical Engineering Team",
        members: [
          {
            name: "MD SHARIFUL ISLAM",
            title: "Mechanical Design Engr. & Trainer",
            photoUrl: "https://via.placeholder.com/300",
          },
        ],
      },
      {
        category: "Electrical Engineering Team",
        members: [
          {
            name: "Tanzim Faisal",
            title: "Electrical Design Engineer",
            photoUrl: "https://via.placeholder.com/300",
          },
          {
            name: "Abdullah Al Noman",
            title: "CAD Engineer (Electrical)",
            photoUrl: "https://via.placeholder.com/300",
          },
        ],
      },
      {
        category: "Creative & IT Team",
        members: [
          {
            name: "Nazim Rashed",
            title: "Graphic Designer",
            photoUrl: "https://via.placeholder.com/300",
          },
        ],
      },
      {
        category: "Customer Service Team",
        members: [
          {
            name: "Mosammat Maksuda Akter",
            title: "Sr. Executive (Marketing)",
            photoUrl: "https://via.placeholder.com/300",
          },
          {
            name: "Wahida Alam",
            title: "Customer Service",
            photoUrl: "https://via.placeholder.com/300",
          },
        ],
      },
    ];
  
    return (
      <section className="bg-[#e8f8f8] py-10 px-5">
        <div className="max-w-6xl mx-auto  space-y-12">
          {teamMembers.map((group, groupIndex) => (
            <div key={groupIndex} className="relative">
            
              <div className="absolute top-0  left-0 bg-red-500 text-white px-3 py-1 rounded-bl-lg text-3xl z-10">
              <h1 className="">  {group.category}</h1>
              </div>
  
              {/* Team Member Cards */}
              <div className="pt-8">
                <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {group.members.map((member, memberIndex) => (
                    <div
                      key={memberIndex}
                      className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    >
                      <img
                        src={member.photoUrl}
                        alt={member.name}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/75 to-transparent text-white p-4 rounded-b-lg transition-all">
                        <h3 className="font-bold text-lg">{member.name}</h3>
                        <p className="text-sm opacity-90">{member.title}</p>
                        {/* {member.location && (
                          <p className="text-xs opacity-80">{member.location}</p>
                        )} */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  