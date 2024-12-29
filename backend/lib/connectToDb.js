import mongoose from "mongoose";

export default async function connectToDb() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully", conn.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
