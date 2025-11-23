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
import { QuizResult } from '@/types/quiz';

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

  const updateProgress = (progressPercent: number) => {
    const newProgress: CourseProgress = {
      courseId,
      completed: progressPercent >= 100,
      lastAccessed: Date.now(),
      progress: Math.min(Math.max(progressPercent, 0), 100)
    };
    updateCourseProgress(newProgress);
    setProgress(newProgress);
  };

  const saveQuizResult = (quizResult: QuizResult) => {
    const newProgress: CourseProgress = {
      courseId,
      completed: quizResult.passed,
      lastAccessed: Date.now(),
      progress: progress?.progress || 100,
      quizPassed: quizResult.passed,
      quizAttempts: quizResult.attempts,
      quizScore: quizResult.score,
      lastQuizDate: quizResult.lastAttempt
    };
    updateCourseProgress(newProgress);
    setProgress(newProgress);
    
    // Save quiz result to localStorage
    const quizResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    quizResults.push(quizResult);
    localStorage.setItem('quizResults', JSON.stringify(quizResults));
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

  const canTakeQuiz = () => {
    return (progress?.progress || 0) >= 100;
  };

  return { progress, markAsViewed, markAsCompleted, updateProgress, saveQuizResult, canTakeQuiz };
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

  useEffect(() => {
    const data = getCourseReviews(courseId);
    setReviews(data);
    setAverageRating(getAverageRating(courseId));
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
    
    // Reload reviews after adding
    const data = getCourseReviews(courseId);
    setReviews(data);
    setAverageRating(getAverageRating(courseId));
  };

  return { reviews, averageRating, addReview };
};
