import connectDB from "@/lib/db";
import { User } from "@/models/user.model";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    await connectDB();
    const usersData = await User.find({});
    if ((await usersData).length > 0) {
      return NextResponse.json(usersData);
    } else {
      return NextResponse.json({ message: "No Users Found" });
    }
  } catch (err) {
    console.error("Error in Fetching", err);
  }
}
