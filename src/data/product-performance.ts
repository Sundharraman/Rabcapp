interface ProductPerformanceData {
  id: number;
  assigned: {
    name: string;
    role: string;
    permission: string;
  };
  name: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  budget: number;
}

export const rows: ProductPerformanceData[] = [
  {
    id: 1,
    assigned: {
      name: 'Andrew McDownland',
      role: 'Project Manager',
      permission: 'rwd',
    },
    name: 'Real Homes WP Theme',
    priority: 'Medium',
    budget: 24500,
  },
  {
    id: 2,
    assigned: {
      name: 'Sunil Joshi',
      role: 'Web Designer',
      permission: 'rwd',
    },
    name: 'Elite Admin',
    priority: 'Low',
    budget: 3900,
  },
  {
    id: 3,
    assigned: {
      name: 'Christopher Jamil',
      role: 'Project Manager',
      permission: 'rwd',
    },
    name: 'MedicalPro WP Theme',
    priority: 'High',
    budget: 12800,
  },
  {
    id: 4,
    assigned: {
      name: 'Nirav Joshi',
      role: 'Frontend Engineer',
      permission: 'rwd',
    },
    name: 'Hosting Press HTML',
    priority: 'Critical',
    budget: 2400,
  },
  {
    id: 5,
    assigned: {
      name: 'Amy Adams',
      role: 'Backend Developer',
      permission: 'rwd',
    },
    name: 'Ecommerce Platform',
    priority: 'High',
    budget: 15000,
  },
  {
    id: 6,
    assigned: {
      name: 'John Doe',
      role: 'Full Stack Developer',
      permission: 'rwd',
    },
    name: 'Social Media App',
    priority: 'Medium',
    budget: 18500,
  },
  {
    id: 7,
    assigned: {
      name: 'Jane Smith',
      role: 'UI/UX Designer',
      permission: 'rwd',
    },
    name: 'Design System',
    priority: 'Low',
    budget: 8100,
  },
  {
    id: 8,
    assigned: {
      name: 'Robert Brown',
      role: 'DevOps Engineer',
      permission: 'rwd',
    },
    name: 'Cloud Infrastructure',
    priority: 'Critical',
    budget: 22300,
  },
  {
    id: 9,
    assigned: {
      name: 'Laura Wilson',
      role: 'Mobile Developer',
      permission: 'rwd',
    },
    name: 'Mobile Banking App',
    priority: 'Medium',
    budget: 19000,
  },
  {
    id: 10,
    assigned: {
      name: 'James Taylor',
      role: 'Data Scientist',
      permission: 'rwd',
    },
    name: 'AI Research Project',
    priority: 'High',
    budget: 30200,
  },
  {
    id: 11,
    assigned: {
      name: 'Emily Davis',
      role: 'QA Engineer',
      permission: 'rwd',
    },
    name: 'Testing Automation',
    priority: 'Low',
    budget: 7600,
  },
  {
    id: 12,
    assigned: {
      name: 'Michael Miller',
      role: 'Security Specialist',
      permission: 'rwd',
    },
    name: 'Security Enhancement',
    priority: 'Critical',
    budget: 20400,
  },
  {
    id: 13,
    assigned: {
      name: 'Sarah White',
      role: 'Product Manager',
      permission: 'rwd',
    },
    name: 'New Product Launch',
    priority: 'High',
    budget: 2500,
  },
  {
    id: 14,
    assigned: {
      name: 'Daniel Lee',
      role: 'Frontend Developer',
      permission: 'rwd',
    },
    name: 'Marketing Website',
    priority: 'Medium',
    budget: 9900,
  },
];
