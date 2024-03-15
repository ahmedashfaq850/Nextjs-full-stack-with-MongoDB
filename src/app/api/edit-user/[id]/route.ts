import { NextResponse, NextRequest } from "next/server";
import { User } from "@/models/user.model";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const user = await User.findById(id);
    const body = await req.json();
    if (user) {
      await User.findByIdAndUpdate(id, body);
    }
    return NextResponse.json({ message: "User Updated Successfully", user });
  } catch (err) {
    console.log("Failed to update user data", err);
  }
}
