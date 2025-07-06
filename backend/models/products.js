import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  images: [String],
  color: [String],
  size: [String],
  gender: {
    type: String,
    enum: ["Male", "Female", "Unisex"],
    default: "Unisex",
  },
  category: {
    id: Number,
    name: String,
  },
}, { timestamps: true }); 

const Product = mongoose.model("Products", productSchema);
export default Product;