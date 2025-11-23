export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface CourseQuiz {
  courseId: string;
  questions: QuizQuestion[];
}

export interface QuizResult {
  courseId: string;
  score: number;
  totalQuestions: number;
  passed: boolean;
  attempts: number;
  lastAttempt: number;
  userAnswers: number[];
}
