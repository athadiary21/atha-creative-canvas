// Local storage utilities for course features

export interface CourseProgress {
  courseId: string;
  completed: boolean;
  lastAccessed: number;
  progress: number; // 0-100
  quizPassed?: boolean;
  quizAttempts?: number;
  quizScore?: number;
  lastQuizDate?: number;
}

export interface CourseBookmark {
  courseId: string;
  bookmarkedAt: number;
}

export interface CourseReview {
  courseId: string;
  rating: number; // 1-5
  comment: string;
  createdAt: number;
  userName: string;
}

const STORAGE_KEYS = {
  PROGRESS: 'course_progress',
  BOOKMARKS: 'course_bookmarks',
  REVIEWS: 'course_reviews'
};

// Progress tracking
export const getCourseProgress = (courseId: string): CourseProgress | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (!data) return null;
    const allProgress: CourseProgress[] = JSON.parse(data);
    return allProgress.find(p => p.courseId === courseId) || null;
  } catch {
    return null;
  }
};

export const updateCourseProgress = (progress: CourseProgress): void => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    const allProgress: CourseProgress[] = data ? JSON.parse(data) : [];
    const index = allProgress.findIndex(p => p.courseId === progress.courseId);
    
    if (index >= 0) {
      allProgress[index] = progress;
    } else {
      allProgress.push(progress);
    }
    
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(allProgress));
  } catch (error) {
    console.error('Failed to update progress:', error);
  }
};

export const getAllProgress = (): CourseProgress[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

// Bookmarks
export const isBookmarked = (courseId: string): boolean => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    if (!data) return false;
    const bookmarks: CourseBookmark[] = JSON.parse(data);
    return bookmarks.some(b => b.courseId === courseId);
  } catch {
    return false;
  }
};

export const toggleBookmark = (courseId: string): boolean => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    let bookmarks: CourseBookmark[] = data ? JSON.parse(data) : [];
    const index = bookmarks.findIndex(b => b.courseId === courseId);
    
    if (index >= 0) {
      bookmarks = bookmarks.filter(b => b.courseId !== courseId);
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
      return false;
    } else {
      bookmarks.push({ courseId, bookmarkedAt: Date.now() });
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
      return true;
    }
  } catch (error) {
    console.error('Failed to toggle bookmark:', error);
    return false;
  }
};

export const getAllBookmarks = (): CourseBookmark[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

// Reviews
export const getCourseReviews = (courseId: string): CourseReview[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.REVIEWS);
    if (!data) return [];
    const allReviews: CourseReview[] = JSON.parse(data);
    return allReviews.filter(r => r.courseId === courseId);
  } catch {
    return [];
  }
};

export const addCourseReview = (review: CourseReview): void => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.REVIEWS);
    const allReviews: CourseReview[] = data ? JSON.parse(data) : [];
    allReviews.push(review);
    localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(allReviews));
  } catch (error) {
    console.error('Failed to add review:', error);
  }
};

export const getAverageRating = (courseId: string): number => {
  const reviews = getCourseReviews(courseId);
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return Number((sum / reviews.length).toFixed(1));
};
