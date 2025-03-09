export type Category = 'Civil' | 'Architectural' | 'Mechanical' | 'Electrical' | 'SIM';

export interface Course {
  id: number;
  title: string;
  duration: string;
  lessons: string;
  projects: string;
  details?: boolean;
  category: Category;
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
  },
  {
    id: 2,
    title: 'আরসিসি বিল্ডিং স্ট্রাকচারাল অ্যানালাইসিস, ডিজাইন অ্যান্ড ডিটেইলিং মাস্টারকোর্স',
    duration: '৬মাস',
    lessons: '৫০টি লেসন',
    projects: '১৫টি প্রজেক্ট',
    category: 'Civil',
  },
  {
    id: 3,
    title: 'প্রফেশনাল বিম মডেলিং ইউজিং রেভিট মাস্টারকোর্স',
    duration: '৪মাস',
    lessons: '৪০টি লেসন',
    projects: '১০টি প্রজেক্ট',
    details: true,
    category: 'Architectural',
  },
  {
    id: 4,
    title: 'প্রফেশনাল ব্রিজ এনালাইসিস এন্ড ডিজাইন মাস্টারকোর্স',
    duration: '৪মাস',
    lessons: '২৫টি লেসন',
    projects: '',
    category: 'Mechanical',
  },
  {
    id: 5,
    title: 'প্রফেশনাল ইন্টেরিয়র ডিজাইন মাস্টারকোর্স',
    duration: '৫মাস',
    lessons: '৪৮টি লেসন',
    projects: '১০টি প্রজেক্ট',
    details: true,
    category: 'Architectural',
  },
  {
    id: 6,
    title: 'স্টিল স্ট্রাকচার ডিজাইন মাস্টারকোর্স',
    duration: '৩মাস',
    lessons: '৩০টি লেসন',
    projects: '৫টি প্রজেক্ট',
    category: 'Electrical',
  },
  {
    id: 7,
    title: 'এলইডি লাইটিং ডিজাইন স্পেশালাইজেশন কোর্স',
    duration: '২মাস',
    lessons: '২০টি লেসন',
    projects: '',
    category: 'SIM',
  },
];
