import Link from "next/link";
import { Factory, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { companyProfile } from "@/content/company";
import { productCategories } from "@/content/products";
import { PageContainer } from "@/components/shared/PageContainer";

export function Footer() {
  const whatsappUrl = `https://wa.me/${companyProfile.contact.whatsappNumber}?text=${encodeURIComponent(
    companyProfile.contact.whatsappMessage
  )}`;

  return (
    <footer className="border-t border-[#1F3D50] bg-[#0E1F2B] text-[#C5D5E0]">
      <PageContainer className="py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Company Summary */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#142B3A] border border-[#31566D] text-[#D99A36]">
                <Factory className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-base font-bold text-white">{companyProfile.name}</p>
                <p className="font-mono-tech text-[11px] uppercase tracking-wider text-[#D99A36]">
                  Industrial Template
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#A9C1D1]">
              {companyProfile.description}
            </p>
            <p className="mt-4 rounded-sm border border-[#31566D] bg-[#142B3A] px-3 py-2 text-xs text-[#E4ECF1]">
              {companyProfile.templateNotice}
            </p>
          </div>

          {/* Column 2: Corporate Links */}
          <div className="lg:col-span-2">
            <h2 className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-white">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#D99A36] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-[#D99A36] transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#D99A36] transition-colors">
                  Projects &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-[#D99A36] transition-colors">
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#D99A36] transition-colors">
                  Technical Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Equipment Categories */}
          <div className="lg:col-span-3">
            <h2 className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-white">
              Equipment Scope
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/products" className="hover:text-[#D99A36] transition-colors">
                  All Equipment Catalogue
                </Link>
              </li>
              {productCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.id}`}
                    className="hover:text-[#D99A36] transition-colors"
                  >
                    {cat.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/industries" className="hover:text-[#D99A36] transition-colors">
                  Industries Served
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & RFQ */}
          <div className="lg:col-span-3">
            <h2 className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-white">
              Contact &amp; Enquiries
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D99A36]" aria-hidden="true" />
                <span>{companyProfile.addresses.manufacturingWorks.lines.join(", ")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#D99A36]" aria-hidden="true" />
                <span>{companyProfile.contact.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#D99A36]" aria-hidden="true" />
                <a
                  href={`mailto:${companyProfile.contact.salesEmail}`}
                  className="break-all hover:text-[#D99A36]"
                >
                  {companyProfile.contact.salesEmail}
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-[#31566D] bg-[#142B3A] px-3 py-2 text-xs font-semibold text-white hover:border-[#D99A36] hover:text-[#D99A36]"
                >
                  <MessageSquare className="h-4 w-4 text-[#D99A36]" aria-hidden="true" />
                  <span>WhatsApp Enquiry [Placeholder]</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </PageContainer>

      <div className="border-t border-[#1B3344] bg-[#0A1720]">
        <PageContainer className="flex flex-col items-start justify-between gap-3 py-5 text-xs text-[#8FAAC0] sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {companyProfile.legalName}. Starter Website Template.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
            <Link href="/contact" className="hover:text-white">
              Submit RFQ
            </Link>
          </div>
        </PageContainer>
      </div>
    </footer>
  );
}
