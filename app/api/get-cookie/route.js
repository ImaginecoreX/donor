import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookiesStore = cookies();

  const email = cookiesStore.get("email").value;
  const password =cookiesStore.get("password").value;

  return NextResponse.json({
   email,
   password
  });
}
