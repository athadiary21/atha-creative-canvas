import { useState } from 'react';
import { CourseQuiz, QuizQuestion } from '@/types/quiz';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

interface QuizDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  quiz: CourseQuiz;
  onComplete: (passed: boolean, score: number, userAnswers: number[]) => void;
}

export const QuizDialog = ({ open, onOpenChange, quiz, onComplete }: QuizDialogProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(new Array(quiz.questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);
    
    // Auto-advance to next question after a short delay
    if (currentQuestion < quiz.questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    quiz.questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    
    setScore(correctCount);
    setShowResults(true);
  };

  const handleRetry = () => {
    setUserAnswers(new Array(quiz.questions.length).fill(null));
    setCurrentQuestion(0);
    setShowResults(false);
    setScore(0);
  };

  const handleFinish = () => {
    const passed = score === quiz.questions.length;
    onComplete(passed, score, userAnswers as number[]);
    
    // Reset state
    setUserAnswers(new Array(quiz.questions.length).fill(null));
    setCurrentQuestion(0);
    setShowResults(false);
    setScore(0);
  };

  const allAnswered = userAnswers.every(answer => answer !== null);
  const currentAnswer = userAnswers[currentQuestion];
  const progressPercent = ((currentQuestion + 1) / quiz.questions.length) * 100;

  if (showResults) {
    const passed = score === quiz.questions.length;
    
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3">
              {passed ? (
                <>
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                  Selamat! Anda Lulus!
                </>
              ) : (
                <>
                  <XCircle className="w-8 h-8 text-destructive" />
                  Belum Berhasil
                </>
              )}
            </DialogTitle>
            <DialogDescription className="text-base">
              Skor Anda: <span className="font-bold text-lg">{score}/{quiz.questions.length}</span>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {quiz.questions.map((question, index) => {
              const userAnswer = userAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div
                  key={question.id}
                  className={cn(
                    'p-4 rounded-lg border-2',
                    isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-950/20' : 'border-destructive bg-red-50 dark:bg-red-950/20'
                  )}
                >
                  <div className="flex items-start gap-3 mb-2">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium mb-2">
                        {index + 1}. {question.question}
                      </p>
                      <div className="text-sm space-y-1">
                        <p>
                          <span className="font-medium">Jawaban Anda:</span>{' '}
                          <span className={isCorrect ? 'text-green-700 dark:text-green-400' : 'text-destructive'}>
                            {userAnswer !== null ? question.options[userAnswer] : 'Tidak dijawab'}
                          </span>
                        </p>
                        {!isCorrect && (
                          <p>
                            <span className="font-medium">Jawaban Benar:</span>{' '}
                            <span className="text-green-700 dark:text-green-400">
                              {question.options[question.correctAnswer]}
                            </span>
                          </p>
                        )}
                        {question.explanation && (
                          <p className="text-muted-foreground italic mt-2">
                            💡 {question.explanation}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-3">
            {passed ? (
              <Button onClick={handleFinish} className="flex-1 gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Lanjut ke Sertifikat
              </Button>
            ) : (
              <>
                <Button onClick={handleRetry} variant="outline" className="flex-1">
                  Coba Lagi
                </Button>
                <Button onClick={() => onOpenChange(false)} variant="secondary" className="flex-1">
                  Pelajari Ulang
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  const question: QuizQuestion = quiz.questions[currentQuestion];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Quiz - Pertanyaan {currentQuestion + 1} dari {quiz.questions.length}</DialogTitle>
          <DialogDescription>
            Pilih jawaban yang paling tepat untuk setiap pertanyaan
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Progress Bar */}
          <div className="space-y-2">
            <Progress value={progressPercent} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Pertanyaan {currentQuestion + 1}/{quiz.questions.length}</span>
              <span>{userAnswers.filter(a => a !== null).length} terjawab</span>
            </div>
          </div>

          {/* Question */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{question.question}</h3>
            
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={cn(
                    'w-full p-4 text-left rounded-lg border-2 transition-all hover:border-primary',
                    currentAnswer === index
                      ? 'border-primary bg-primary/10'
                      : 'border-border bg-background'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        'w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0',
                        currentAnswer === index
                          ? 'border-primary bg-primary'
                          : 'border-border'
                      )}
                    >
                      {currentAnswer === index && (
                        <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                      )}
                    </div>
                    <span className="font-medium">{String.fromCharCode(65 + index)}.</span>
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-3 pt-4">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              variant="outline"
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Sebelumnya
            </Button>

            <div className="flex gap-2">
              {quiz.questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={cn(
                    'w-8 h-8 rounded-full text-xs font-medium transition-all',
                    index === currentQuestion
                      ? 'bg-primary text-primary-foreground'
                      : userAnswers[index] !== null
                      ? 'bg-primary/20 text-primary'
                      : 'bg-muted text-muted-foreground'
                  )}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {currentQuestion === quiz.questions.length - 1 ? (
              <Button
                onClick={handleSubmit}
                disabled={!allAnswered}
                className="gap-2"
              >
                Submit Quiz
                <CheckCircle2 className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={currentQuestion === quiz.questions.length - 1}
                className="gap-2"
              >
                Selanjutnya
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
