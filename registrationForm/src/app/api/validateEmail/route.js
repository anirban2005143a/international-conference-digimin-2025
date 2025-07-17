import { NextResponse } from "next/server";
import dns from "dns/promises";

export async function POST(request) {
  const { email } = await request.json();
  console.log(email);
  // Step 1: Syntax check
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    return NextResponse.json({ valid: false, reason: "Invalid email format" });
  }

  // Step 2: MX record check
  const domain = email.split("@")[1];

  try {
    const mxRecords = await dns.resolveMx(domain);
    if (mxRecords.length > 0) {
      console.log("valid email");
      return NextResponse.json(
        {
          valid: true,
          reason: "Valid email with MX records",
        },
        { status: 200 }
      );
    } else {
      console.log("No MX records found");
      return NextResponse.json(
        { valid: false, reason: "No MX records found" },
        {
          status: 400,
        }
      );
    }
  } catch (error) {
    console.log("Domain lookup failed or unreachable");

    return NextResponse.json(
      {
        valid: false,
        reason: "Domain lookup failed or unreachable",
      },
      { status: 400 }
    );
  }
}
