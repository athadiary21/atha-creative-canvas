import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "@/components/common/LanguageToggle";
import Header from "@/components/layout/Header";
import { useCourse } from "@/features/courses/hooks/useCourse";
import SEO from "@/components/common/SEO";
import { CourseStructuredData, BreadcrumbStructuredData } from "@/components/common/StructuredData";
import { useCourseProgress } from "@/hooks/useCourseInteractions";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const CourseViewer = () => {
  const { courseId } = useParams();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  
  const { course, error } = useCourse(courseId);
  const { progress, markAsViewed, markAsCompleted } = useCourseProgress(courseId || '');
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [courseId]);

  useEffect(() => {
    if (course) {
      markAsViewed();
    }
  }, [course]);

  const handleMarkComplete = () => {
    markAsCompleted();
    toast({
      title: t('courseViewer.completed'),
      description: t('courseViewer.completedDesc'),
    });
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
      </Header>

      <main className="flex-1">
        {isLoading && (
          <div className="flex items-center justify-center h-96">
            <div className="animate-pulse text-muted-foreground">
              {t('courseViewer.loading')}
            </div>
          </div>
        )}
        
        <iframe 
          id="course-iframe" 
          src={course.htmlFile} 
          title={course.title} 
          className={`w-full border-0 ${isLoading ? 'hidden' : 'block'}`} 
          style={{ height: 'calc(100vh - 73px)' }} 
          sandbox="allow-same-origin allow-scripts" 
        />
      </main>
    </div>
  );
};
export default CourseViewer;