import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("success users")
        window.location.href = '/users'
      }
      if (!res.ok) {
        setError(data.message || "Error")
        return;
      }
    } catch (err) {
      setError("خطا در اتصال به سرور");
    }
  };

  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center justify-center'>
      <form
        onSubmit={handleSubmit}
        className='w-11/12 max-w-2xl bg-white rounded-2xl p-10 text-xl grid gap-6'
      >
        <h2 className='text-3xl font-bold text-center mb-5'>SignUp</h2>

        <TextField
          name="name"
          label="Name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <TextField
          name="email"
          label="Email"
          variant="outlined"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <TextField
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <div className='flex justify-between pt-4'>
          <Button type="submit" variant='contained' color='primary'>confirm</Button>
          <Button variant='outlined' color='error' onClick={() => window.location.href = '/users'}>cancel</Button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;