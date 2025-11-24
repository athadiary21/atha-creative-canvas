import { useState, useEffect } from 'react';
import { QuizResult } from '@/types/quiz';
import { getAllCourses } from '@/features/courses/data';

export interface QuizHistoryStats {
  totalAttempts: number;
  totalPassed: number;
  totalFailed: number;
  averageScore: number;
  passRate: number;
  uniqueCourses: number;
  recentAttempts: QuizResult[];
  courseBreakdown: {
    courseId: string;
    courseName: string;
    attempts: number;
    bestScore: number;
    lastAttempt: number;
    passed: boolean;
  }[];
}

export const useQuizHistory = () => {
  const [history, setHistory] = useState<QuizResult[]>([]);
  const [stats, setStats] = useState<QuizHistoryStats | null>(null);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = () => {
    const quizResults = JSON.parse(localStorage.getItem('quizResults') || '[]') as QuizResult[];
    
    // Sort by most recent first
    const sorted = quizResults.sort((a, b) => b.lastAttempt - a.lastAttempt);
    setHistory(sorted);
    
    // Calculate stats
    if (sorted.length > 0) {
      const totalAttempts = sorted.length;
      const totalPassed = sorted.filter(r => r.passed).length;
      const totalFailed = totalAttempts - totalPassed;
      const averageScore = sorted.reduce((sum, r) => sum + r.score, 0) / totalAttempts;
      const passRate = (totalPassed / totalAttempts) * 100;
      const uniqueCourses = new Set(sorted.map(r => r.courseId)).size;
      const recentAttempts = sorted.slice(0, 5);
      
      // Course breakdown
      const courseMap = new Map<string, QuizResult[]>();
      sorted.forEach(result => {
        if (!courseMap.has(result.courseId)) {
          courseMap.set(result.courseId, []);
        }
        courseMap.get(result.courseId)!.push(result);
      });
      
      const courseBreakdown = Array.from(courseMap.entries()).map(([courseId, results]) => {
        const course = getAllCourses().find(c => c.id === courseId);
        const bestScore = Math.max(...results.map(r => r.score));
        const lastResult = results[0];
        
        return {
          courseId,
          courseName: course?.title || courseId,
          attempts: results.length,
          bestScore,
          lastAttempt: lastResult.lastAttempt,
          passed: lastResult.passed
        };
      }).sort((a, b) => b.lastAttempt - a.lastAttempt);
      
      setStats({
        totalAttempts,
        totalPassed,
        totalFailed,
        averageScore,
        passRate,
        uniqueCourses,
        recentAttempts,
        courseBreakdown
      });
    }
  };

  const clearHistory = () => {
    localStorage.removeItem('quizResults');
    setHistory([]);
    setStats(null);
  };

  return { history, stats, loadHistory, clearHistory };
};
