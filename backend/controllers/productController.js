import Products from "../models/products.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Products.find();
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch products" })
    }
}

export const addProducts = async (req, res) => {
    try {
        const newProduct = new Products(req.body)
        const saved = await newProduct.save();
        res.status(201).json(saved)
    } catch (error) {
        res.status(500).json({ message: "failed to add product", err: error.message })
    }
}