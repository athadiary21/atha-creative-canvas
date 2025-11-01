import { Course } from '@/types/course';
import { photographyCourses } from './photography.data';

/**
 * Get all courses from all categories
 */
export const getAllCourses = (): Course[] => {
  return [...photographyCourses];
};

/**
 * Get a single course by ID
 */
export const getCourseById = (id: string): Course | undefined => {
  return getAllCourses().find(course => course.id === id);
};

/**
 * Get featured courses
 */
export const getFeaturedCourses = (limit?: number): Course[] => {
  const featured = getAllCourses().filter(course => course.featured);
  return limit ? featured.slice(0, limit) : featured;
};

/**
 * Get courses by category
 */
export const getCoursesByCategory = (category: string): Course[] => {
  if (category === 'all') return getAllCourses();
  return getAllCourses().filter(course => course.category === category);
};
