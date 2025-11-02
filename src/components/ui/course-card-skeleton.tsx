import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const CourseCardSkeleton = () => {
  return (
    <Card className="overflow-hidden hover-scale">
      <div className="relative h-48 w-full">
        <Skeleton className="h-full w-full" />
      </div>
      <CardHeader>
        <Skeleton className="h-4 w-20 mb-2" />
        <Skeleton className="h-6 w-full" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4" />
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-4 border-t">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-16" />
      </CardFooter>
    </Card>
  );
};

export default CourseCardSkeleton;
