"use client";

import * as React from "react";
import { FileUp, Paperclip, Trash2 } from "lucide-react";
import {
  ALLOWED_SPEC_EXTENSIONS,
  MAX_SPEC_FILE_BYTES,
  validateSpecificationFile,
} from "@/lib/validations/enquiry";

export interface FileUploadFieldProps {
  file: File | null;
  onFileSelect: (file: File | null) => void;
  error?: string;
  onValidationError?: (message: string | undefined) => void;
}

export function FileUploadField({
  file,
  onFileSelect,
  error,
  onValidationError,
}: FileUploadFieldProps) {
  const inputId = React.useId();
  const helpId = `${inputId}-help`;
  const errorId = `${inputId}-error`;
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files?.[0] ?? null;
    if (!selected) {
      onFileSelect(null);
      onValidationError?.(undefined);
      return;
    }

    const result = validateSpecificationFile({
      name: selected.name,
      size: selected.size,
      type: selected.type,
    });

    if (!result.valid) {
      onFileSelect(null);
      onValidationError?.(result.error);
      if (inputRef.current) inputRef.current.value = "";
      return;
    }

    onValidationError?.(undefined);
    onFileSelect(selected);
  };

  const handleClear = () => {
    onFileSelect(null);
    onValidationError?.(undefined);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="block text-sm font-semibold text-[#142B3A]">
        Technical Specification / GA Drawing Attachment (Optional)
      </label>
      <p id={helpId} className="text-xs text-[#546470]">
        Accepted formats: {ALLOWED_SPEC_EXTENSIONS.join(", ")} · Max size:{" "}
        {Math.round(MAX_SPEC_FILE_BYTES / (1024 * 1024))} MB
      </p>

      <div className="flex flex-col gap-3 rounded-sm border border-dashed border-[#9DB0BE] bg-[#FAFBFD] p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#E8EFF4] text-[#142B3A]">
            <FileUp className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="text-xs">
            <p className="font-semibold text-[#142B3A]">
              Attach RFQ specification sheet, P&amp;ID, or layout drawing
            </p>
            <p className="text-[#546470]">Validated both client-side and server-side.</p>
          </div>
        </div>

        <input
          ref={inputRef}
          id={inputId}
          name="attachment"
          type="file"
          accept={ALLOWED_SPEC_EXTENSIONS.join(",")}
          aria-describedby={error ? `${helpId} ${errorId}` : helpId}
          aria-invalid={Boolean(error)}
          onChange={handleFileChange}
          className="block w-full max-w-xs cursor-pointer text-xs text-[#202A30] file:mr-3 file:cursor-pointer file:rounded-sm file:border-0 file:bg-[#142B3A] file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-[#31566D]"
        />
      </div>

      {file ? (
        <div className="flex items-center justify-between gap-3 rounded-sm border border-[#C6D4DE] bg-white px-3 py-2 text-xs">
          <div className="flex items-center gap-2 text-[#142B3A]">
            <Paperclip className="h-4 w-4 text-[#31566D]" aria-hidden="true" />
            <span className="font-medium">{file.name}</span>
            <span className="font-mono-tech text-[#546470]">
              ({Math.max(1, Math.round(file.size / 1024))} KB)
            </span>
          </div>
          <button
            type="button"
            onClick={handleClear}
            className="inline-flex items-center gap-1 font-semibold text-[#A12B2B] hover:underline"
          >
            <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Remove</span>
          </button>
        </div>
      ) : null}

      {error ? (
        <p id={errorId} className="text-xs font-medium text-[#A12B2B]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
