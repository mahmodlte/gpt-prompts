import mongoose from "mongoose";

let isConnected = false;
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB is already Connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONOGDB_URI, {
      dbName: "dev_prompts",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.warn(error);
  }
};
