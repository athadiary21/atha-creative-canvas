import { useState } from "react";
import LanguageToggle from "@/components/common/LanguageToggle";
import CoursesHeader from "@/components/courses/CoursesHeader";
import CourseSearch from "@/components/courses/CourseSearch";
import CoursesFilters from "@/components/courses/CoursesFilters";
import CoursesGrid from "@/components/courses/CoursesGrid";
import { useCourses } from "@/features/courses/hooks/useCourses";
import { CourseCategory } from "@/types/course";
import SEO from "@/components/common/SEO";
import { BreadcrumbStructuredData } from "@/components/common/StructuredData";
import { useTranslation } from "react-i18next";
import CourseCardSkeleton from "@/components/ui/course-card-skeleton";

type CategoryFilter = CourseCategory | "all";
const Courses = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [isLoading, setIsLoading] = useState(true);

  const { courses } = useCourses({
    category: activeCategory,
    searchQuery,
  });

  useState(() => {
    setTimeout(() => setIsLoading(false), 300);
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={t('courses.title')}
        description={t('courses.subtitle')}
        keywords={['courses', 'photography', 'design', 'coding', 'learning']}
      />
      <BreadcrumbStructuredData 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Courses', url: '/courses' }
        ]}
      />
      <LanguageToggle />
      <CoursesHeader />
      
      <section className="py-8 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          <CourseSearch value={searchQuery} onChange={setSearchQuery} />
        </div>
      </section>

      <section className="py-8 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          <CoursesFilters 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
        </div>
      </section>

      <section className="pb-16 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <CourseCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <CoursesGrid courses={courses} searchQuery={searchQuery} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;