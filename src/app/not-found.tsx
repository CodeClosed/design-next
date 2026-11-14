import { PageContainer } from "@/components/shared/PageContainer";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-20 lg:py-28">
      <PageContainer className="max-w-2xl text-center">
        <p className="font-mono-tech text-sm font-bold tracking-widest text-[#B87D1E]">
          ERROR 404 // ROUTE NOT FOUND
        </p>
        <h1 className="mt-3 text-3xl font-extrabold text-[#142B3A] sm:text-4xl">
          The requested technical page could not be located.
        </h1>
        <p className="mt-4 text-base text-[#546470]">
          The equipment slug or page path may have changed. Return to the main
          corporate overview or browse our full equipment catalogue.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <LinkButton href="/" variant="primary" size="md">
            Return Home
          </LinkButton>
          <LinkButton href="/products" variant="outline" size="md">
            Browse Products
          </LinkButton>
        </div>
      </PageContainer>
    </section>
  );
}
