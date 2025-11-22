import { Course } from '@/types/course';

export const codingCourses: Course[] = [
  {
    id: 'html-css-intro',
    title: 'Pengenalan HTML & CSS',
    description: 'Tutorial dasar HTML & CSS untuk pemula. Pelajari struktur HTML, elemen-elemen penting, dan styling dengan CSS.',
    category: 'coding',
    thumbnail: '/courses/coding/html-css-intro.jpg',
    htmlFile: '/courses/coding/html-css-intro.html',
    duration: '45 menit',
    level: 'Beginner',
    featured: true,
    tags: ['HTML', 'CSS', 'Web Development', 'Frontend', 'Beginner'],
    author: 'Atha Rasyid',
    publishDate: '2024-01-15',
    prerequisites: []
  }
];
