import express from "express"


const productsRouter = express.Router();

productsRouter.get('/product', getProducts)
productsRouter.post('/product', getProducts)

export default productsRouter