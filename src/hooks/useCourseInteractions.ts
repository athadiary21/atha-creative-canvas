import { useState, useEffect } from 'react';
import { 
  getCourseProgress, 
  updateCourseProgress, 
  isBookmarked, 
  toggleBookmark,
  getCourseReviews,
  addCourseReview,
  getAverageRating,
  type CourseProgress,
  type CourseReview
} from '@/lib/storage';

export const useCourseProgress = (courseId: string) => {
  const [progress, setProgress] = useState<CourseProgress | null>(null);

  useEffect(() => {
    const data = getCourseProgress(courseId);
    setProgress(data);
  }, [courseId]);

  const markAsViewed = () => {
    const newProgress: CourseProgress = {
      courseId,
      completed: false,
      lastAccessed: Date.now(),
      progress: progress?.progress || 0
    };
    updateCourseProgress(newProgress);
    setProgress(newProgress);
  };

  const markAsCompleted = () => {
    const newProgress: CourseProgress = {
      courseId,
      completed: true,
      lastAccessed: Date.now(),
      progress: 100
    };
    updateCourseProgress(newProgress);
    setProgress(newProgress);
  };

  return { progress, markAsViewed, markAsCompleted };
};

export const useCourseBookmark = (courseId: string) => {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    setBookmarked(isBookmarked(courseId));
  }, [courseId]);

  const toggle = () => {
    const newState = toggleBookmark(courseId);
    setBookmarked(newState);
    return newState;
  };

  return { bookmarked, toggle };
};

export const useCourseReviews = (courseId: string) => {
  const [reviews, setReviews] = useState<CourseReview[]>([]);
  const [averageRating, setAverageRating] = useState(0);

  const loadReviews = () => {
    const data = getCourseReviews(courseId);
    setReviews(data);
    setAverageRating(getAverageRating(courseId));
  };

  useEffect(() => {
    loadReviews();
  }, [courseId]);

  const addReview = (rating: number, comment: string, userName: string) => {
    const review: CourseReview = {
      courseId,
      rating,
      comment,
      createdAt: Date.now(),
      userName
    };
    addCourseReview(review);
    loadReviews();
  };

  return { reviews, averageRating, addReview };
};
