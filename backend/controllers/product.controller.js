import mongoose from "mongoose";
import { Product } from "../models/product.model.js";

export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ message: "Success", Products: products });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const addProduct = async (req, res) => {
  try {
    const { name, price, imageUrl } = req.body;
    //check for field
    if (!name || !price || !imageUrl) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newProduct = new Product({ name, price, imageUrl });
    await newProduct.save();
    res
      .status(201)
      .json({ message: "Product added successfully", products: newProduct });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, imageUrl } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Invalid id" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { price, imageUrl, name },
      { new: true }
    );
    res.status(200).json({
      message: "Product updated successfully",
      products: updatedProduct,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Invalid id" });
  }
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
};
