import { BookOpen } from "lucide-react";
import CourseCard from "./CourseCard";
import { Course } from "@/types/course";
import { useTranslation } from "react-i18next";

interface CoursesGridProps {
  courses: Course[];
  searchQuery?: string;
}

const CoursesGrid = ({ courses, searchQuery }: CoursesGridProps) => {
  const { t } = useTranslation();

  if (courses.length === 0) {
    return (
      <div className="text-center py-16">
        <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
        <h3 className="text-xl font-semibold mb-2">{t('courses.noResults')}</h3>
        <p className="text-muted-foreground">{t('courses.noResultsDesc')}</p>
      </div>
    );
  }

  return (
    <>
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          {t('courses.showing')} {courses.length} {t('courses.results')}
          {searchQuery && ` ${t('courses.for')} "${searchQuery}"`}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </>
  );
};

export default CoursesGrid;
