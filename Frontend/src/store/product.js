import { create } from "zustand";

export const useProductStore = create((set) => ({
  product: [],
  setProduct: (product) => set({ product }),

  createProduct: async (newProduct) => {
    if (!newProduct.name || newProduct.image || newProduct.price) {
      return { success: false, message: "Please fill all the information" };
    }

    try {
      //send the new product to the API
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      // handle API response
      if (!res.ok) {
        const errorData = await res.json();
        return {
          success: false,
          message: errorData.message || "Failed to create product",
        };
      }
      const data = await res.json();

      // update state
      set((state) => ({ product: [...state.product, data] }));
      return {
        success: false,
        message: "An error occured while creating the product",
      };
    } catch (error) {
      console.error(error.message);
      return {
        success: false,
        message: "An error occurred while creating the product",
      };
    }
  },
}));
