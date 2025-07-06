import express from "express";
import { addProducts, deleteProduct, getProducts, updateProduct } from "../controllers/productController.js";

const productsRouter = express.Router();

productsRouter.get('/', getProducts);
productsRouter.post('/', addProducts);
productsRouter.put('/:id', updateProduct);
productsRouter.delete('/:id', deleteProduct);


export default productsRouter;