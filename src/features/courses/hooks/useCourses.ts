import { useMemo } from 'react';
import { Course, CourseFilters } from '@/types/course';
import { getAllCourses } from '../data';

/**
 * Hook for filtering and managing courses
 */
export const useCourses = (filters?: CourseFilters) => {
  const allCourses = getAllCourses();

  const filteredCourses = useMemo(() => {
    let result = allCourses;

    // Filter by category
    if (filters?.category && filters.category !== 'all') {
      result = result.filter(course => course.category === filters.category);
    }

    // Filter by search query
    if (filters?.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(course =>
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Filter by level
    if (filters?.level) {
      result = result.filter(course => course.level === filters.level);
    }

    return result;
  }, [allCourses, filters]);

  return {
    courses: filteredCourses,
    totalCount: filteredCourses.length,
    allCourses,
  };
};
