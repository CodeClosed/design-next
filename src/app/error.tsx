"use client";

import * as React from "react";
import { PageContainer } from "@/components/shared/PageContainer";
import { Button, LinkButton } from "@/components/ui/Button";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="py-20 lg:py-28">
      <PageContainer className="max-w-2xl text-center">
        <p className="font-mono-tech text-sm font-bold tracking-widest text-[#A12B2B]">
          UNEXPECTED APPLICATION ERROR
        </p>
        <h1 className="mt-3 text-3xl font-extrabold text-[#142B3A]">
          Unable to load this section right now.
        </h1>
        <p className="mt-4 text-base text-[#546470]">
          An unexpected rendering error occurred. You can retry loading the view
          or return to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" size="md" onClick={() => reset()}>
            Retry View
          </Button>
          <LinkButton href="/" variant="outline" size="md">
            Return Home
          </LinkButton>
        </div>
      </PageContainer>
    </section>
  );
}
