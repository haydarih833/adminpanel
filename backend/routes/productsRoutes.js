import express from "express"
import { addProducts, getProducts } from "../controllers/productController.js";


const productsRouter = express.Router();

productsRouter.get('/', getProducts)
productsRouter.post('/',addProducts )

export default productsRouter