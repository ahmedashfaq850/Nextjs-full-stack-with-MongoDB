import { NextResponse, NextRequest } from "next/server";
import { User } from "@/models/user.model";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const userData = await User.create(body);
    return NextResponse.json({ userData });
  } catch (err) {
    console.log("Failed to create user", err);
  }
}
