import { CourseCategory } from '@/types/course';

export const SITE_CONFIG = {
  name: 'Atha Rasyid Risqi',
  description: 'Professional Portfolio & Learning Platform',
  author: 'Atha Rasyid Risqi',
  siteUrl: 'https://yoursite.com',
};

export const COURSES_CONFIG = {
  itemsPerPage: 9,
  featuredCount: 3,
  categories: ['photography', 'coding', 'business'] as const,
};

export const ROUTES = {
  home: '/',
  courses: '/courses',
  courseViewer: (id: string) => `/course/${id}`,
} as const;

export const COURSE_CATEGORIES: Array<{ id: CourseCategory | 'all'; labelKey: string }> = [
  { id: 'all', labelKey: 'courses.all' },
  { id: 'photography', labelKey: 'courses.photography' },
  { id: 'coding', labelKey: 'courses.coding' },
];
