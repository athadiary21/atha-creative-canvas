import { Calendar, MapPin, GraduationCap, Home } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import profileImage from "@/assets/profile.jpg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
const About = () => {
  const {
    t
  } = useTranslation();
  const info = [{
    icon: Calendar,
    label: t('about.born'),
    value: t('about.birthDate')
  }, {
    icon: MapPin,
    label: t('about.from'),
    value: t('about.fromLocation')
  }, {
    icon: Home,
    label: t('about.liveIn'),
    value: t('about.liveInLocation')
  }];
  const education = [t('about.school1'), t('about.school2'), t('about.school3')];
  return <section id="about" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
              {t('about.title')} <span className="text-primary">{t('about.titleHighlight')}</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center mb-12">
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative w-64 h-64 md:w-80 md:h-80 cursor-pointer group">
                  <img src={profileImage} alt="Atha Rasyid Risqi" className="w-full h-full object-cover rounded-2xl shadow-glow border-4 border-primary/20 transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10" />
                  <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-bold text-lg">{t('about.viewImage', 'View Image')}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="p-0 bg-transparent border-0 max-w-4xl w-auto">
                <img src={profileImage} alt="Atha Rasyid Risqi" className="w-full h-auto rounded-lg" />
              </DialogContent>
            </Dialog>
          </div>

          

          {/* Story */}
          <Card className="p-8 bg-gradient-primary border-0 shadow-glow">
            <div className="space-y-4">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                {t('about.storyTitle')}
              </h3>
              <div className="space-y-3 text-primary-foreground/90">
                <p>{t('about.storyP1')}</p>
                <p>{t('about.storyP2')}</p>
                <p className="font-semibold text-primary-foreground">{t('about.storyP3')}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default About;