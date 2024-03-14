import mongoose, { Schema } from "mongoose";

export interface IUser {
  _id: string;
  username: string;
  designation: string;
}

const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create and export the User model
export const User =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
