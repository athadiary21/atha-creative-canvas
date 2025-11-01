import { getCourseById } from '../data';

/**
 * Hook for fetching a single course
 */
export const useCourse = (courseId: string | undefined) => {
  if (!courseId) {
    return { course: null, isLoading: false, error: 'No course ID provided' };
  }

  const course = getCourseById(courseId);

  return {
    course: course || null,
    isLoading: false,
    error: course ? null : 'Course not found',
  };
};
