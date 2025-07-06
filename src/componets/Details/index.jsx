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
    <div className="w-full h-screen bg-zinc-900 bg-opacity-80 fixed top-0 left-0 pt-5 z-50 flex items-center justify-center">
      <div className="w-[800px] bg-white rounded-2xl p-8 text-xl shadow-xl relative space-y-5">
        <h2 className="text-2xl font-bold mb-4">User Details</h2>

        <div className="grid grid-cols-2 gap-6">
          {['name', 'username', 'email', 'address', 'phone', 'company'].map((field, idx) => (
            <div key={idx}>
              <p className="mb-1 capitalize">{field}</p>
              {isEdit ? (
                <TextField
                  fullWidth
                  variant="outlined"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                />
              ) : (
                <p className="text-gray-700">{formData[field]}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-4 pt-6">
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