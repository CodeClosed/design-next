import * as React from "react";
import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { companyProfile } from "@/content/company";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageContainer } from "@/components/shared/PageContainer";
import { ContactRfqForm } from "@/components/forms/ContactRfqForm";
import { Badge, SampleNoticeBanner } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Contact & Technical RFQ",
  description:
    "Submit a commercial enquiry or technical Request for Quotation (RFQ) with equipment specifications, or review corporate office and manufacturing works contact details.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${companyProfile.contact.whatsappNumber}?text=${encodeURIComponent(
    companyProfile.contact.whatsappMessage
  )}`;

  return (
    <>
      <section className="border-b border-[#DCE2E6] bg-[#0E1F2B] py-14 text-white">
        <PageContainer>
          <Breadcrumbs items={[{ label: "Contact" }]} theme="dark" />
          <div className="max-w-3xl">
            <Badge variant="amber" className="mb-4">
              Sales &amp; Engineering Desk
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Contact Us &amp; Submit a Technical RFQ
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#C5D5E0]">
              Connect with our engineering estimation team for new equipment
              proposals, capacity expansions, or off-season replacement spares.
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="py-12 lg:py-16">
        <PageContainer>
          <SampleNoticeBanner
            title="Development Email Handling Notice"
            description="Contact details shown below are sample placeholders. When EMAIL_PROVIDER is unconfigured or set to mock, form submissions run in transparent development_preview mode rather than pretending external email dispatch occurred."
            className="mb-8"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            {/* Left Sidebar: Corporate & Works Contact Details */}
            <aside className="space-y-6 lg:col-span-4">
              <div className="rounded-sm border border-[#DCE2E6] bg-white p-6">
                <h2 className="text-lg font-bold text-[#142B3A]">
                  Direct Channels [Placeholders]
                </h2>
                <ul className="mt-4 space-y-4 text-sm text-[#202A30]">
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#D99A36]" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-[#142B3A]">Sales &amp; Estimation</p>
                      <p className="text-[#546470]">{companyProfile.contact.phone}</p>
                      <p className="text-[#546470]">{companyProfile.contact.secondaryPhone}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#D99A36]" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-[#142B3A]">Email Desk</p>
                      <p className="break-all text-[#546470]">
                        {companyProfile.contact.salesEmail}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#D99A36]" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-[#142B3A]">Business Hours</p>
                      <p className="text-[#546470]">{companyProfile.contact.businessHours}</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-5 border-t border-[#ECEFF2] pt-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-sm border border-[#142B3A] bg-[#F7F8F6] px-4 py-2 text-sm font-semibold text-[#142B3A] hover:bg-[#142B3A] hover:text-white transition-colors"
                  >
                    <MessageSquare className="h-4 w-4 text-[#D99A36]" aria-hidden="true" />
                    <span>WhatsApp Enquiry Link [Placeholder]</span>
                  </a>
                </div>
              </div>

              <div className="rounded-sm border border-[#DCE2E6] bg-white p-6">
                <h2 className="text-lg font-bold text-[#142B3A]">
                  Office &amp; Manufacturing Works
                </h2>
                <div className="mt-4 space-y-5 text-sm">
                  <div>
                    <p className="flex items-center gap-1.5 font-semibold text-[#142B3A]">
                      <MapPin className="h-4 w-4 text-[#D99A36]" aria-hidden="true" />
                      <span>{companyProfile.addresses.corporateOffice.label}</span>
                    </p>
                    <p className="mt-1 text-[#546470]">
                      {companyProfile.addresses.corporateOffice.lines.join(", ")}
                    </p>
                  </div>
                  <div className="border-t border-[#ECEFF2] pt-4">
                    <p className="flex items-center gap-1.5 font-semibold text-[#142B3A]">
                      <MapPin className="h-4 w-4 text-[#D99A36]" aria-hidden="true" />
                      <span>{companyProfile.addresses.manufacturingWorks.label}</span>
                    </p>
                    <p className="mt-1 text-[#546470]">
                      {companyProfile.addresses.manufacturingWorks.lines.join(", ")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Integration Placeholder */}
              <div className="rounded-sm border border-dashed border-[#9DB0BE] bg-[#EEF3F6] p-6">
                <p className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[#31566D]">
                  Map Integration Placeholder
                </p>
                <p className="mt-2 text-sm text-[#202A30]">
                  Embed an interactive Google Maps iframe or static plant
                  directions map here once verified factory coordinates are
                  supplied.
                </p>
                <p className="font-mono-tech mt-3 text-xs text-[#546470]">
                  {companyProfile.addresses.corporateOffice.coordinatesPlaceholder}
                </p>
              </div>
            </aside>

            {/* Right Main Form */}
            <div className="lg:col-span-8">
              <React.Suspense
                fallback={
                  <div className="rounded-sm border border-[#DCE2E6] bg-white p-8 text-sm text-[#546470]">
                    Loading enquiry &amp; RFQ form...
                  </div>
                }
              >
                <ContactRfqForm />
              </React.Suspense>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
