/**
 * portfolioData.js
 * ----------------------------------------------------------------------------
 * Single source of truth for all portfolio content.
 * Edit values here — every section reads from this file, so you never have to
 * dig through component JSX to update text, links, or projects.
 */

import {
  Code2,
  Globe,
  Database,
  Wrench,
  Sparkles,
  Users,
} from 'lucide-react';

// --- Identity ---------------------------------------------------------------
export const profile = {
  name: 'Lokesh Jilakara',
  firstName: 'Lokesh',
  lastName: 'Jilakara',
  role: 'Computer Science Engineering Student (AI & ML)',
  degree: 'B.Tech in Computer Science and Engineering (AI & ML)',
  university: 'SRM Institute of Science and Technology',
  graduationYear: '2027',
  cgpa: '7.8',
  // Roles cycled through by the typewriter effect in the hero
  taglines: [
    'Full Stack Developer',
    'Machine Learning Enthusiast',
    'Problem Solver',
    'AI Enthusiast',
  ],
  about:
    'Passionate Computer Science student specializing in AI & ML with strong interests in Full Stack Development, Machine Learning, and building scalable applications. Passionate about solving real-world problems through technology and continuously learning modern development practices.',
};

// --- Contact / social -------------------------------------------------------
// [EDIT] Replace with your real details before publishing.
export const contact = {
  email: 'lokeshroyal0163@gmail.com',
  phone: '+91 8520058226',
  linkedin: 'https://www.linkedin.com/in/lokesh-jilakara',
  github: 'https://github.com/lokesh-jilakara',
  resumeUrl: 'Lokesh_Resume.pdf', // link to a hosted PDF
};

// --- Quick stats (animated counters) ---------------------------------------
export const stats = [
  { label: 'Projects Built', value: 4, suffix: '+' },
  { label: 'Current CGPA', value: 7.8, decimals: 1 },
  { label: 'Certifications', value: 2, suffix: '' },
  { label: 'Tech Skills', value: 18, suffix: '+' },
];

// --- Experience -------------------------------------------------------------
export const experiences = [
  {
    role: 'Full Stack Web Development Intern',
    company: 'Edunet Foundation',
    period: 'Jul 2025 – Aug 2025',
    points: [
      'Developed responsive web applications.',
      'Implemented authentication systems.',
      'Built scalable and user-friendly applications.',
      'Collaborated with teams for design, testing, and documentation.',
    ],
  },
];

// --- Skills -----------------------------------------------------------------
export const skillGroups = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['C', 'C++', 'Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    skills: ['HTML', 'CSS', 'Bootstrap', 'PHP'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Jupyter Notebook', 'Google Colab'],
  },
  {
    title: 'AI Tools',
    icon: Sparkles,
    skills: ['ChatGPT', 'GitHub Copilot', 'Claude AI'],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: ['Leadership', 'Communication', 'Team Collaboration', 'Presentation Skills'],
  },
];

// --- Projects ---------------------------------------------------------------
// `category` powers the filter buttons in the Projects section.
export const projects = [
  {
    title: 'Fake News Detection System',
    category: 'Machine Learning',
    stack: ['Python', 'Machine Learning', 'Scikit-learn'],
    features: [
      'Uses NLP techniques.',
      'TF-IDF feature extraction.',
      'Detects fake and real news.',
      'Performance metrics visualization.',
    ],
  },
  {
    title: 'Financial News Extraction and Analysis',
    category: 'Machine Learning',
    stack: ['Python', 'NLP'],
    features: [
      'Sentiment analysis.',
      'Keyword extraction.',
      'Financial insight generation.',
    ],
  },
  {
    title: 'Local Civic Issue Reporter',
    category: 'Web Development',
    stack: ['Node.js', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'User authentication.',
      'Issue reporting and tracking.',
      'Real-time status updates.',
    ],
  },
  {
    title: 'Movie Booking System',
    category: 'Web Development',
    stack: ['React.js', 'PHP', 'MongoDB'],
    features: [
      'User authentication.',
      'Seat selection.',
      'Online booking system.',
    ],
  },
];

// --- Education --------------------------------------------------------------
export const education = [
  {
    school: 'SRM Institute of Science and Technology',
    detail: 'B.Tech CSE (AI & ML)',
    score: 'CGPA: 7.8',
    period: '2023 – 2027',
  },
  {
    school: 'Srinivasa Junior College (ALLEN)',
    detail: 'Intermediate Education',
    score: 'Score: 935 / 1000',
    period: '2021 – 2023',
  },
  {
    school: 'Sri Chaitanya School',
    detail: 'Class X',
    score: 'CGPA: 9.75 / 10',
    period: '2020 – 2021',
  },
];

// --- Certifications ---------------------------------------------------------
export const certifications = [
  {
    title: 'Java SE 17 Developer Certification',
    issuer: 'Oracle',
  },
  {
    title: 'Full Stack Web Development Internship Certificate',
    issuer: 'Edunet Foundation',
  },
];

// Navigation items shared by navbar + footer
export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
