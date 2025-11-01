import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  backTo?: string;
  backLabel?: string;
}

const Header = ({ title, subtitle, backTo, backLabel }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50">
      <div className="container px-4 md:px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            {backTo && (
              <Link to={backTo}>
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">{backLabel}</span>
                </Button>
              </Link>
            )}
            
            {title && (
              <div className="min-w-0 flex-1">
                <h1 className="text-lg font-semibold truncate">{title}</h1>
                {subtitle && (
                  <p className="text-sm text-muted-foreground truncate">
                    {subtitle}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
