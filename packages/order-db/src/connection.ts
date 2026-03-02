import mongoose from "mongoose";

let isConnected = false;
const isDevelopment = process.env.NODE_ENV !== "production";

export const connectOrderDB = async () => {
  if (isConnected) return;

  if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL is not defined in env file!");
  }

  try {
    await mongoose.connect(process.env.MONGO_URL);
    isConnected = true;
    //console.log("Connected to MongoDB");
  } catch (error) {
    if (isDevelopment) console.log(error);
    throw error;
  }
};
