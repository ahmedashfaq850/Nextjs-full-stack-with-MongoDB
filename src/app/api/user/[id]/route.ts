import { NextResponse, NextRequest  } from "next/server";
import { User } from "@/models/user.model";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await User.findById(params.id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (err) {
    console.log("Failed to Fetch User Data", err);
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await User.findById(params.id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    if (user) {
      await User.findByIdAndDelete(user._id);
      return NextResponse.json(
        { message: "User deleted successfully" },
        { status: 200 }
      );
    }
  } catch (err) {
    console.log("Failed to delete user data", err);
  }
}
