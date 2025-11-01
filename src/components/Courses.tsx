import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getFeaturedCourses } from "@/features/courses/data";
import CourseCard from "./courses/CourseCard";
import { Button } from "./ui/button";
import { COURSES_CONFIG } from "@/lib/constants";

const Courses = () => {
  const { t } = useTranslation();
  const displayedCourses = getFeaturedCourses(COURSES_CONFIG.featuredCount);

  return (
    <section id="courses" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
              {t('homeCourses.title')}{" "}
              <span className="text-primary">{t('homeCourses.titleHighlight')}</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('homeCourses.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg">
              <Link to="/courses">{t('homeCourses.seeAll')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
