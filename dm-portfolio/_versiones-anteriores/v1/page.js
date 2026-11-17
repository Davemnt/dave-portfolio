import NavbarSection from "./components/NavbarSection";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import StudiesSection from "./components/StudiesSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <>
      <NavbarSection />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <StudiesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}
