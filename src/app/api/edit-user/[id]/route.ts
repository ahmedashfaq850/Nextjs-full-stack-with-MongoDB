import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/lib/db";
import { User } from "@/models/user.model";
import { NextApiRequest, NextApiResponse } from "next";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
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
