import { useState } from "react";
import LanguageToggle from "@/components/common/LanguageToggle";
import CoursesHeader from "@/components/courses/CoursesHeader";
import CourseSearch from "@/components/courses/CourseSearch";
import CoursesFilters from "@/components/courses/CoursesFilters";
import CoursesGrid from "@/components/courses/CoursesGrid";
import { useCourses } from "@/features/courses/hooks/useCourses";
import { CourseCategory } from "@/types/course";

type CategoryFilter = CourseCategory | "all";
const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const { courses } = useCourses({
    category: activeCategory,
    searchQuery,
  });

  return (
    <div className="min-h-screen bg-background">
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
          <CoursesGrid courses={courses} searchQuery={searchQuery} />
        </div>
      </section>
    </div>
  );
};

export default Courses;