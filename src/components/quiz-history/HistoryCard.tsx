import { QuizResult } from '@/types/quiz';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Calendar, Target } from 'lucide-react';
import { getAllCourses } from '@/features/courses/data';
import { Link } from 'react-router-dom';

interface HistoryCardProps {
  result: QuizResult;
}

export const HistoryCard = ({ result }: HistoryCardProps) => {
  const course = getAllCourses().find(c => c.id === result.courseId);
  const date = new Date(result.lastAttempt);
  const scorePercentage = (result.score / result.totalQuestions) * 100;

  return (
    <Link to={`/course/${result.courseId}`}>
      <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-md">
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
            <div className="flex-1 space-y-2">
              <div className="flex items-start gap-2">
                {result.passed ? (
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-sm sm:text-base line-clamp-2">
                    {course?.title || result.courseId}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {course?.category}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{date.toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Target className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Attempt {result.attempts}</span>
                </div>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end gap-2">
              <Badge 
                variant={result.passed ? "default" : "secondary"}
                className="text-xs whitespace-nowrap"
              >
                {result.passed ? 'Passed' : 'Failed'}
              </Badge>
              <div className="text-right">
                <div className="text-lg sm:text-xl font-bold">
                  {scorePercentage.toFixed(0)}%
                </div>
                <div className="text-xs text-muted-foreground">
                  {result.score}/{result.totalQuestions}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
