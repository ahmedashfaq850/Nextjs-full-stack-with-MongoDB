import { User } from "@/models/user.model";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const usersData = await User.find({});
    if (usersData.length > 0) {
      return NextResponse.json(usersData);
    } else {
      return NextResponse.json({ message: "No Users Found" });
    }
  } catch (err) {
    console.error("Error in Fetching", err);
  }
}
