"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import {
  enquiryFormSchema,
  type EnquiryFormValues,
} from "@/lib/validations/enquiry";
import { getAllProducts } from "@/content/products";
import type { EnquiryResponse } from "@/types/content";
import { Button } from "@/components/ui/Button";
import { FileUploadField } from "@/components/forms/FileUploadField";
import { FormStatusAlert } from "@/components/forms/FormStatusAlert";
import { cn } from "@/lib/utils";

export function ContactRfqForm() {
  const searchParams = useSearchParams();
  const products = getAllProducts();

  const initialType =
    searchParams?.get("type") === "general" ? "general" : "rfq";
  const initialProduct = searchParams?.get("product") || "";

  const [attachment, setAttachment] = React.useState<File | null>(null);
  const [attachmentError, setAttachmentError] = React.useState<string | undefined>();
  const [serverResponse, setServerResponse] = React.useState<EnquiryResponse | null>(null);

  const formHeadingId = React.useId();

  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquiryFormSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      enquiryType: initialType,
      fullName: "",
      companyName: "",
      designation: "",
      email: "",
      phone: "",
      country: "",
      productSlug: initialProduct,
      capacityRequirement: "",
      projectTimeline: "",
      message: "",
      honeypot: "",
    },
  });

  React.useEffect(() => {
    const paramProduct = searchParams?.get("product");
    const paramType = searchParams?.get("type");
    if (paramProduct) {
      setValue("productSlug", paramProduct);
      setValue("enquiryType", "rfq");
    } else if (paramType === "general" || paramType === "rfq") {
      setValue("enquiryType", paramType);
    }
  }, [searchParams, setValue]);

  const enquiryType = useWatch({ control, name: "enquiryType" });

  const onSubmit = async (values: EnquiryFormValues) => {
    if (attachmentError) return;
    setServerResponse(null);

    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, val]) => {
        if (typeof val === "string") {
          formData.append(key, val);
        }
      });
      if (attachment) {
        formData.append("attachment", attachment);
      }

      const res = await fetch("/api/enquiry", {
        method: "POST",
        body: formData,
      });

      const payload = (await res.json()) as EnquiryResponse;
      setServerResponse(payload);

      if (!res.ok) {
        if (payload.fieldErrors) {
          Object.entries(payload.fieldErrors).forEach(([field, msgs]) => {
            const firstMsg = msgs?.[0];
            if (!firstMsg) return;
            if (field === "attachment") {
              setAttachmentError(firstMsg);
            } else if (field in values) {
              setError(field as keyof EnquiryFormValues, {
                type: "server",
                message: firstMsg,
              });
            }
          });
        }
        return;
      }

      reset({
        enquiryType: values.enquiryType,
        fullName: "",
        companyName: "",
        designation: "",
        email: "",
        phone: "",
        country: "",
        productSlug: "",
        capacityRequirement: "",
        projectTimeline: "",
        message: "",
        honeypot: "",
      });
      setAttachment(null);
      setAttachmentError(undefined);
    } catch {
      setServerResponse({
        success: false,
        message: "Network error while submitting your enquiry. Please try again.",
      });
    }
  };

  return (
    <div className="rounded-sm border border-[#DCE2E6] bg-white p-6 sm:p-8">
      <h2 id={formHeadingId} className="text-2xl font-bold text-[#142B3A]">
        Submit Commercial Enquiry or Technical RFQ
      </h2>
      <p className="mt-1.5 text-sm text-[#546470]">
        Required fields are marked with <span aria-hidden="true">*</span>. Your submission is
        validated on both client and server.
      </p>

      <div className="mt-5">
        <FormStatusAlert response={serverResponse} />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-labelledby={formHeadingId}
        className="mt-6 space-y-6"
      >
        {/* Mutually exclusive radio selection (2 options -> visible radios per modern-web-guidance) */}
        <fieldset className="space-y-2.5 rounded-sm border border-[#DCE2E6] bg-[#FAFBFD] p-4">
          <legend className="px-1 text-sm font-semibold text-[#142B3A]">
            Enquiry Type <span aria-hidden="true">*</span>
          </legend>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label
              htmlFor="enquiryType-rfq"
              className={cn(
                "flex min-h-12 cursor-pointer items-center gap-3 rounded-sm border px-4 py-2.5 text-sm font-medium transition-colors",
                enquiryType === "rfq"
                  ? "border-[#142B3A] bg-white font-semibold text-[#142B3A]"
                  : "border-[#DCE2E6] bg-transparent text-[#546470]"
              )}
            >
              <input
                id="enquiryType-rfq"
                type="radio"
                value="rfq"
                className="h-4 w-4 accent-[#142B3A]"
                {...register("enquiryType")}
              />
              <span>Technical Request for Quotation (RFQ)</span>
            </label>

            <label
              htmlFor="enquiryType-general"
              className={cn(
                "flex min-h-12 cursor-pointer items-center gap-3 rounded-sm border px-4 py-2.5 text-sm font-medium transition-colors",
                enquiryType === "general"
                  ? "border-[#142B3A] bg-white font-semibold text-[#142B3A]"
                  : "border-[#DCE2E6] bg-transparent text-[#546470]"
              )}
            >
              <input
                id="enquiryType-general"
                type="radio"
                value="general"
                className="h-4 w-4 accent-[#142B3A]"
                {...register("enquiryType")}
              />
              <span>General / Corporate Enquiry</span>
            </label>
          </div>
        </fieldset>

        {/* Contact Details */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="fullName" className="mb-1.5 block text-sm font-semibold text-[#142B3A]">
              Full Name <span aria-hidden="true">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              required
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className="form-control w-full rounded-sm border border-[#B9C6D0] bg-white px-3.5 py-2.5 text-sm text-[#202A30]"
              {...register("fullName")}
            />
            {errors.fullName ? (
              <p id="fullName-error" className="mt-1 text-xs font-medium text-[#A12B2B]" role="alert">
                {errors.fullName.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="companyName" className="mb-1.5 block text-sm font-semibold text-[#142B3A]">
              Company / Sugar Mill Name <span aria-hidden="true">*</span>
            </label>
            <input
              id="companyName"
              type="text"
              autoComplete="organization"
              required
              aria-invalid={Boolean(errors.companyName)}
              aria-describedby={errors.companyName ? "companyName-error" : undefined}
              className="form-control w-full rounded-sm border border-[#B9C6D0] bg-white px-3.5 py-2.5 text-sm text-[#202A30]"
              {...register("companyName")}
            />
            {errors.companyName ? (
              <p id="companyName-error" className="mt-1 text-xs font-medium text-[#A12B2B]" role="alert">
                {errors.companyName.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="designation" className="mb-1.5 block text-sm font-semibold text-[#142B3A]">
              Designation / Department
            </label>
            <input
              id="designation"
              type="text"
              autoComplete="organization-title"
              placeholder="e.g., Chief Engineer, Procurement Manager"
              className="form-control w-full rounded-sm border border-[#B9C6D0] bg-white px-3.5 py-2.5 text-sm text-[#202A30]"
              {...register("designation")}
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-[#142B3A]">
              Corporate Email <span aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              autoCorrect="off"
              autoCapitalize="none"
              spellCheck={false}
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="form-control w-full rounded-sm border border-[#B9C6D0] bg-white px-3.5 py-2.5 text-sm text-[#202A30]"
              {...register("email")}
            />
            {errors.email ? (
              <p id="email-error" className="mt-1 text-xs font-medium text-[#A12B2B]" role="alert">
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-[#142B3A]">
              Phone / Mobile Number <span aria-hidden="true">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className="form-control w-full rounded-sm border border-[#B9C6D0] bg-white px-3.5 py-2.5 text-sm text-[#202A30]"
              {...register("phone")}
            />
            {errors.phone ? (
              <p id="phone-error" className="mt-1 text-xs font-medium text-[#A12B2B]" role="alert">
                {errors.phone.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="country" className="mb-1.5 block text-sm font-semibold text-[#142B3A]">
              Country / Plant Location <span aria-hidden="true">*</span>
            </label>
            <input
              id="country"
              type="text"
              autoComplete="country-name"
              required
              aria-invalid={Boolean(errors.country)}
              aria-describedby={errors.country ? "country-error" : undefined}
              className="form-control w-full rounded-sm border border-[#B9C6D0] bg-white px-3.5 py-2.5 text-sm text-[#202A30]"
              {...register("country")}
            />
            {errors.country ? (
              <p id="country-error" className="mt-1 text-xs font-medium text-[#A12B2B]" role="alert">
                {errors.country.message}
              </p>
            ) : null}
          </div>
        </div>

        {/* RFQ Equipment & Plant Sizing Parameters */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="sm:col-span-3">
            <label htmlFor="productSlug" className="mb-1.5 block text-sm font-semibold text-[#142B3A]">
              Equipment / Product Selection {enquiryType === "rfq" ? <span aria-hidden="true">*</span> : null}
            </label>
            <select
              id="productSlug"
              required={enquiryType === "rfq"}
              aria-invalid={Boolean(errors.productSlug)}
              aria-describedby={errors.productSlug ? "productSlug-error" : undefined}
              className="form-control w-full rounded-sm border border-[#B9C6D0] bg-white px-3.5 py-2.5 text-sm text-[#202A30]"
              {...register("productSlug")}
            >
              <option value="">-- Select Equipment --</option>
              {products.map((prod) => (
                <option key={prod.id} value={prod.slug}>
                  [{prod.modelCode}] {prod.name}
                </option>
              ))}
              <option value="custom-process-system">
                Other / Custom Process System or Spare Parts
              </option>
            </select>
            {errors.productSlug ? (
              <p id="productSlug-error" className="mt-1 text-xs font-medium text-[#A12B2B]" role="alert">
                {errors.productSlug.message}
              </p>
            ) : null}
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="capacityRequirement"
              className="mb-1.5 block text-sm font-semibold text-[#142B3A]"
            >
              Target Plant Capacity / Duty (Optional)
            </label>
            <input
              id="capacityRequirement"
              type="text"
              placeholder="e.g., 5,000 TCD crushing / 3,500 m² HSA"
              className="form-control w-full rounded-sm border border-[#B9C6D0] bg-white px-3.5 py-2.5 text-sm text-[#202A30]"
              {...register("capacityRequirement")}
            />
          </div>

          <div>
            <label
              htmlFor="projectTimeline"
              className="mb-1.5 block text-sm font-semibold text-[#142B3A]"
            >
              Target Off-Season / Schedule
            </label>
            <input
              id="projectTimeline"
              type="text"
              placeholder="e.g., Q3 2027"
              className="form-control w-full rounded-sm border border-[#B9C6D0] bg-white px-3.5 py-2.5 text-sm text-[#202A30]"
              {...register("projectTimeline")}
            />
          </div>
        </div>

        {/* Technical Message */}
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-[#142B3A]">
            Technical Scope &amp; Enquiry Details <span aria-hidden="true">*</span>
          </label>
          <p id="message-help" className="mb-1.5 text-xs text-[#546470]">
            Include steam/vapor parameters, greenfield vs. retrofit context, or specific spare part needs (min. 15 characters).
          </p>
          <textarea
            id="message"
            rows={5}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-help message-error" : "message-help"}
            className="w-full rounded-sm border border-[#B9C6D0] bg-white p-3.5 text-base text-[#202A30]"
            {...register("message")}
          />
          {errors.message ? (
            <p id="message-error" className="mt-1 text-xs font-medium text-[#A12B2B]" role="alert">
              {errors.message.message}
            </p>
          ) : null}
        </div>

        {/* File attachment */}
        <FileUploadField
          file={attachment}
          onFileSelect={setAttachment}
          error={attachmentError}
          onValidationError={setAttachmentError}
        />

        {/* Accessible Honeypot field hidden from screen readers and tab order */}
        <div className="visually-hidden" aria-hidden="true">
          <label htmlFor="company-website-hp">Leave this field blank</label>
          <input
            id="company-website-hp"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("honeypot")}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#ECEFF2] pt-5">
          <p className="text-xs text-[#546470]">
            Protected by rate limiting and dual-layer validation.
          </p>
          <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
            <Send className="h-4 w-4" aria-hidden="true" />
            <span>
              {isSubmitting
                ? "Validating & Submitting..."
                : enquiryType === "rfq"
                  ? "Submit Technical RFQ"
                  : "Send Corporate Enquiry"}
            </span>
          </Button>
        </div>
      </form>
    </div>
  );
}
