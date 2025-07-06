import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { deleteProduct, editProduct } from '../../features/users/productsSlice'


const ProductDetails = ({ data, onClose }) => {
  const dispatch = useDispatch()
  const [isEdit, setIsEdit] = useState(false)

  const [formData, setFormData] = useState({
    title: data.title || '',
    price: data.price || '',
    description: data.description || '',
    color: (data.color || []).join(', '),
    size: (data.size || []).join(', '),
    gender: data.gender || '',
    category: data.category?.name || '',
  })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleUpdate = () => {
    dispatch(editProduct({
      id: data._id,
      updatedData: {
        title: formData.title,
        price: +formData.price,
        description: formData.description,
        color: formData.color.split(',').map(c => c.trim()),
        size: formData.size.split(',').map(s => s.trim()),
        gender: formData.gender,
        category: {
          name: formData.category,
        }
      }
    }))
    toast.success('Product updated!')
    setIsEdit(false)
  }

  const handleDelete = () => {
    dispatch(deleteProduct(data._id))
    toast.error('Product deleted')
    onClose()
  }

  return (
    <div className='w-full h-screen fixed top-0 left-0 bg-black bg-opacity-70 flex items-center justify-center z-50'>
      <div className='w-[800px] bg-white rounded-2xl p-10 space-y-6 shadow-lg text-black z-50'>
        <h2 className='text-2xl font-bold'>Product Details</h2>

        <div className='grid grid-cols-2 gap-6'>
          <div>
            <p>Title</p>
            {isEdit
              ? <TextField fullWidth name="title" value={formData.title} onChange={handleChange} />
              : <p>{formData.title}</p>}
          </div>
          <div>
            <p>Price</p>
            {isEdit
              ? <TextField fullWidth name="price" value={formData.price} onChange={handleChange} />
              : <p>{formData.price}</p>}
          </div>
          <div className='col-span-2'>
            <p>Description</p>
            {isEdit
              ? <TextField fullWidth name="description" value={formData.description} onChange={handleChange} multiline rows={3} />
              : <p>{formData.description}</p>}
          </div>
          <div>
            <p>Color</p>
            {isEdit
              ? <TextField fullWidth name="color" value={formData.color} onChange={handleChange} />
              : <p>{formData.color}</p>}
          </div>
          <div>
            <p>Size</p>
            {isEdit
              ? <TextField fullWidth name="size" value={formData.size} onChange={handleChange} />
              : <p>{formData.size}</p>}
          </div>
          <div>
            <p>Gender</p>
            {isEdit
              ? <TextField fullWidth name="gender" value={formData.gender} onChange={handleChange} />
              : <p>{formData.gender}</p>}
          </div>
          <div>
            <p>Category</p>
            {isEdit
              ? <TextField fullWidth name="category" value={formData.category} onChange={handleChange} />
              : <p>{formData.category}</p>}
          </div>
        </div>

        <div className='pt-6 flex justify-end gap-4'>
          {isEdit ? (
            <>
              <Button variant="contained" color="success" onClick={handleUpdate}>Save</Button>
              <Button variant="outlined" onClick={() => setIsEdit(false)}>Cancel</Button>
            </>
          ) : (
            <Button variant="outlined" onClick={() => setIsEdit(true)}>Edit</Button>
          )}
          <Button variant="outlined" color="error" onClick={handleDelete}>Delete</Button>
          <Button variant="text" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails