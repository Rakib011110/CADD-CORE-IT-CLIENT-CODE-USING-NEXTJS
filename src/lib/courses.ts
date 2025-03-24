export type Category = 'Civil' | 'Architectural' | 'Mechanical' | 'Electrical' | 'Bim';

// export interface Course {
//   id: number;
  
//   title: string;
//   duration: string;
//   lessons: string;
//   projects: string;
//   details?: boolean;
//   categories: Category;
//   image: string 
// }

export type TSchedule = {
  startingDate: string;
  mode: string;
  days: string;
  time: string;
};

export type TOverview = {
  overviewDescription: string;
  videoUrl: string;
};

export type TCourseIncludes = {
  duration: string;
  weeklyLiveClasses: string;
  weeklyClassHours: string;
};

export type TTopic = {
  id(id: any): void;
  _id: string | null;
  topicTitle: string;
  topicDescription: string;
};

export type TSoftware = {
  softwareTitle: string;
  photoUrl: string;
};

export type TAdvisor = {
  name: string;
  title: string;
  photoUrl: string;
};

export type TTeacher = {
  name: string;
  role: string;
  photoUrl: string;
};

export type TExpertPanel = {
  advisors: TAdvisor[];
  teachers: TTeacher[];
};

export type TLearningProject = {
  title: string;
  description: string;
  photoUrl: string;
};

export type TFreeTrainingSession = {
  title: string;
  videoUrl: string;
};

export type TFAQ = {
  question: string;
  answer: string;
};

export type TCourse = {
  title: string;
  _id: string
  slug: any;
  categories: Category;
  duration: string;
  lessons: string;
  photoUrl: string;
  projects: string;
  description: string;
  schedule: TSchedule;
  overview: TOverview;
  courseIncludes: TCourseIncludes;
  topicsCovered: TTopic[];
  softwaresTaught: TSoftware[];
  expertPanel: TExpertPanel;
  learningProject: TLearningProject[];
  freeTrainingSessions: TFreeTrainingSession[];
  courseFee: number;
  faqs: TFAQ[];
};


// {
//   "title": "প্রফেশনাল ব্রিজ এনালাইসিস এন্ড ডিজাইন মাস্টারকোর্স",
//   "slug": "professional-bridge-analysis-and-design-mastercourse",
//   "categories": "civil",
//   "duration": "৪ মাস",
//   "lessons": "২৫ টি লেসন",
//   "photoUrl": "",
//   "projects": "",
//   "description": "বাড়ি, অফিস বা যে কোনো প্রতিষ্ঠানের প্রতিটি স্থানকে কাজে লাগিয়ে আসবাবপত্র, লাইট, গৃহসজ্জা-সামগ্রীর যথাযথ ব্যবহারের মাধ্যমে আরাম দায়ক ও নান্দনিক ভাবে উপস্থাপন করাই হলো ইন্টেরিয়র ডিজাইন। আপনাকে একজন ইন্টেরিয়র ডিজাইনার হিসেবে প্রতিষ্ঠিত করতে ক্যারিয়ারে যা যা মেইন বিষয়সমুহ যেমন ডিজাইন কন্সেপ্ট, কালার থিওরি, ফার্নিচার ডিজাইন থেকে শুরু করে এ তো জেড সব ই থাকবে এই কোর্সে।",
//   "schedule": {
//     "startingDate": "",
//     "mode": "Online",
//     "days": "",
//     "time": "07:00 PM - 09:00 PM"
//   },
//   "overview": {
//     "overviewDescription": "প্রফেশনাল ইন্টেরিয়র ডিজাইন মাস্টারকোর্সটি অনলাইনে পৃথিবীর যে কোন জায়গা থেকে অনলাইনের মাধ্যমে শিখতে পারবেন। এ মাস্টার কোর্সটিতে এ মোট ৩৫টি ক্লাস হবে । প্রত্যেকটি ক্লাস ২ থেকে ২.৫ ঘন্টা পর্যন্ত হবে । আমাদের ক্লাস হবে অত্যন্ত ইন্টার একটিভ লাইভ ক্লাস কেননা প্রায় প্রত্যেকটি সেশনে থাকছে কুইজ/অ্যাসেসমেন্ট এর ব্যবস্থা যার দ্বারা আপনি সহজেই নিজের অবস্থান যাচাই করতে পারবেন । শুধুই কি তাই স্পেশাল মাস্টারকোর্স এর স্টুডেন্ট দের জন্য থাকবে ডিজিটাল লাইভ ল্যাব যেখানে আপনি সরাসরি ইনস্ট্রাকটরের সাথে ক্লাসের বাহিরেও সমস্যা সমাধান করিয়ে নিতে পারবেন ।এক কথায় আপনাকে সফল করতে যা যা দরকার সবই থাকবে এই মাস্টারকোর্স এ ।",
//     "videoUrl": ""
//   },
//   "courseIncludes": {
//     "duration": "৪ মাস",
//     "weeklyLiveClasses": "সপ্তাহে ২ টি লাইভ ক্লাস",
//     "weeklyClassHours": "সপ্তাহে ৪ ঘন্টা ক্লাস"
//   },
//   "topicsCovered": [
//     {
//       "topicTitle": "BRIDGE DECK SLAB DESIGN",
//       "topicDescription": "যানবাহন চলাচলের সময় তার চাকাঁ বা ( Wheel Loads) এর মুল সাপোর্ট হিসেবে কাজ করে একটি নিরাপদ যাতায়াত ব্যবস্থা নিশ্চিত করাই ডেকের মুল কাজ। ব্রিজ সম্পকের্ একটি পূনাঙ্গ ধারনা নেওয়ার পর আমরা ডেক স্লাব ডিজাইন নিয়ে শিখবো ।"
//     },
//     {
//       "topicTitle": "BRIDGE DECK SLAB DESIGN",
//       "topicDescription": "RCC GIRDER DESIGN & BEARING CALCULATION"
//     },
//     {
//       "topicTitle": "BRIDGE DECK SLAB DESIGN",
//       "topicDescription": "ABUTMENT ( LOAD CALCULATION, WALL & BACK WALL)"
//     },
//     {
//       "topicTitle": "PILE, PILE CAP MODELING, ANALYSIS & DESIGN",
//       "topicDescription": "Bridge এর জন্য পাইল হচ্ছে সবচেয়ে বেশী ব্যবহৃত ফাউন্ডেশন । এই কোর্স আপনি শিখবেন পাইল ক্যাপ মডেলিং , অ্যানালাইসিস , ডিজাইন এবং ডিটেইলিং ।"
//     },
//     {
//       "topicTitle": "BRIDGE MODELING ANALYSIS & DESIGN USING MIDAS CIVIL",
//       "topicDescription": "Midas Civil হচ্ছে ব্রিজ ডিজাইনের জন্য অনবদ্য একটি সফটওয়্যার । এই কোর্সটি সফলতার সাথে সম্পন্ন করে আপনি midas Civil এর মাধ্যমে অত্যন্ত নিখুত এবং দক্ষতার সাথে উচ্চ মানের ডিজাইন তৈরী করতে পারবেন ।"
//     }
//   ],
//   "softwaresTaught": [
//     {
//       "softwareTitle": "",
//       "photoUrl": "https://caddcore.net/storage/2023/03/excel-01.png"
//     },
//     {
//       "softwareTitle": "",
//       "photoUrl": "https://caddcore.net/storage/2023/03/MIDAS-01.png"
//     }
//   ],
//   "expertPanel": {
//     "advisors": [
     
// {
//   "name": "Hashnat Badsha",
//    "title": "PhD in Civil (Environmental) Engineering, San Luis Obispo, California, United States",
  
//    "photoUrl":
//      "https://caddcore.net/wp-content/uploads/2023/04/Badsha-Sir.png"
//  },
//  {
//   "name": "K.M. Ariful Islam",
//    "title": "Sr. Lead Structural Engineer, Bangladesh",
//    "photoUrl":
//      "https://caddcore.net/wp-content/uploads/2023/04/K.M.Ariful-Islam.png"
//  },
//  {
//   "name": "Hamidul Bari PEng",
//    "title":
//      "Licensed Structural Engineer, DMINB/CE/(C:SD), MIEB, MACI, Researcher, and Reviewer Dhaka, Bangladesh",
//    "photoUrl":
//      "https://caddcore.net/wp-content/uploads/2023/04/Hamidur-Bari-Peng.png"
//  },
//  {
//   "name": "Md. Bazlur Rahman",
//    "title": "Structural Engineer, Seismic Assessment and Retrofitting Dhaka, Bangladesh",
//    "photoUrl":
//      "https://caddcore.net/wp-content/uploads/2023/04/Md.-bazlur-Rahman.png"
//  }
//     ],
//     "teachers": [
//       {
//         "name": "",
//         "role": "",
//         "photoUrl": ""
//       }
//     ]
//   },
//   "learningProject": [
//     {
//       "title": "",
//       "description": "",
//       "photoUrl": ""
//     }
//   ],
//   "freeTrainingSessions": [
//     {
//       "title": "",
//       "videoUrl": ""
//     }
//   ],
//   "courseFee": "",
//   "faqs": [
//     {
//       "question": "",
//       "answer": ""
//     }
//   ]
// }, 
