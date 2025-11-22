export interface Course {
  id: string;
  title: string;
  description: string;
  category: CourseCategory;
  duration: string;
  level: CourseLevel;
  thumbnail: string;
  htmlFile: string;
  tags: string[];
  author: string;
  publishDate: string;
  featured?: boolean;
  prerequisites?: string[];
}

export type CourseCategory = 'photography' | 'coding' | 'business';
export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface CourseFilters {
  category?: CourseCategory | 'all';
  searchQuery?: string;
  level?: CourseLevel;
}
