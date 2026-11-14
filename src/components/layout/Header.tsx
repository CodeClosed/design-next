"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Factory, Menu, Phone, X } from "lucide-react";
import { companyProfile } from "@/content/company";
import { PageContainer } from "@/components/shared/PageContainer";
import { LinkButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Projects", href: "/projects" },
  { label: "Quality", href: "/quality" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = React.useState<string | null>(null);
  const mobileOpen = openPath === pathname;

  React.useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const isRouteActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#DCE2E6] bg-white">
      <a href="#main-content" className="skip-link visually-hidden">
        Skip to main content
      </a>

      {/* Top corporate utility bar */}
      <div className="bg-[#0E1F2B] text-xs text-[#C5D5E0]">
        <PageContainer className="flex flex-wrap items-center justify-between gap-2 py-2">
          <p className="font-mono-tech flex items-center gap-2 tracking-wide">
            <span className="inline-block h-2 w-2 rounded-full bg-[#D99A36]" aria-hidden="true" />
            <span>STARTER CORPORATE TEMPLATE · SAMPLE PLACEHOLDER DATA</span>
          </p>
          <div className="hidden items-center gap-5 sm:flex">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-[#D99A36]" aria-hidden="true" />
              <span>{companyProfile.contact.phone}</span>
            </span>
            <Link
              href="/contact?type=rfq"
              className="font-semibold text-[#D99A36] underline-offset-4 hover:underline"
            >
              Submit Technical RFQ
            </Link>
          </div>
        </PageContainer>
      </div>

      {/* Main sticky navigation bar */}
      <PageContainer className="flex h-18 items-center justify-between gap-2 xl:gap-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-[#142B3A] no-underline"
        >
          <span className="flex h-9 w-9 xl:h-10 xl:w-10 shrink-0 items-center justify-center rounded-sm bg-[#142B3A] text-[#D99A36]">
            <Factory className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-extrabold tracking-tight text-[#142B3A] xl:text-base whitespace-nowrap">
              {companyProfile.shortName}
            </span>
            <span className="font-mono-tech text-[9px] xl:text-[10px] uppercase tracking-wider text-[#546470] whitespace-nowrap">
              Sugar &amp; Process
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex lg:min-w-0 lg:items-center lg:gap-0.5 xl:gap-1">
          <ul className="flex items-center gap-0.5 xl:gap-1">
            {navigationItems.map((item) => {
              const active = isRouteActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "inline-flex min-h-10 items-center whitespace-nowrap border-b-2 px-1.5 py-2 text-xs font-medium transition-colors xl:px-2.5 xl:text-sm",
                      active
                        ? "border-[#D99A36] font-semibold text-[#142B3A]"
                        : "border-transparent text-[#31566D] hover:border-[#C6D4DE] hover:text-[#142B3A]"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden sm:block">
            <LinkButton
              href="/contact?type=rfq"
              variant="primary"
              size="sm"
              className="px-3 text-xs xl:px-3.5 xl:text-sm"
            >
              Request Quote
            </LinkButton>
          </div>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-[#DCE2E6] bg-white px-2.5 text-[#142B3A] lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-panel"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpenPath((prev) => (prev === pathname ? null : pathname))}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
            <span className="ml-1.5 text-sm font-semibold">Menu</span>
          </button>
        </div>
      </PageContainer>

      {/* Mobile navigation drawer */}
      {mobileOpen ? (
        <div
          id="mobile-navigation-panel"
          className="border-t border-[#DCE2E6] bg-white lg:hidden"
        >
          <PageContainer className="py-4">
            <nav aria-label="Mobile Primary">
              <ul className="grid gap-1">
                {navigationItems.map((item) => {
                  const active = isRouteActive(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setOpenPath(null)}
                        className={cn(
                          "flex min-h-11 items-center justify-between rounded-sm border-l-4 px-3 py-2.5 text-base font-medium",
                          active
                            ? "border-[#D99A36] bg-[#F4F7F9] font-semibold text-[#142B3A]"
                            : "border-transparent text-[#202A30] hover:bg-[#F7F8F6]"
                        )}
                      >
                        <span>{item.label}</span>
                        {active ? (
                          <span className="font-mono-tech text-xs text-[#B87D1E]">Active</span>
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-4 border-t border-[#DCE2E6] pt-4">
              <LinkButton
                href="/contact?type=rfq"
                variant="primary"
                size="md"
                className="w-full"
              >
                Request a Technical Quote
              </LinkButton>
            </div>
          </PageContainer>
        </div>
      ) : null}
    </header>
  );
}
