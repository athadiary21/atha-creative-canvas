import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "@/components/common/LanguageToggle";
import Header from "@/components/layout/Header";
import { useCourse } from "@/features/courses/hooks/useCourse";

const CourseViewer = () => {
  const { courseId } = useParams();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  
  const { course, error } = useCourse(courseId);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [courseId]);

  if (error || !course) {
    return <Navigate to="/courses" replace />;
  }
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <LanguageToggle />
      <Header 
        title={course.title}
        subtitle={`${course.duration} • ${course.level}`}
        backTo="/courses"
        backLabel={t('courseViewer.back')}
      />

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