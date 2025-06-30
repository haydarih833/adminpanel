import { Router } from 'express';
const router = Router();
import Product, { find, findByIdAndUpdate, findByIdAndDelete } from '../models/product';

// GET all products
router.get('/', async (req, res) => {
  const products = await find();
  res.json(products);
});

// POST new product
router.post('/', async (req, res) => {
  const product = new Product(req.body);
  const saved = await product.save();
  res.status(201).json(saved);
});

// PUT update product
router.put('/:id', async (req, res) => {
  const updated = await findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE product
router.delete('/:id', async (req, res) => {
  await findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
});

export default router;
