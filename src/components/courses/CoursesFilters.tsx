import { Button } from "@/components/ui/button";
import { BookOpen, Camera, Code, Palette } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CourseCategory } from "@/types/course";

type CategoryFilter = CourseCategory | "all";

interface CoursesFiltersProps {
  activeCategory: CategoryFilter;
  onCategoryChange: (category: CategoryFilter) => void;
}

const CoursesFilters = ({ activeCategory, onCategoryChange }: CoursesFiltersProps) => {
  const { t } = useTranslation();

  const categories = [
    { id: "all" as CategoryFilter, label: t('courses.all'), icon: BookOpen },
    { id: "photography" as CategoryFilter, label: t('courses.photography'), icon: Camera },
    { id: "design" as CategoryFilter, label: t('courses.design'), icon: Palette },
    { id: "coding" as CategoryFilter, label: t('courses.coding'), icon: Code },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "default" : "outline"}
          onClick={() => onCategoryChange(category.id)}
          className="gap-2"
        >
          <category.icon className="w-4 h-4" />
          {category.label}
        </Button>
      ))}
    </div>
  );
};

export default CoursesFilters;
