export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  role: "Admin" | "Developer" | "Designer" | "Manager";
  avatar: string;
  initials: string;
  bio: string;
  joinedDate: string;
  profileCompletion: number;
  badges: {
    name: string;
    description: string;
    color: string;
  }[];
}

export const users: User[] = [
  {
    id: "user1",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 234 567 8901",
    location: "New York, NY",
    role: "Admin",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    initials: "SJ",
    bio: "Experienced administrator with a passion for streamlining processes and fostering team collaboration. Over 8 years in tech management and operations.",
    joinedDate: "2020-01-15",
    profileCompletion: 95,
    badges: [
      { name: "Verified User", description: "This user has been verified by the platform.", color: "blue" },
      { name: "Admin", description: "Admin users have access to all features and can manage users.", color: "green" },
      { name: "Popular", description: "This user has been popular in the community.", color: "orange" }
    ]
  },
  {
    id: "user2",
    name: "Michael Chen",
    email: "michael.chen@example.com",
    phone: "+1 234 567 8902",
    location: "San Francisco, CA",
    role: "Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    initials: "MC",
    bio: "Full-stack developer specializing in React and Node.js. Building scalable web applications with modern technologies and best practices.",
    joinedDate: "2021-03-20",
    profileCompletion: 88,
    badges: [
      { name: "Verified User", description: "This user has been verified by the platform.", color: "blue" },
      { name: "Awarded", description: "This user has been awarded for their contributions.", color: "yellow" }
    ]
  },
  {
    id: "user3",
    name: "Emily Rodriguez",
    email: "emily.rodriguez@example.com",
    phone: "+1 234 567 8903",
    location: "Austin, TX",
    role: "Designer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    initials: "ER",
    bio: "Creative UI/UX designer focused on creating beautiful and intuitive user experiences. Passionate about accessibility and user-centered design.",
    joinedDate: "2021-06-10",
    profileCompletion: 92,
    badges: [
      { name: "Verified User", description: "This user has been verified by the platform.", color: "blue" },
      { name: "Awarded", description: "This user has been awarded for their contributions.", color: "yellow" },
      { name: "Popular", description: "This user has been popular in the community.", color: "orange" }
    ]
  },
  {
    id: "user4",
    name: "David Thompson",
    email: "david.thompson@example.com",
    phone: "+1 234 567 8904",
    location: "Seattle, WA",
    role: "Manager",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    initials: "DT",
    bio: "Project manager with expertise in agile methodologies and team leadership. Helping teams deliver exceptional products on time and within budget.",
    joinedDate: "2019-11-05",
    profileCompletion: 85,
    badges: [
      { name: "Verified User", description: "This user has been verified by the platform.", color: "blue" },
      { name: "Admin", description: "Admin users have access to all features and can manage users.", color: "green" }
    ]
  },
  {
    id: "user5",
    name: "Lisa Anderson",
    email: "lisa.anderson@example.com",
    phone: "+1 234 567 8905",
    location: "Boston, MA",
    role: "Developer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    initials: "LA",
    bio: "Backend developer with strong skills in Python and database optimization. Focused on building robust APIs and scalable systems.",
    joinedDate: "2022-01-12",
    profileCompletion: 78,
    badges: [
      { name: "Verified User", description: "This user has been verified by the platform.", color: "blue" }
    ]
  },
  {
    id: "user6",
    name: "James Wilson",
    email: "james.wilson@example.com",
    phone: "+1 234 567 8906",
    location: "Chicago, IL",
    role: "Admin",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    initials: "JW",
    bio: "System administrator and DevOps engineer ensuring smooth operations and deployment pipelines. Security-focused with cloud infrastructure expertise.",
    joinedDate: "2020-08-22",
    profileCompletion: 90,
    badges: [
      { name: "Verified User", description: "This user has been verified by the platform.", color: "blue" },
      { name: "Admin", description: "Admin users have access to all features and can manage users.", color: "green" },
      { name: "Awarded", description: "This user has been awarded for their contributions.", color: "yellow" }
    ]
  },
  {
    id: "user7",
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    phone: "+1 234 567 8907",
    location: "Miami, FL",
    role: "Designer",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
    initials: "MG",
    bio: "Visual designer and brand specialist with a keen eye for detail. Creating cohesive brand identities and stunning visual communications.",
    joinedDate: "2021-09-18",
    profileCompletion: 87,
    badges: [
      { name: "Verified User", description: "This user has been verified by the platform.", color: "blue" },
      { name: "Popular", description: "This user has been popular in the community.", color: "orange" }
    ]
  },
  {
    id: "user8",
    name: "Robert Brown",
    email: "robert.brown@example.com",
    phone: "+1 234 567 8908",
    location: "Denver, CO",
    role: "Developer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    initials: "RB",
    bio: "Mobile app developer creating seamless experiences for iOS and Android. Passionate about performance optimization and user engagement.",
    joinedDate: "2021-04-07",
    profileCompletion: 82,
    badges: [
      { name: "Verified User", description: "This user has been verified by the platform.", color: "blue" },
      { name: "Awarded", description: "This user has been awarded for their contributions.", color: "yellow" }
    ]
  },
  {
    id: "user9",
    name: "Jennifer Lee",
    email: "jennifer.lee@example.com",
    phone: "+1 234 567 8909",
    location: "Portland, OR",
    role: "Manager",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    initials: "JL",
    bio: "Product manager driving innovation and strategic planning. Bridging the gap between business needs and technical implementation.",
    joinedDate: "2020-05-30",
    profileCompletion: 93,
    badges: [
      { name: "Verified User", description: "This user has been verified by the platform.", color: "blue" },
      { name: "Admin", description: "Admin users have access to all features and can manage users.", color: "green" },
      { name: "Popular", description: "This user has been popular in the community.", color: "orange" }
    ]
  },
  {
    id: "user10",
    name: "Christopher Martinez",
    email: "chris.martinez@example.com",
    phone: "+1 234 567 8910",
    location: "Phoenix, AZ",
    role: "Developer",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
    initials: "CM",
    bio: "Frontend specialist with expertise in modern JavaScript frameworks. Creating responsive and performant web applications with great attention to detail.",
    joinedDate: "2022-02-14",
    profileCompletion: 75,
    badges: [
      { name: "Verified User", description: "This user has been verified by the platform.", color: "blue" }
    ]
  },
  {
    id: "user11",
    name: "Amanda Taylor",
    email: "amanda.taylor@example.com",
    phone: "+1 234 567 8911",
    location: "Nashville, TN",
    role: "Designer",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    initials: "AT",
    bio: "UX researcher and interaction designer dedicated to understanding user needs. Conducting user studies and translating insights into design solutions.",
    joinedDate: "2021-07-25",
    profileCompletion: 89,
    badges: [
      { name: "Verified User", description: "This user has been verified by the platform.", color: "blue" },
      { name: "Awarded", description: "This user has been awarded for their contributions.", color: "yellow" }
    ]
  },
  {
    id: "user12",
    name: "Daniel Kim",
    email: "daniel.kim@example.com",
    phone: "+1 234 567 8912",
    location: "San Diego, CA",
    role: "Admin",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face",
    initials: "DK",
    bio: "Technical lead and architect designing scalable solutions. Mentoring developers and establishing best practices across the organization.",
    joinedDate: "2019-09-10",
    profileCompletion: 97,
    badges: [
      { name: "Verified User", description: "This user has been verified by the platform.", color: "blue" },
      { name: "Admin", description: "Admin users have access to all features and can manage users.", color: "green" },
      { name: "Awarded", description: "This user has been awarded for their contributions.", color: "yellow" },
      { name: "Popular", description: "This user has been popular in the community.", color: "orange" }
    ]
  }
];
