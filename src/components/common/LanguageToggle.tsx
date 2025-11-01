import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const languages = [
  { code: "id", name: "Indonesia (ID)" },
  { code: "en", name: "English (EN)" },
  { code: "jp", name: "日本語 (JP)" },
  { code: "es", name: "Español (ES)" },
  { code: "fr", name: "Français (FR)" },
  { code: "de", name: "Deutsch (DE)" },
  { code: "zh", name: "中文 (ZH)" },
  { code: "ar", name: "العربية (AR)" },
  { code: "ru", name: "Русский (RU)" },
];

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 bg-card/80 backdrop-blur-sm"
          >
            <Globe className="w-4 h-4" />
            <span className="font-medium uppercase">{i18n.language}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-card/80 backdrop-blur-sm">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
            >
              {lang.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageToggle;
