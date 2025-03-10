export type Category = 'Civil' | 'Architectural' | 'Mechanical' | 'Electrical' | 'BIM';

export interface Course {
  id: number;
  title: string;
  duration: string;
  lessons: string;
  projects: string;
  details?: boolean;
  category: Category;
  image: string
}

export const courses: Course[] = [
  {
    id: 1,
    title: 'প্রফেশনাল অটোক্যাড মাস্টারকোর্স (সিভিল ও আর্কিটেকচারাল)',
    duration: '৫মাস',
    lessons: '৪০টি লেসন',
    projects: '১০টি প্রজেক্ট',
    details: true,
    category: 'Civil',
    image:"https://caddcore.net/wp-content/uploads/2023/02/reverse-engg.jpeg"
  },
  {
    id: 2,
    title: 'আরসিসি বিল্ডিং স্ট্রাকচারাল অ্যানালাইসিস, ডিজাইন অ্যান্ড ডিটেইলিং মাস্টারকোর্স',
    duration: '৬মাস',
    lessons: '৫০টি লেসন',
    projects: '১৫টি প্রজেক্ট',
    category: 'Civil',
    image:"https://www.sthaponabd.com/images/service_images/ANALYTICAL-MODEL-FOR-ANALYSIS-and-DESIGN-OF-11-STORIED-RCC-STRUCTURE.jpg"

  },
  {
    id: 3,
    title: 'প্রফেশনাল বিম মডেলিং ইউজিং রেভিট মাস্টারকোর্স',
    duration: '৪মাস',
    lessons: '৪০টি লেসন',
    projects: '১০টি প্রজেক্ট',
    details: true,
    category: 'Architectural', 
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjKz978YDsIbfY7uCZ-ZZkk0oVnEXqZ1nqMA&s"
  },
  {
    id: 4,
    title: 'প্রফেশনাল ব্রিজ এনালাইসিস এন্ড ডিজাইন মাস্টারকোর্স',
    duration: '৪মাস',
    lessons: '২৫টি লেসন',
    projects: '',
    category: 'Mechanical',
    image:"https://caddcore.net/wp-content/uploads/2023/03/Bridge-Analysis-and-Design-2.png"

  },
  {
    id: 5,
    title: 'প্রফেশনাল ইন্টেরিয়র ডিজাইন মাস্টারকোর্স',
    duration: '৫মাস',
    lessons: '৪৮টি লেসন',
    projects: '১০টি প্রজেক্ট',
    details: true,
    category: 'Architectural',
    image:"https://blog.sheraspace.com/wp-content/uploads/2021/01/Copy-of-Sheraspace-Blog_Image1.jpg"

  },
  {
    id: 6,
    title: 'স্টিল স্ট্রাকচার ডিজাইন মাস্টারকোর্স',
    duration: '৩মাস',
    lessons: '৩০টি লেসন',
    projects: '৫টি প্রজেক্ট',
    category: 'Electrical',
    image:"https://caddcore.net/wp-content/uploads/2023/03/Structural-Analysis-Design-Mastercourse.png"

  },
  {
    id: 7,
    title: 'এলইডি লাইটিং ডিজাইন স্পেশালাইজেশন কোর্স',
    duration: '২মাস',
    lessons: '২০টি লেসন',
    projects: '',
    category: 'BIM',
    image:"https://cdn11.bigcommerce.com/s-fz66rhptih/product_images/uploaded_images/interior-led-lighting-systems.jpg"

  },
];
