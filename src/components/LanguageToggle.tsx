import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    if (i18n.language === 'id') {
      i18n.changeLanguage('en');
    } else if (i18n.language === 'en') {
      i18n.changeLanguage('jp');
    } else {
      i18n.changeLanguage('id');
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2 fixed top-4 right-4 z-50 bg-card/80 backdrop-blur-sm"
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">
        {i18n.language === 'id' && 'EN'}
        {i18n.language === 'en' && 'JP'}
        {i18n.language === 'jp' && 'ID'}
      </span>
    </Button>
  );
};

export default LanguageToggle;
