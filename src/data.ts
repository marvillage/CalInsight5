export const menu = [
  {
    id: 1,
    title: "Main",
    listItems: [
      {
        id: 1,
        title: "Call Transcript",
        url: "/call-transcript",
        icon: "home.svg", // Icon remains the same
      },
      {
        id: 2,
        title: "Recordings",
        url: "/call-recordings",
        icon: "user.svg", // Icon remains the same
      },
      {
        id: 3,
        title: "Resources & Training",
        url: "/resources",
        icon: "re.svg", // Icon remains the same
      },
    ],
  },
  {
    id: 2,
    title: "General",
    listItems: [
      {
        id: 1,
        title: "Call Contacts",
        url: "/contacts",
        icon: "ath.svg", // Icon remains the same
      },
      {
        id: 2,
        title: "Confidential Chats",
        url: "/chats",
        icon: "chats.svg", // Icon remains the same
      },
      {
        id: 3,
        title: "Incident Reporting",
        url: "/incident-reporting",
        icon: "whistle.svg", // Icon remains the same
      },
      {
        id: 4,
        title: "View Query",
        url: "/view-query",
        icon: "social media.svg", // Icon remains the same
      },
      {
        id: 5,
        title: "view customer feedback",
        url: "/view-customer-feedback",
        icon: "social media.svg", // Icon remains the same
      },
      {
        id: 6,
        title: "SURYA CHATBOT",
        url: "/chat-bot",
        icon: "detector.svg", // Icon remains the same
      },
    ],
  },
  {
    id: 3,
    title: "Detectors",
    listItems: [
     
      {
        id: 1,
        title: "Call Type Analysis",
        url: "/call-type-analysis",
        icon: "weight.svg", // Icon remains the same
      },
      {
        id: 2,
        title: "Frequent Call Detector",
        url: "/frequent-call-detector",
        icon: "performance.svg", // Icon remains the same
      },
      {
        id: 3,
        title: "Compilance Detector",
        url: "/compilance-detector",
        icon: "steroid.svg", // Icon remains the same
      },
    ],
  },
  {
    id: 4,
    title: "Reports",
    listItems: [
      {
        id: 1,
        title: "Call Tags Report",
        url: "/call-tags-report",
        icon: "setting.svg", // Icon remains the same
      },
      {
        id: 2,
        title: "Sentiment Generation",
        url: "/senti-gen",
        icon: "backup.svg", // Icon remains the same
      },
      {
        id: 3,
        title: "Employee Behavior Report",
        url: "/caller-behavior",
        icon: "backup.svg", // Icon remains the same
      },
      {
        id: 4,
        title: "Customer Feedback Reports",
        url: "/customer-feedback",
        icon: "backup.svg", // Icon remains the same
      },
    ],
  },
  {
    id: 5,
    title: "Analytics",
    listItems: [
      {
        id: 1,
        title: "Call Sentiment Analysis",
        url: "/call-sentiment-analysis",
        icon: "chart.svg", // Icon remains the same
      },
      {
        id: 2,
        title: "Call Risk Analysis",
        url: "/call-risk-analysis",
        icon: "log.svg", // Icon remains the same
      },
      {
        id: 3,
        title: "Recording Quality Analysis",
        url: "/recording-quality-analysis",
        icon: "log.svg", // Icon remains the same
      },
      {
        id: 4,
        title: "Call Duration Analysis",
        url: "/call-duration-analysis",
        icon: "chart.svg", // Icon remains the same
      },
    ],
  },
  
];

export const callLogData = {
  "TECNO LH8n": {
    "19 Oct 2024": {
      "00:32:31": {
        callDate: "19 Oct 2024",
        callDuration: "57 sec",
        callTime: "00:32:31",
        callType: "Outgoing",
        contactName: "Snehil Shah",
        phNumber: "7400394024",
      },
      "01:08 pm": {
        callDate: "19 Oct 2024",
        callDuration: "13 sec",
        callTime: "01:08 pm",
        callType: "Outgoing",
        contactName: "Divyansh Nigam",
        phNumber: "+918076896446",
      },
      "01:17 pm": {
        callDate: "19 Oct 2024",
        callDuration: "12 sec",
        callTime: "01:17 pm",
        callType: "Outgoing",
        contactName: "Snehil Shah",
        phNumber: "7400394024",
      },
      "01:36 pm": {
        callDate: "19 Oct 2024",
        callDuration: "6 sec",
        callTime: "01:36 pm",
        callType: "Outgoing",
        contactName: "Divyansh Nigam",
        phNumber: "+918076896446",
      },
      "01:55 am": {
        callDate: "19 Oct 2024",
        callDuration: "10 sec",
        callTime: "01:55 am",
        callType: "Outgoing",
        contactName: "Divyansh Nigam",
        phNumber: "+918076896446",
      },
    },
  },
};


export const chartBoxUser = {
  color: "#8884d8",
  icon: "/heart.svg",
  title: "Call Duration",
  number: "5 min 32 sec",
  dataKey: "duration",
  percentage: 101,
  chartData: [
    { name: "Sun", duration: 2.5 },
    { name: "Mon", duration: 3.1 },
    { name: "Tue", duration: 4.0 },
    { name: "Wed", duration: 5.5 },
    { name: "Thu", duration: 6.0 },
    { name: "Fri", duration: 7.2 },
    { name: "Sat", duration: 8.1 },
  ],link: "/call-log"
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Outgoing Call Count",
  number: "16",
  dataKey: "outgoingCalls",
  percentage: 2,
  chartData: [
    { name: "Sun", outgoingCalls: 12 },
    { name: "Mon", outgoingCalls: 15 },
    { name: "Tue", outgoingCalls: 14 },
    { name: "Wed", outgoingCalls: 16 },
    { name: "Thu", outgoingCalls: 18 },
    { name: "Fri", outgoingCalls: 17 },
    { name: "Sat", outgoingCalls: 19 },
  ], link: "/outgoing-calls"
};

export const chartBoxProduc = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Missed Call Count",
  number: "4",
  dataKey: "missedCalls",
  percentage: 2,
  chartData: [
    { name: "Sun", missedCalls: 2 },
    { name: "Mon", missedCalls: 3 },
    { name: "Tue", missedCalls: 1 },
    { name: "Wed", missedCalls: 4 },
    { name: "Thu", missedCalls: 5 },
    { name: "Fri", missedCalls: 2 },
    { name: "Sat", missedCalls: 3 },
  ],
  link: "/missed-calls" // Link to the Missed Call page
};

export const chartBoxRevenue = {
  color: "teal",
  icon: "/sleep.svg",
  title: "Total Calls",
  number: "30",
  dataKey: "totalCalls",
  percentage: -12,
  chartData: [
    { name: "Sun", totalCalls: 6 },
    { name: "Mon", totalCalls: 7 },
    { name: "Tue", totalCalls: 8 },
    { name: "Wed", totalCalls: 9 },
    { name: "Thu", totalCalls: 10 },
    { name: "Fri", totalCalls: 11 },
    { name: "Sat", totalCalls: 12 },
  ],
  link: "call-history-details"
};

export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Call Conversion Rate",
  number: "75%",
  dataKey: "conversionRate",
  percentage: 12,
  chartData: [
    { name: "Sun", conversionRate: 65 },
    { name: "Mon", conversionRate: 70 },
    { name: "Tue", conversionRate: 72 },
    { name: "Wed", conversionRate: 74 },
    { name: "Thu", conversionRate: 76 },
    { name: "Fri", conversionRate: 78 },
    { name: "Sat", conversionRate: 80 },
  ],
    link: "call-accept-reject"
};

export const chartBoxConv = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Missed to Callback Rate",
  number: "60%",
  dataKey: "callbackRate",
  percentage: 12,
  chartData: [
    { name: "Sun", callbackRate: 50 },
    { name: "Mon", callbackRate: 55 },
    { name: "Tue", callbackRate: 58 },
    { name: "Wed", callbackRate: 60 },
    { name: "Thu", callbackRate: 63 },
    { name: "Fri", callbackRate: 65 },
    { name: "Sat", callbackRate: 70 },
  ], link: "call-back"
};

export const barChartBoxRevenue = {
  title: "Call Volume (in hours)",
  color: "#8884d8",
  dataKey: "callVolume",
  chartData: [
    { name: "Sun", callVolume: 2.5 },
    { name: "Mon", callVolume: 3.0 },
    { name: "Tue", callVolume: 3.5 },
    { name: "Wed", callVolume: 4.0 },
    { name: "Thu", callVolume: 4.5 },
    { name: "Fri", callVolume: 5.0 },
    { name: "Sat", callVolume: 5.5 },
  ],
};

export const barChartBoxRev = {
  title: "Average Call Duration",
  color: "#8884d8",
  dataKey: "avgCallDuration",
  chartData: [
    { name: "Sun", avgCallDuration: 15.87 },
    { name: "Mon", avgCallDuration: 5.8 },
    { name: "Tue", avgCallDuration: 6.1 },
    { name: "Wed", avgCallDuration: 6.3 },
    { name: "Thu", avgCallDuration: 6.5 },
    { name: "Fri", avgCallDuration: 6.8 },
    { name: "Sat", avgCallDuration: 17.56 },
  ],
};


export const barChartBoxVisit = {
  title: "Call Response Time (sec)",
  color: "#FF8042",
  dataKey: "responseTime",
  chartData: [
    { name: "Sun", responseTime: 20 },
    { name: "Mon", responseTime: 22 },
    { name: "Tue", responseTime: 24 },
    { name: "Wed", responseTime: 26 },
    { name: "Thu", responseTime: 23 },
    { name: "Fri", responseTime: 25 },
    { name: "Sat", responseTime: 27 },
  ],
};



export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Hubbard",
    firstName: "Eula",
    email: "kewez@@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Manning",
    firstName: "Stella",
    email: "comhuhmit@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Greer",
    firstName: "Mary",
    email: "ujudokon@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williamson",
    firstName: "Mildred",
    email: "tinhavabe@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sharp",
    firstName: "Jeremy",
    email: "vulca.eder@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lowe",
    firstName: "Christina",
    email: "reso.bilic@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dean",
    firstName: "Garrett",
    email: "codaic@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Parsons",
    firstName: "Leah",
    email: "uzozor@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Reid",
    firstName: "Elnora",
    email: "tuhkabapu@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dunn",
    firstName: "Gertrude",
    email: "gibo@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williams",
    firstName: "Mark",
    email: "tic.harvey@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Cruz",
    firstName: "Charlotte",
    email: "ceuc@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    firstName: "Sara",
    email: "bafuv@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    firstName: "Eric",
    email: "ubi@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
];

export const products = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    name: "Cristiano Roger",
    color: "N/A",
    producer: "N/A",
    price: "N/A",
    createdAt: "01.02.2023",
    inStock: true,
    lastMessageTime: "01.02.2023 10:00 AM",
    messagePreview: "Looking forward to our next training session!",
    status: "Unread",
    isConfidential: true,
    reportStatus: false,
    chatType: "One-on-One",
    athleteRole: "Professional",
    securityLevel: "High",
    isActive: true,
},
{
    id: 2,
    img:  "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "LeBron James",
    color: "N/A",
    producer: "N/A",
    price: "N/A",
    createdAt: "01.02.2023",
    inStock: true,
    lastMessageTime: "01.02.2023 10:15 AM",
    messagePreview: "Any updates on the nutrition plan?",
    status: "Read",
    isConfidential: true,
    reportStatus: false,
    chatType: "Group",
    athleteRole: "Olympian",
    securityLevel: "Medium",
    isActive: true,
},
{
    id: 3,
    img:  "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Misty Copeland",
    color: "N/A",
    producer: "N/A",
    price: "N/A",
    createdAt: "01.02.2023",
    inStock: true,
    lastMessageTime: "01.02.2023 11:00 AM",
    messagePreview: "Let's discuss the training schedule for next week.",
    status: "Unread",
    isConfidential: true,
    reportStatus: false,
    chatType: "One-on-One",
    athleteRole: "Amateur",
    securityLevel: "High",
    isActive: true,
},
{
    id: 4,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Serena Deeb",
    color: "N/A",
    producer: "N/A",
    price: "N/A",
    createdAt: "01.02.2023",
    inStock: true,
    lastMessageTime: "01.02.2023 11:30 AM",
    messagePreview: "Can we reschedule our meeting?",
    status: "Read",
    isConfidential: true,
    reportStatus: false,
    chatType: "One-on-One",
    athleteRole: "Professional",
    securityLevel: "Medium",
    isActive: true,
},
{
    id: 5,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Lionel Reddy",
    color: "N/A",
    producer: "N/A",
    price: "N/A",
    createdAt: "01.02.2023",
    inStock: false,
    lastMessageTime: "01.02.2023 12:00 PM",
    messagePreview: "What time do we meet tomorrow?",
    status: "Unread",
    isConfidential: true,
    reportStatus: true,
    chatType: "Group",
    athleteRole: "Olympian",
    securityLevel: "High",
    isActive: true,
},
{
    id: 6,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Tom Brady",
    color: "N/A",
    producer: "N/A",
    price: "N/A",
    createdAt: "01.02.2023",
    inStock: true,
    lastMessageTime: "01.02.2023 01:00 PM",
    messagePreview: "I need more time to recover.",
    status: "Read",
    isConfidential: true,
    reportStatus: false,
    chatType: "One-on-One",
    athleteRole: "Professional",
    securityLevel: "Medium",
    isActive: true,
},
{
    id: 7,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Serena Williams",
    color: "N/A",
    producer: "N/A",
    price: "N/A",
    createdAt: "01.02.2023",
    inStock: false,
    lastMessageTime: "01.02.2023 02:00 PM",
    messagePreview: "I want to talk about my recent performance.",
    status: "Unread",
    isConfidential: true,
    reportStatus: false,
    chatType: "Group",
    athleteRole: "Amateur",
    securityLevel: "Low",
    isActive: true,
},
{
    id: 8,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Simone Biles",
    color: "N/A",
    producer: "N/A",
    price: "N/A",
    createdAt: "01.02.2023",
    inStock: true,
    lastMessageTime: "01.02.2023 03:00 PM",
    messagePreview: "Can we have a follow-up on my last session?",
    status: "Read",
    isConfidential: true,
    reportStatus: false,
    chatType: "One-on-One",
    athleteRole: "Professional",
    securityLevel: "Medium",
    isActive: true,
},
{
    id: 9,
    img:"https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    name: "Michael Phelps",
    color: "N/A",
    producer: "N/A",
    price: "N/A",
    createdAt: "01.02.2023",
    inStock: true,
    lastMessageTime: "01.02.2023 04:00 PM",
    messagePreview: "I’m feeling great about my training!",
    status: "Unread",
    isConfidential: true,
    reportStatus: false,
    chatType: "Group",
    athleteRole: "Olympian",
    securityLevel: "High",
    isActive: true,
},
{
    id: 10,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Usain Bolt",
    color: "N/A",
    producer: "N/A",
    price: "N/A",
    createdAt: "01.02.2023",
    inStock: true,
    lastMessageTime: "01.02.2023 05:00 PM",
    messagePreview: "Looking for advice on recovery techniques.",
    status: "Read",
    isConfidential: true,
    reportStatus: false,
    chatType: "One-on-One",
    athleteRole: "Amateur",
    securityLevel: "Medium",
    isActive: true,
},

];



export const singleUser = {
  id: 1,
  title: "Amlan Borgohain",
  img: "https://www.jioinstitute.edu.in/sites/default/files/styles/webp/public/article/WhatsApp%20Image%202023-06-20%20at%207.37.52%20PM.jpeg.webp?itok=a-fUcHbY",
  info: {
    username: "AmlanB21",
    fullname: "Amlan Borgohain",
    email: "AmlanBor@gmail.com",
    phone: "123 456 789",
    status: "verified"
  },
  chart: {
    dataKeys: [
      { name: "trainingSessions", color: "#82ca9d" },
      { name: "goalsAchieved", color: "#8884d8" },
    ],
    data: [
      {
        name: "Week 1",
        trainingSessions: 5,
        goalsAchieved: 3,
      },
      {
        name: "Week 2",
        trainingSessions: 6,
        goalsAchieved: 4,
      },
      {
        name: "Week 3",
        trainingSessions: 4,
        goalsAchieved: 2,
      },
      {
        name: "Week 4",
        trainingSessions: 7,
        goalsAchieved: 5,
      },
      {
        name: "Week 5",
        trainingSessions: 5,
        goalsAchieved: 3,
      },
      {
        name: "Week 6",
        trainingSessions: 8,
        goalsAchieved: 6,
      },
      {
        name: "Week 7",
        trainingSessions: 6,
        goalsAchieved: 4,
      },
    ],
  },
  
  activities: [
    {
      text: "Musculoskeletal Assessments : Pending",
      time: "Scheduled : 16 August 2024",
    },
    {
      text: "Testosterone Testing : Pending",
      time: "Scheduled : 18 August 2024",
    },
    {
      text: "Urine Testing : Completed",
      time: "1 week ago",
    },
    {
      text: "Blood test : Completed",
      time: "1 week ago",
    },
    {
      text: "Lactate Threshold Test : Completed",
      time: "1 week ago",
    },
    {
      text: "VO2 Max Test : Completed",
      time: "1 week ago",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};
