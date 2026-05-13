import VisitorLayout from "../layouts/VisitorLayout";
import VisitorNavbar from "../components/VisitorNavbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FavoriteMenuSection from "../components/FavoriteMenuSection";
import TestimonialsSection from "../components/TestimonialsSection";
import VisitorFooter from "../components/VisitorFooter";

export default function Visitor() {
  return (
    <VisitorLayout>
      <VisitorNavbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FavoriteMenuSection />
        <TestimonialsSection />
        <VisitorFooter />
      </main>
    </VisitorLayout>
  );
}

