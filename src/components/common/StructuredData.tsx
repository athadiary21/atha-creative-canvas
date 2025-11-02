import { Helmet } from 'react-helmet-async';
import { Course } from '@/types/course';
import { SITE_CONFIG } from '@/lib/constants';

interface CourseStructuredDataProps {
  course: Course;
}

export const CourseStructuredData = ({ course }: CourseStructuredDataProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "provider": {
      "@type": "Person",
      "name": SITE_CONFIG.author
    },
    "educationalLevel": course.level,
    "inLanguage": "id",
    "coursePrerequisites": course.prerequisites || "None",
    "thumbnailUrl": course.thumbnail,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": course.duration
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

interface BreadcrumbStructuredDataProps {
  items: Array<{ name: string; url: string }>;
}

export const BreadcrumbStructuredData = ({ items }: BreadcrumbStructuredDataProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
