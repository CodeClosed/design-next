import { PageContainer } from "@/components/shared/PageContainer";

export default function Loading() {
  return (
    <section className="py-16" aria-busy="true" aria-label="Loading page content">
      <PageContainer>
        <div className="space-y-6">
          <div className="h-8 w-64 animate-pulse rounded-sm bg-[#DCE2E6]" />
          <div className="h-4 w-96 max-w-full animate-pulse rounded-sm bg-[#E7EDF1]" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="h-64 animate-pulse rounded-sm bg-white border border-[#DCE2E6]" />
            <div className="h-64 animate-pulse rounded-sm bg-white border border-[#DCE2E6]" />
            <div className="h-64 animate-pulse rounded-sm bg-white border border-[#DCE2E6]" />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
