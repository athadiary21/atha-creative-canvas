import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Bookmark, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Course } from "@/types/course";
import { useCourseBookmark, useCourseReviews } from "@/hooks/useCourseInteractions";
import LazyImage from "@/components/common/LazyImage";
import { toast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const { t } = useTranslation();
  const { bookmarked, toggle } = useCourseBookmark(course.id);
  const { averageRating, reviews } = useCourseReviews(course.id);

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = toggle();
    toast({
      title: newState ? t('courses.bookmarked') : t('courses.unbookmarked'),
      description: newState ? t('courses.bookmarkAdded') : t('courses.bookmarkRemoved'),
    });
  };

  return (
    <Link to={`/course/${course.id}`}>
      <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 h-full">
        <div className="relative overflow-hidden h-48">
          <LazyImage
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm">
            {course.level}
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={handleBookmark}
          >
            <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-primary text-primary' : ''}`} />
          </Button>
        </div>
        
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
            <span className="mx-2">•</span>
            <BookOpen className="w-4 h-4" />
            <span>{course.category}</span>
          </div>
          <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </CardTitle>
          <CardDescription className="line-clamp-3">
            {course.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-3">
            {course.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {course.tags.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{course.tags.length - 3}
              </Badge>
            )}
          </div>
          
          {averageRating > 0 && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{averageRating}</span>
              <span className="text-xs text-muted-foreground">({reviews.length} reviews)</span>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default CourseCard;