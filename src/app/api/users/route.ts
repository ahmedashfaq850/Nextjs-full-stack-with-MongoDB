import { User } from "@/models/user.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const usersData = await User.find({});
    if (usersData.length > 0) {
      return NextResponse.json(usersData);
    } else {
      return NextResponse.json(
        "No Users Found",
        { status: 404 }
      );
    }
  } catch (err) {
    console.error("Error in Fetching", err);
    return NextResponse.json(
      "Internal Server Error",
      { status: 500 }
    );
  }
}
