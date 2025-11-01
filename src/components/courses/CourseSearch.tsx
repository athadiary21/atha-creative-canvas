import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

interface CourseSearchProps {
  value: string;
  onChange: (value: string) => void;
}

const CourseSearch = ({ value, onChange }: CourseSearchProps) => {
  const { t } = useTranslation();

  return (
    <div className="max-w-xl mx-auto relative mb-8">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <Input
        placeholder={t('courses.search')}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 h-12"
      />
    </div>
  );
};

export default CourseSearch;
