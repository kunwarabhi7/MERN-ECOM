import express from "express";
import dotenv from "dotenv";
import connectToDB from "./utils/db.js";
import route from "./routes/product.route.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/product", route);

app.listen(PORT, () => {
  connectToDB();
  console.log("Server is running on port", +PORT);
});
