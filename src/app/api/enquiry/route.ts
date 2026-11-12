import { NextResponse } from "next/server";

interface EnquiryPayload {
  name?: string;
  phone?: string;
  email?: string;
  propertyInterest?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EnquiryPayload;

    const name = body.name?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const propertyInterest = body.propertyInterest?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    const fieldErrors: Record<string, string> = {};

    if (name.length < 2) {
      fieldErrors.name = "Please enter your full name.";
    }
    if (phone.replace(/\D/g, "").length < 7) {
      fieldErrors.phone = "Please enter a valid contact phone number.";
    }
    if (!EMAIL_PATTERN.test(email)) {
      fieldErrors.email = "Please enter a valid email address.";
    }
    if (!propertyInterest) {
      fieldErrors.propertyInterest = "Please select a property or enquiry focus.";
    }
    if (message.length < 10) {
      fieldErrors.message = "Please include a short message (at least 10 characters).";
    }

    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        {
          ok: false,
          mode: "validation_error",
          message: "Please review the highlighted fields before submitting.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        {
          ok: false,
          mode: "unconfigured",
          message:
            "Your enquiry passed validation, but no live backend webhook is connected yet. Connect ENQUIRY_WEBHOOK_URL in .env.local (or send your enquiry directly via WhatsApp below).",
        },
        { status: 200 }
      );
    }

    const upstreamResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "GreenSky Homes Website",
        submittedAt: new Date().toISOString(),
        name,
        phone,
        email,
        propertyInterest,
        message,
      }),
    });

    if (!upstreamResponse.ok) {
      return NextResponse.json(
        {
          ok: false,
          mode: "upstream_error",
          message:
            "We could not reach the enquiry service right now. Please try again or reach us directly via WhatsApp.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      mode: "forwarded",
      message:
        "Thank you. Your enquiry has been received by the GreenSky Homes team, and we will respond shortly.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        mode: "bad_request",
        message: "Unable to process your enquiry request. Please check your input and try again.",
      },
      { status: 400 }
    );
  }
}
