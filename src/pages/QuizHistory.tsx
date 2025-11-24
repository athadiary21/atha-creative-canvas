import { useQuizHistory } from '@/hooks/useQuizHistory';
import { AnalyticsDashboard } from '@/components/quiz-history/AnalyticsDashboard';
import { ChartsSection } from '@/components/quiz-history/ChartsSection';
import { HistoryCard } from '@/components/quiz-history/HistoryCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, Trash2, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const QuizHistory = () => {
  const { history, stats, clearHistory } = useQuizHistory();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Quiz History - Learning Progress Tracker"
        description="View your complete quiz history, track your learning progress, and analyze your performance across all courses."
      />
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Link to="/courses">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Back to Courses</span>
                  </Button>
                </Link>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold">Quiz History</h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Track your learning progress and performance
              </p>
            </div>
            
            {history.length > 0 && (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Trash2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Clear History</span>
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Clear Quiz History?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will permanently delete all your quiz attempts and cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={clearHistory}>
                      Clear History
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>

          {/* Content */}
          {history.length === 0 ? (
            <Card className="border-border/50">
              <CardContent className="flex flex-col items-center justify-center py-12 sm:py-16 text-center">
                <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">No Quiz History Yet</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-md">
                  Start taking quizzes to track your learning progress and see your performance analytics.
                </p>
                <Link to="/courses">
                  <Button className="gap-2">
                    <BookOpen className="w-4 h-4" />
                    Browse Courses
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Analytics Dashboard */}
              {stats && <AnalyticsDashboard stats={stats} />}

              {/* Charts Section */}
              {stats && stats.recentAttempts.length > 0 && <ChartsSection stats={stats} />}

              {/* Course Breakdown */}
              {stats && stats.courseBreakdown.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-lg sm:text-xl font-semibold">Course Performance</h2>
                  <div className="grid gap-3 sm:gap-4">
                    {stats.courseBreakdown.map((course) => (
                      <Card key={course.courseId} className="border-border/50">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="flex-1">
                              <h3 className="font-semibold text-sm sm:text-base">{course.courseName}</h3>
                              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                                {course.attempts} attempt{course.attempts > 1 ? 's' : ''} • 
                                Best score: {course.bestScore.toFixed(0)}%
                              </p>
                            </div>
                            <Badge variant={course.passed ? "default" : "secondary"} className="text-xs w-fit">
                              {course.passed ? 'Passed' : 'In Progress'}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* All Attempts */}
              <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">All Attempts</h2>
                <div className="grid gap-3 sm:gap-4">
                  {history.map((result, index) => (
                    <HistoryCard key={`${result.courseId}-${index}`} result={result} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QuizHistory;
