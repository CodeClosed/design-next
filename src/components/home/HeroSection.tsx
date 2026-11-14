import Image from "next/image";
import { ArrowRight, FileSpreadsheet, ShieldCheck } from "lucide-react";
import { companyProfile } from "@/content/company";
import { PageContainer } from "@/components/shared/PageContainer";
import { LinkButton } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function HeroSection() {
  return (
    <section className="relative border-b border-[#DCE2E6] bg-[#0E1F2B] text-white">
      <PageContainer className="py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Engineering Authority & CTAs */}
          <div className="lg:col-span-6">
            <div className="mb-5 flex flex-wrap items-center gap-2.5">
              <Badge variant="amber">Sugar &amp; Allied Process Machinery</Badge>
              <Badge variant="sample" className="bg-[#142B3A] text-[#F5C573] border-[#D99A36]">
                Corporate Starter Template
              </Badge>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[3.125rem] lg:leading-[1.08]">
              Engineered Process Equipment for Sugar Mills &amp; Refineries
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#C5D5E0] sm:text-lg">
              {companyProfile.tagline}. Built for continuous crushing-season
              duty across cane preparation, 4-roller milling tandems, falling
              film evaporators, vacuum pans, centrifugals, and ZLD distillery systems.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <LinkButton href="/products" variant="primary" size="lg">
                <span>Explore Our Products</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </LinkButton>
              <LinkButton href="/contact?type=rfq" variant="dark-outline" size="lg">
                <FileSpreadsheet className="h-4 w-4 text-[#D99A36]" aria-hidden="true" />
                <span>Request an Enquiry</span>
              </LinkButton>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#244357] pt-6 text-xs text-[#A9C1D1] sm:grid-cols-3">
              <div>
                <p className="font-mono-tech text-sm font-bold text-white">1,250–12,000 TCD</p>
                <p className="mt-0.5">Plant capacity coverage</p>
              </div>
              <div>
                <p className="font-mono-tech text-sm font-bold text-white">SS 304 / 316L / Alloy</p>
                <p className="mt-0.5">Traceable metallurgy</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="flex items-center gap-1.5 font-semibold text-[#D99A36]">
                  <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Shop-Tested</span>
                </p>
                <p className="mt-0.5">NDT &amp; hydro-test workflows</p>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Blueprint / Equipment Visual */}
          <div className="lg:col-span-6">
            <figure className="overflow-hidden rounded-sm border border-[#31566D] bg-[#142B3A]">
              <Image
                src="/images/hero/sugar-plant-engineering.svg"
                alt="Technical schematic of sugar milling tandem, falling film evaporator, continuous vacuum pan, and centrifugal station"
                width={960}
                height={640}
                priority
                fetchPriority="high"
                className="h-auto w-full object-cover"
              />
              <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-[#26465B] bg-[#0B1923] px-4 py-2.5 text-xs text-[#9BB4C7]">
                <span className="font-mono-tech">SCHEMATIC // MILLING → BOILING HOUSE → CURING</span>
                <span>Replace with verified plant photography</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
