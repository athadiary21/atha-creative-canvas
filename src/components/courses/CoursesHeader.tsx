import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const CoursesHeader = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 px-4 md:px-6 bg-gradient-subtle border-b border-border/50">
      <div className="container max-w-6xl mx-auto text-center">
        <Link to="/" className="inline-block mb-8">
          <Button variant="outline" size="sm">
            {t('courses.backHome')}
          </Button>
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          {t('courses.title')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('courses.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default CoursesHeader;
