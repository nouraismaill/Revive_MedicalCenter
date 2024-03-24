import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoute from "./Routes/auth.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
};
app.get("/", (req, res) => {
  res.send("API is working");
});
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {});
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB connection failed");
  }
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.listen(port, () => {
  connectDB();
  console.log(`Server running on port ${port}`);
});
