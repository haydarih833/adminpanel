import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addProduct, editProduct } from '../features/products/productsSlice';
import { toast } from 'react-toastify';

const ProductForm = ({ setIsOpen, editingProduct }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    if (editingProduct) {
      setValue('name', editingProduct.name);
      setValue('price', editingProduct.price);
      setValue('category', editingProduct.category);
      setValue('inStock', editingProduct.inStock);
    }
  }, [editingProduct]);

  const onSubmit = (data) => {
    const product = {
      id: editingProduct ? editingProduct.id : Date.now(),
      name: data.name,
      price: Number(data.price),
      category: data.category,
      inStock: data.inStock === 'true' || data.inStock === true
    };

    if (editingProduct) {
      dispatch(editProduct(product));
      toast.info('🛠 Product updated');
    } else {
      dispatch(addProduct(product));
      toast.success('✅ Product added');
    }

    reset();
    setIsOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register('name', { required: 'Product name is required' })}
        placeholder="Product Name"
        className="w-full border p-2 rounded"
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

      <input
        {...register('price', { required: 'Price is required' })}
        placeholder="Price"
        type="number"
        className="w-full border p-2 rounded"
      />
      {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}

      <input
        {...register('category', { required: 'Category is required' })}
        placeholder="Category"
        className="w-full border p-2 rounded"
      />
      {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}

      <select {...register('inStock')} className="w-full border p-2 rounded">
        <option value="true">In Stock</option>
        <option value="false">Out of Stock</option>
      </select>

      <button
        type="submit"
        className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
      >
        {editingProduct ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  );
};

export default ProductForm;
