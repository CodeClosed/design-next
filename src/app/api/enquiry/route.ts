import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/services/rate-limit";
import { submitEnquiry } from "@/lib/services/enquiry";

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "local-client";
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(ip);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        success: false,
        message: `Too many enquiry attempts from this IP. Please retry in ${rateLimit.retryAfterSeconds ?? 60} seconds.`,
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimit.retryAfterSeconds ?? 60),
        },
      }
    );
  }

  try {
    const contentType = request.headers.get("content-type") || "";
    const fields: Record<string, unknown> = {};
    let attachment: { name: string; size: number; type?: string } | null = null;

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      for (const [key, value] of formData.entries()) {
        if (key === "attachment" && value instanceof File && value.size > 0) {
          attachment = {
            name: value.name,
            size: value.size,
            type: value.type,
          };
        } else if (typeof value === "string") {
          fields[key] = value;
        }
      }
    } else if (contentType.includes("application/json")) {
      const json = (await request.json()) as Record<string, unknown>;
      Object.assign(fields, json);
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Unsupported Content-Type. Expected multipart/form-data or application/json.",
        },
        { status: 415 }
      );
    }

    const result = await submitEnquiry({ fields, attachment });
    return NextResponse.json(result.body, { status: result.status });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to parse enquiry payload. Please verify your submission and try again.",
      },
      { status: 400 }
    );
  }
}
