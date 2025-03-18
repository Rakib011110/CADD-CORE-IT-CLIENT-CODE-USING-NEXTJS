export type TCourse = {
    title: "",
    slug: "",
    categories: "",
    duration: "",
    lessons: "",
    photoUrl: "",
    projects: "",
    description: "",
    courseFee: "",
    schedule: {
      startingDate: "",
      mode: "",
      days: "",
      time: ""
    },
    overview: {
      overviewDescription: "",
      videoUrl: ""
    },
    courseIncludes: {
      duration: "",
      weeklyLiveClasses: "",
      weeklyClassHours: ""
    },
    topicsCovered: [{ topicTitle: "", topicDescription: "" }],
    softwaresTaught: [{ softwareTitle: "", photoUrl: "" }],
    expertPanel: {
      advisors: [{ name: "", title: "", photoUrl: "" }],
      teachers: [{ name: "", role: "", photoUrl: "" }]
    },
    learningProject: [{ title: "", description: "", photoUrl: "" }],
    freeTrainingSessions: [{ title: "", videoUrl: "" }],
    faqs: [{ question: "", answer: "" }]
  }