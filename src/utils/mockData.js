// Sample applications and skills data for demo
export const MOCK_APPLICATIONS = [
  {
    id: '1',
    company: 'Google',
    position: 'Frontend Engineer Intern',
    dateApplied: '2025-01-10',
    status: 'interviewed',
    location: 'Mountain View, CA',
    jobUrl: 'https://careers.google.com',
    notes: 'Phone screen completed. Coding interview scheduled for Jan 28',
    tags: ['FAANG', 'remote-friendly', 'high-priority']
  },
  {
    id: '2',
    company: 'Meta',
    position: 'React Developer Intern',
    dateApplied: '2025-01-08',
    status: 'reviewing',
    location: 'Menlo Park, CA',
    jobUrl: 'https://metacareers.com',
    notes: 'Application submitted. Waiting for recruiter response',
    tags: ['FAANG', 'React']
  },
  {
    id: '3',
    company: 'Microsoft',
    position: 'Web Developer Intern',
    dateApplied: '2025-01-05',
    status: 'offered',
    location: 'Redmond, WA',
    jobUrl: 'https://careers.microsoft.com',
    notes: 'Offer received! Negotiating salary and start date',
    tags: ['FAANG', 'Web']
  },
  {
    id: '4',
    company: 'Amazon',
    position: 'Frontend Engineer Intern',
    dateApplied: '2025-01-15',
    status: 'applied',
    location: 'Seattle, WA',
    jobUrl: 'https://amazon.jobs',
    notes: 'Just submitted application',
    tags: ['FAANG', 'Remote']
  },
  {
    id: '5',
    company: 'Apple',
    position: 'Swift Developer Intern',
    dateApplied: '2024-12-20',
    status: 'rejected',
    location: 'Cupertino, CA',
    jobUrl: 'https://apple.com/careers',
    notes: 'Position filled by another candidate',
    tags: ['FAANG', 'iOS']
  },
  {
    id: '6',
    company: 'Stripe',
    position: 'Frontend Engineer Intern',
    dateApplied: '2025-01-12',
    status: 'interviewed',
    location: 'San Francisco, CA',
    jobUrl: 'https://stripe.com/jobs',
    notes: 'Round 1 interview completed. Waiting for final round',
    tags: ['Startup', 'Fintech']
  },
  {
    id: '7',
    company: 'Figma',
    position: 'Product Engineer Intern',
    dateApplied: '2025-01-14',
    status: 'reviewing',
    location: 'San Francisco, CA',
    jobUrl: 'https://figma.com/careers',
    notes: 'Recruiter screening scheduled',
    tags: ['Startup', 'Design']
  },
  {
    id: '8',
    company: 'Airbnb',
    position: 'Frontend Engineer Intern',
    dateApplied: '2025-01-07',
    status: 'applied',
    location: 'San Francisco, CA',
    jobUrl: 'https://airbnb.com/careers',
    notes: 'Submitted 2 weeks ago, no response yet',
    tags: ['Tech', 'Travel']
  },
  {
    id: '9',
    company: 'Uber',
    position: 'Web Engineer Intern',
    dateApplied: '2025-01-09',
    status: 'reviewing',
    location: 'San Francisco, CA',
    jobUrl: 'https://uber.com/careers',
    notes: 'Initial screening with HR',
    tags: ['Tech', 'Mobility']
  },
  {
    id: '10',
    company: 'Tesla',
    position: 'Software Engineer Intern',
    dateApplied: '2025-01-11',
    status: 'applied',
    location: 'Austin, TX',
    jobUrl: 'https://tesla.com/careers',
    notes: 'Application in progress',
    tags: ['Hardware', 'EV']
  }
];

export const MOCK_SKILLS = [
  {
    id: '1',
    name: 'React',
    category: 'frontend',
    level: 4,
    dateAdded: '2024-11-01',
    lastUpdated: '2025-01-15',
    resources: [
      { title: 'React Official Docs', url: 'https://react.dev' },
      { title: 'React Router', url: 'https://reactrouter.com' }
    ]
  },
  {
    id: '2',
    name: 'JavaScript',
    category: 'frontend',
    level: 5,
    dateAdded: '2024-09-15',
    lastUpdated: '2025-01-18',
    resources: [
      { title: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' }
    ]
  },
  {
    id: '3',
    name: 'TypeScript',
    category: 'frontend',
    level: 3,
    dateAdded: '2024-12-01',
    lastUpdated: '2025-01-10',
    resources: [
      { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/' }
    ]
  },
  {
    id: '4',
    name: 'HTML & CSS',
    category: 'frontend',
    level: 5,
    dateAdded: '2024-08-01',
    lastUpdated: '2025-01-12',
    resources: [
      { title: 'MDN HTML Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { title: 'CSS Tricks', url: 'https://css-tricks.com' }
    ]
  },
  {
    id: '5',
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 4,
    dateAdded: '2024-11-15',
    lastUpdated: '2025-01-14',
    resources: [
      { title: 'Tailwind Documentation', url: 'https://tailwindcss.com/docs' }
    ]
  },
  {
    id: '6',
    name: 'Node.js',
    category: 'backend',
    level: 3,
    dateAdded: '2024-12-15',
    lastUpdated: '2025-01-08',
    resources: [
      { title: 'Node.js Documentation', url: 'https://nodejs.org/en/docs/' }
    ]
  },
  {
    id: '7',
    name: 'Express.js',
    category: 'backend',
    level: 3,
    dateAdded: '2024-12-20',
    lastUpdated: '2025-01-09',
    resources: [
      { title: 'Express.js Guide', url: 'https://expressjs.com/' }
    ]
  },
  {
    id: '8',
    name: 'MongoDB',
    category: 'backend',
    level: 2,
    dateAdded: '2025-01-01',
    lastUpdated: '2025-01-16',
    resources: [
      { title: 'MongoDB University', url: 'https://university.mongodb.com/' }
    ]
  },
  {
    id: '9',
    name: 'Git & GitHub',
    category: 'devops',
    level: 4,
    dateAdded: '2024-10-01',
    lastUpdated: '2025-01-11',
    resources: [
      { title: 'GitHub Docs', url: 'https://docs.github.com' }
    ]
  },
  {
    id: '10',
    name: 'Docker',
    category: 'devops',
    level: 2,
    dateAdded: '2025-01-05',
    lastUpdated: '2025-01-13',
    resources: [
      { title: 'Docker Documentation', url: 'https://docs.docker.com' }
    ]
  },
  {
    id: '11',
    name: 'Communication',
    category: 'soft-skills',
    level: 4,
    dateAdded: '2024-09-01',
    lastUpdated: '2025-01-15',
    resources: []
  },
  {
    id: '12',
    name: 'Problem Solving',
    category: 'soft-skills',
    level: 5,
    dateAdded: '2024-08-15',
    lastUpdated: '2025-01-17',
    resources: [
      { title: 'LeetCode', url: 'https://leetcode.com' }
    ]
  },
  {
    id: '13',
    name: 'Leadership',
    category: 'soft-skills',
    level: 3,
    dateAdded: '2024-10-20',
    lastUpdated: '2025-01-12',
    resources: []
  },
  {
    id: '14',
    name: 'REST APIs',
    category: 'backend',
    level: 4,
    dateAdded: '2024-11-10',
    lastUpdated: '2025-01-14',
    resources: [
      { title: 'REST API Best Practices', url: 'https://restfulapi.net' }
    ]
  },
  {
    id: '15',
    name: 'Vite & Build Tools',
    category: 'frontend',
    level: 3,
    dateAdded: '2025-01-01',
    lastUpdated: '2025-01-16',
    resources: [
      { title: 'Vite Documentation', url: 'https://vitejs.dev' }
    ]
  }
];

// Helper function to initialize demo data
export const initializeDemoData = () => {
  return {
    applications: MOCK_APPLICATIONS,
    skills: MOCK_SKILLS,
    user: {
      name: 'Alex Johnson',
      email: 'alex@example.com'
    }
  };
};
