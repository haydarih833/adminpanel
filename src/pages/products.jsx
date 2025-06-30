import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../features/products/productsSlice';
import ProductForm from '../components/ProductForm';
import ModalForm from '../components/ModalForm';

const Products = () => {
  const products = useSelector(state => state.products.list);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsOpen(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">مدیریت محصولات</h1>
        <button
          onClick={() => {
            setEditingProduct(null);
            setIsOpen(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          افزودن محصول
        </button>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">نام</th>
            <th className="p-2">قیمت</th>
            <th className="p-2">دسته‌بندی</th>
            <th className="p-2">موجودی</th>
            <th className="p-2">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id} className="text-center border-t">
              <td className="p-2">{p.name}</td>
              <td className="p-2">{p.price}</td>
              <td className="p-2">{p.category}</td>
              <td className="p-2">{p.inStock ? '✔️' : '❌'}</td>
              <td className="p-2 space-x-2">
                <button onClick={() => handleEdit(p)} className="bg-yellow-500 text-white px-2 py-1 rounded">ویرایش</button>
                <button onClick={() => handleDelete(p.id)} className="bg-red-600 text-white px-2 py-1 rounded">حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalForm isOpen={isOpen} setIsOpen={setIsOpen}>
        <ProductForm setIsOpen={setIsOpen} editingProduct={editingProduct} />
      </ModalForm>
    </div>
  );
};

export default Products;
