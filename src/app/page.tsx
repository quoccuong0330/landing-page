"use client";

import HeroSection from "@/components/sections/HeroSection";
import AcademicExcellenceSection from "@/components/sections/AcademicExcellenceSection";
import AcademicOfferingsSection from "@/components/sections/AcademicOfferingsSection";
import AdmissionProcessSection from "@/components/sections/AdmissionProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ArticlesSection from "@/components/sections/ArticlesSection";
import CTASection from "@/components/sections/CTASection";
import FooterSection from "@/components/sections/FooterSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import TeamMemberSection from "@/components/sections/TeamMemberSection";
import VocationalSkillsSection from "@/components/sections/VocationalSkillsSection";
import ExperienceLearningSection from "@/components/sections/ExperienceLearningSection";
import CulturalProgramsSection from "@/components/sections/CulturalProgramsSection";
import UpcomingProjectsSection from "@/components/sections/UpcomingProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutUsSection />
      <TeamMemberSection />
      <VocationalSkillsSection />
      <ExperienceLearningSection />
      <CulturalProgramsSection />
      <UpcomingProjectsSection />
      {/* <AcademicExcellenceSection />
      <AcademicOfferingsSection /> */}
      {/* <AdmissionProcessSection />
      <TestimonialsSection />
      <ArticlesSection />
      <CTASection /> */}
      <FooterSection />
    </div>
  );
}
