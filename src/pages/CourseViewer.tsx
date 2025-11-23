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
import { CheckCircle2, Download } from "lucide-react";
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

const CourseViewer = () => {
  const { courseId } = useParams();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [showCertificateDialog, setShowCertificateDialog] = useState(false);
  const [userName, setUserName] = useState('');
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const { course, error } = useCourse(courseId);
  const { progress, markAsViewed, markAsCompleted, updateProgress } = useCourseProgress(courseId || '');
  
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

  const handleMarkComplete = () => {
    setShowCertificateDialog(true);
  };

  const handleGenerateCertificate = () => {
    if (!userName.trim() || !course) return;
    
    markAsCompleted();
    
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
        {!progress?.completed && (
          <Button onClick={handleMarkComplete} className="gap-2">
            <CheckCircle2 className="w-4 h-4" />
            {t('courseViewer.markComplete')}
          </Button>
        )}
        {progress?.completed && (
          <Button onClick={() => setShowCertificateDialog(true)} variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Download Certificate
          </Button>
        )}
      </Header>

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
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center gap-3">
            <Progress value={progress?.progress || 0} className="flex-1" />
            <span className="text-sm font-medium text-muted-foreground min-w-[3rem] text-right">
              {progress?.progress || 0}%
            </span>
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