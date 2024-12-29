import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import connectToDb from "./lib/connectToDb.js";
import cookieParser from "cookie-parser";
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToDb();
  console.log("Server is running on", PORT);
});
