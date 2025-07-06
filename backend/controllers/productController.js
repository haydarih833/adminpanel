import Product from "../models/products.js";


export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
};


export const addProducts = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: "Failed to add product", err: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to update product", err: error.message });
  }
};


export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Product.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(204).end(); 
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product", err: error.message });
  }
};