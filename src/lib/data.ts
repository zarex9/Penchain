import type { Student } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const studentAvatar = PlaceHolderImages.find(img => img.id === 'student-avatar-1')?.imageUrl || '';
const uniLogo1 = PlaceHolderImages.find(img => img.id === 'university-logo-1')?.imageUrl || '';
const uniLogo2 = PlaceHolderImages.find(img => img.id === 'university-logo-2')?.imageUrl || '';
const uniLogo3 = PlaceHolderImages.find(img => img.id === 'university-logo-3')?.imageUrl || '';


export const studentData: Student = {
  id: '1',
  name: 'Jane Doe',
  avatarUrl: studentAvatar,
  bio: 'A passionate full-stack developer with a background in computer science and a keen interest in decentralized technologies and AI-driven solutions.',
  credentials: [
    {
      id: 'cred-001',
      title: 'B.Sc. in Computer Science',
      issuer: 'State University',
      issuerLogoUrl: uniLogo1,
      issueDate: 'May 2020',
      description: 'Comprehensive degree covering algorithms, data structures, software engineering, and systems architecture.',
    },
    {
      id: 'cred-002',
      title: 'Advanced React Certificate',
      issuer: 'Tech Institute',
      issuerLogoUrl: uniLogo2,
      issueDate: 'January 2021',
      description: 'Specialized in modern React features including Hooks, Context API, and performance optimization.',
    },
    {
      id: 'cred-003',
      title: 'Solidity Bootcamp',
      issuer: 'Tech Institute',
      issuerLogoUrl: uniLogo2,
      issueDate: 'June 2021',
      description: 'Intensive bootcamp on smart contract development for the Ethereum blockchain using Solidity.',
    },
    {
      id: 'cred-004',
      title: 'Project Management Professional (PMP)',
      issuer: 'Design Academy',
      issuerLogoUrl: uniLogo3,
      issueDate: 'March 2022',
      description: 'Globally recognized certification in project management methodologies and best practices.',
    },
    {
      id: 'cred-005',
      title: 'AI/ML Specialization',
      issuer: 'State University',
      issuerLogoUrl: uniLogo1,
      issueDate: 'December 2022',
      description: 'In-depth specialization covering machine learning models, neural networks, and natural language processing.',
    },
    {
      id: 'cred-006',
      title: 'Advanced UI/UX Design',
      issuer: 'Design Academy',
      issuerLogoUrl: uniLogo3,
      issueDate: 'July 2023',
      description: 'Focused on user-centered design principles, prototyping, and creating intuitive user experiences.',
    }
  ],
};
