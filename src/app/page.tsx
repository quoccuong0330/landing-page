"use client";

import HeroSection from "@/components/sections/HeroSection";
import AcademicExcellenceSection from "@/components/sections/AcademicExcellenceSection";
import AcademicOfferingsSection from "@/components/sections/AcademicOfferingsSection";
import AdmissionProcessSection from "@/components/sections/AdmissionProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ArticlesSection from "@/components/sections/ArticlesSection";
import CTASection from "@/components/sections/CTASection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AcademicExcellenceSection />
      <AcademicOfferingsSection />
      <AdmissionProcessSection />
      <TestimonialsSection />
      <ArticlesSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
