import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteUser, editUser } from '../../features/users/usersSlice';

function Details({ data, onClose }) {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const [formData, setFormData] = useState({
    name: data.name || '',
    username: data.username || '',
    email: data.email || '',
    address: data.address?.city || '',
    phone: data.phone || '',
    company: data.company?.name || '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = () => {
    dispatch(editUser({
      id: data._id,
      updatedData: {
        name: formData.name,
        username: formData.username,
        email: formData.email,
        address: { city: formData.address },
        phone: formData.phone,
        company: { name: formData.company },
      }
    }));
    toast.success('User updated!');
    setIsEdit(false);
  };

  const handleDelete = () => {
    dispatch(deleteUser(data._id));
    toast.error('User deleted');
    onClose();
  };

  return (
    <div className="w-full h-screen bg-zinc-900 bg-opacity-80 fixed top-0 left-0 pt-5 z-50 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl p-6 md:p-8 text-base md:text-xl shadow-xl relative space-y-5 text-black overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">User Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['name', 'username', 'email', 'address', 'phone', 'company'].map((field, idx) => (
            <div key={idx}>
              <p className="mb-1 capitalize font-medium text-gray-800">{field}</p>
              {isEdit ? (
                <TextField
                  fullWidth
                  variant="outlined"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                />
              ) : (
                <p className="text-gray-700 break-words">{formData[field]}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-end gap-3 pt-6">
          {isEdit ? (
            <>
              <Button variant="contained" color="success" onClick={handleUpdate}>
                Save
              </Button>
              <Button variant="outlined" onClick={() => setIsEdit(false)}>
                Cancel
              </Button>
            </>
          ) : (
            <Button variant="outlined" onClick={() => setIsEdit(true)}>
              Edit
            </Button>
          )}
          <Button variant="outlined" color="error" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="text" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Details;