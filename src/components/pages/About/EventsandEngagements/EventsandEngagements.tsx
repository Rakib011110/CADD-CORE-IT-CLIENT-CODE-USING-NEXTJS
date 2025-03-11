// components/EventsEngagements.tsx
import Image, { StaticImageData } from 'next/image';

interface Event {
  title: string;
  subtitle: string;
  image: StaticImageData | string;
}

interface EventsEngagementsProps {
  events: Event[];
}
const events = [
    {
      title: 'Career Guideline Seminar',
      subtitle: '',
      image:  "https://caddcore.net/wp-content/uploads/2024/11/307287435_636879324631627_6368157157227122485_n.jpg"
    },
    
    {
      title: 'On job Training Session 2023',
      subtitle: '',
      image: "https://caddcore.net/wp-content/uploads/2024/11/322181873_676476580846787_9152656426536708242_n.jpg"
    },
    {
      title: 'Online Seminar on Structural Design & Detailing On job Training Session 2023',
      subtitle: '',
      image: "https://caddcore.net/wp-content/uploads/2024/11/395350543_321511487188239_5484178754403856723_n.jpg"
    },
    {
      title: 'Career Guideline Seminar for Diploma Engineers 2',
      subtitle: '',
      image: "https://caddcore.net/wp-content/uploads/2024/11/403710862_763867952421340_5580751212027356910_n.jpg"
    },
    {
      title: 'Industrial Taining Site visit',
      subtitle: '',
      image: "https://caddcore.net/wp-content/uploads/2024/11/461843989_523162653689787_125771718247023433_n.jpg"
    },
    {
      title: 'Career Guideline Seminar for Diploma Engineers',
      subtitle: '',
      image: "https://caddcore.net/wp-content/uploads/2024/11/403812239_763868029087999_8703225408035007419_n.jpg"
    },
   
  ];
  



export default function EventsandEngagements() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Events and Engagements</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {events.map((event, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
          >
            {/* Image container with hover effect */}
            <div className="aspect-square overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                width={500}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Overlay text */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
              <h3 className="text-md font-semibold text-white mb-2">{event.title}</h3>
              <p className="text-gray-200">{event.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
