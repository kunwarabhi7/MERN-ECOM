import express from "express";
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
} from "../controllers/product.controller.js";

const route = express.Router();
//get all products
route.get("/", getAllProduct);

//add products
route.post("/products", addProduct);

//update products
route.put("/products", updateProduct);

//delete products
route.delete("/products", deleteProduct);
export default route;
