import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Portfolio from "@/components/home/Portfolio";
import Skills from "@/components/home/Skills";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";
import LanguageToggle from "@/components/common/LanguageToggle";
import Courses from "@/components/Courses";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LanguageToggle />
      <Hero />
      <About />
      <Portfolio />
      <Courses />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
