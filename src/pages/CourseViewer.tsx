import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "@/components/common/LanguageToggle";
import Header from "@/components/layout/Header";
import { useCourse } from "@/features/courses/hooks/useCourse";
import SEO from "@/components/common/SEO";
import { CourseStructuredData, BreadcrumbStructuredData } from "@/components/common/StructuredData";
import { useCourseProgress } from "@/hooks/useCourseInteractions";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download, Trophy, Lock } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { generateCertificate, saveCertificateRecord } from "@/lib/certificateGenerator";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { QuizDialog } from "@/components/courses/QuizDialog";
import { getQuizByCourseId } from "@/features/courses/data/quizzes";
import { QuizResult } from "@/types/quiz";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const CourseViewer = () => {
  const { courseId } = useParams();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [showCertificateDialog, setShowCertificateDialog] = useState(false);
  const [showQuizDialog, setShowQuizDialog] = useState(false);
  const [userName, setUserName] = useState('');
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const { course, error } = useCourse(courseId);
  const { progress, markAsViewed, updateProgress, saveQuizResult, canTakeQuiz } = useCourseProgress(courseId || '');
  
  const quiz = courseId ? getQuizByCourseId(courseId) : undefined;
  const quizAttempts = progress?.quizAttempts || 0;
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [courseId]);

  useEffect(() => {
    if (course) {
      markAsViewed();
    }
  }, [course]);

  // Track scroll progress in iframe
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleIframeLoad = () => {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!iframeDoc) return;

        const updateScrollProgress = () => {
          const scrollTop = iframeDoc.documentElement.scrollTop || iframeDoc.body.scrollTop;
          const scrollHeight = iframeDoc.documentElement.scrollHeight || iframeDoc.body.scrollHeight;
          const clientHeight = iframeDoc.documentElement.clientHeight || iframeDoc.body.clientHeight;
          
          const scrollableHeight = scrollHeight - clientHeight;
          const scrollPercentage = scrollableHeight > 0 
            ? Math.round((scrollTop / scrollableHeight) * 100)
            : 100;

          updateProgress(scrollPercentage);
        };

        iframeDoc.addEventListener('scroll', updateScrollProgress);
        updateScrollProgress(); // Initial check

        return () => {
          iframeDoc.removeEventListener('scroll', updateScrollProgress);
        };
      } catch (error) {
        console.error('Cannot access iframe content:', error);
      }
    };

    iframe.addEventListener('load', handleIframeLoad);
    return () => {
      iframe.removeEventListener('load', handleIframeLoad);
    };
  }, [courseId]);

  const handleTakeQuiz = () => {
    if (!canTakeQuiz()) {
      toast({
        title: "Progress Belum 100%",
        description: "Selesaikan course terlebih dahulu untuk mengikuti quiz",
        variant: "destructive"
      });
      return;
    }
    setShowQuizDialog(true);
  };

  const handleQuizComplete = (passed: boolean, score: number, userAnswers: number[]) => {
    const quizResult: QuizResult = {
      courseId: courseId || '',
      score,
      totalQuestions: 5,
      passed,
      attempts: quizAttempts + 1,
      lastAttempt: Date.now(),
      userAnswers
    };
    
    saveQuizResult(quizResult);
    setShowQuizDialog(false);
    
    if (passed) {
      toast({
        title: "🎉 Selamat!",
        description: `Anda lulus quiz dengan skor ${score}/5`,
      });
      // Open certificate dialog after passing quiz
      setTimeout(() => {
        setShowCertificateDialog(true);
      }, 500);
    } else {
      toast({
        title: "Belum Berhasil",
        description: `Skor: ${score}/5. Pelajari materi kembali dan coba lagi!`,
        variant: "destructive"
      });
    }
  };

  const handleGenerateCertificate = () => {
    if (!userName.trim() || !course) return;
    
    generateCertificate(course, userName.trim());
    
    saveCertificateRecord({
      courseId: course.id,
      courseName: course.title,
      userName: userName.trim(),
      completionDate: new Date().toISOString(),
      duration: course.duration,
      category: course.category
    });
    
    toast({
      title: t('courseViewer.completed'),
      description: 'Certificate downloaded successfully!',
    });
    
    setShowCertificateDialog(false);
    setUserName('');
  };

  const isProgressComplete = (progress?.progress || 0) >= 100;
  const hasPassedQuiz = progress?.quizPassed || false;

  if (error || !course) {
    return <Navigate to="/courses" replace />;
  }
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title={course.title}
        description={course.description}
        type="article"
      />
      <CourseStructuredData course={course} />
      <BreadcrumbStructuredData 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Courses', url: '/courses' },
          { name: course.title, url: `/course/${course.id}` }
        ]}
      />
      <LanguageToggle />
      <Header 
        title={course.title}
        subtitle={`${course.duration} • ${course.level}`}
        backTo="/courses"
        backLabel={t('courseViewer.back')}
      >
        <TooltipProvider>
          {!hasPassedQuiz ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Button 
                    onClick={handleTakeQuiz} 
                    disabled={!isProgressComplete || !quiz}
                    className="gap-2"
                  >
                    {!isProgressComplete ? (
                      <>
                        <Lock className="w-4 h-4" />
                        Complete Course First
                      </>
                    ) : (
                      <>
                        <Trophy className="w-4 h-4" />
                        {quizAttempts > 0 ? 'Retry Quiz' : 'Take Quiz'}
                      </>
                    )}
                  </Button>
                </div>
              </TooltipTrigger>
              {!isProgressComplete && (
                <TooltipContent>
                  <p>Scroll hingga 100% untuk unlock quiz</p>
                </TooltipContent>
              )}
              {!quiz && (
                <TooltipContent>
                  <p>Quiz belum tersedia untuk course ini</p>
                </TooltipContent>
              )}
            </Tooltip>
          ) : (
            <Button onClick={() => setShowCertificateDialog(true)} className="gap-2">
              <Download className="w-4 h-4" />
              Download Certificate
            </Button>
          )}
        </TooltipProvider>
      </Header>

      {/* Quiz Dialog */}
      {quiz && (
        <QuizDialog
          open={showQuizDialog}
          onOpenChange={setShowQuizDialog}
          quiz={quiz}
          onComplete={handleQuizComplete}
        />
      )}

      <Dialog open={showCertificateDialog} onOpenChange={setShowCertificateDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Generate Certificate</DialogTitle>
            <DialogDescription>
              Enter your name to generate your course completion certificate
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <Input
              placeholder="Enter your full name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerateCertificate()}
            />
            <Button 
              onClick={handleGenerateCertificate} 
              disabled={!userName.trim()}
              className="w-full gap-2"
            >
              <Download className="w-4 h-4" />
              Generate & Download Certificate
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Progress Bar */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <Progress value={progress?.progress || 0} className="flex-1" />
            <span className="text-sm font-medium text-muted-foreground min-w-[3rem] text-right">
              {progress?.progress || 0}%
            </span>
            {isProgressComplete && !hasPassedQuiz && quiz && (
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                Quiz Available
              </span>
            )}
            {hasPassedQuiz && (
              <span className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1 rounded-full font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Quiz Passed
              </span>
            )}
          </div>
        </div>
      </div>

      <main className="flex-1">
        {isLoading && (
          <div className="flex items-center justify-center h-96">
            <div className="animate-pulse text-muted-foreground">
              {t('courseViewer.loading')}
            </div>
          </div>
        )}
        
        <iframe 
          ref={iframeRef}
          id="course-iframe" 
          src={course.htmlFile} 
          title={course.title} 
          className={`w-full border-0 ${isLoading ? 'hidden' : 'block'}`} 
          style={{ height: 'calc(100vh - 73px - 3rem)' }} 
          sandbox="allow-same-origin allow-scripts" 
        />
      </main>
    </div>
  );
};
export default CourseViewer;