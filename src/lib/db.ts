import { error } from "console";
import mongoose from "mongoose";
const dbName = "users";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${dbName}`
    );
    console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
  } catch (err) {
    console.error("MongoDb Connection Failed", error);
    process.exit(1); // Exit with failure
  }
};


export default connectDB;