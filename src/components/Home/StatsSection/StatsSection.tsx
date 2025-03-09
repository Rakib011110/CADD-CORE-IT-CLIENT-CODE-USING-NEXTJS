export default function StatsSection() {
    const stats = [
      {
        icon: "https://res.cloudinary.com/dbkwiwoll/image/upload/v1741243187/01-01-01-2048x2048_bevo66.png",
        text: "12000+ Graduate Students",
      },
      {
        icon: "https://res.cloudinary.com/dbkwiwoll/image/upload/v1741243340/04-01-01-2048x2048_h9jtlc.png",
        text: "15+ Certified Instructor",
      },
      {
        icon: "https://res.cloudinary.com/dbkwiwoll/image/upload/v1741243396/03-01-01-2048x2048_pt0xdi.png",
        text: "15+ Departmental Course",
      },
      {
        icon: "https://res.cloudinary.com/dbkwiwoll/image/upload/v1741243544/02-01-01-2048x2048_hpynr8.png",
        text: "Instructor Led Learning",
      },
    ];
  
    return (
      <div data-aos=""  className="flex justify-center items-center space-x-20 py-10">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img src={item.icon} alt="icon" className="w-28 h-28 mb-2" />
            <p className="font-bold text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    );
  }
  