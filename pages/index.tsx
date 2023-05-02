import { Inter } from "next/font/google";
import Profile from "@/components/ProfileSection";
import SectionSkills from "@/components/SkillsSection";
import SectionProjects from "@/components/SectionProjects";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <SectionSkills />
      <SectionProjects />
      <ContactSection />
      <Footer />
    </>
  );
}
