import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { Globe, Check } from "lucide-react";

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
  const currentLang = languages.find(lang => lang.code === i18n.language);

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
            className="gap-2 bg-background/95 backdrop-blur-sm border-border/50 hover:bg-accent hover:text-accent-foreground transition-all shadow-sm"
          >
            <Globe className="w-4 h-4" />
            <span className="font-medium uppercase">{i18n.language}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          className="w-56 bg-background/95 backdrop-blur-sm border-border/50 shadow-lg z-[100]"
        >
          <div className="px-2 py-1.5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Select Language
            </p>
          </div>
          <DropdownMenuSeparator />
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className="flex items-center justify-between cursor-pointer py-2.5 px-3 focus:bg-accent focus:text-accent-foreground"
            >
              <span className={lang.code === i18n.language ? "font-semibold" : ""}>
                {lang.name}
              </span>
              {lang.code === i18n.language && (
                <Check className="w-4 h-4 text-primary" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageToggle;
