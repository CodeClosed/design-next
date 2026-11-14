import type { Metadata } from "next";
import { companyProfile } from "@/content/company";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { IndustryShowcase } from "@/components/home/IndustryShowcase";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { QualityPreviewSection } from "@/components/home/QualityPreviewSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { EnquiryCtaBanner } from "@/components/home/EnquiryCtaBanner";

export const metadata: Metadata = {
  title: `${companyProfile.name} | Sugar Processing & Industrial Machinery`,
  description: companyProfile.description,
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProductShowcase />
      <CapabilitiesSection />
      <ProcessTimeline />
      <IndustryShowcase />
      <ProjectShowcase />
      <QualityPreviewSection />
      <TestimonialsSection />
      <EnquiryCtaBanner />
    </>
  );
}
