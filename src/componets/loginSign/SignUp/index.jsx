import { Button, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

function SignInPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!res.ok) {
        const result = await res.json();
        toast.info(result.message || "Signup failed");
        return;
      }

      toast.success("Signup is successful");
      window.location.href = "/";
    } catch (error) {
      console.error('Signup error:', error);
      toast.error("Internal server error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mx-auto text-center bg-slate-800 text-white p-5 w-[420px] gap-4 rounded-2xl absolute top-[22%] left-1/3'>
      <p className='font-bold'>Sign Up</p>

      <TextField
        {...register("name", { required: "Name is required" })}
        variant='outlined'
        label="Username"
        error={!!errors.name}
        helperText={errors.name ? errors.name.message : ""}
      />

      <TextField
        {...register("email", { required: "Email is required" })}
        variant='outlined'
        label="Email"
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : ""}
      />

      <TextField
        {...register("password", { required: "Password is required" })}
        variant='outlined'
        label="Password"
        type="password"
        error={!!errors.password}
        helperText={errors.password ? errors.password.message : ""}
      />

      <Button type='submit' variant='outlined'>
        Sign Up
      </Button>

      <div className='flex justify-between'>
        <Button type='button' color='error' onClick={() => window.location.href = "/"}>
          Cancel
        </Button>
        <Button type='button' onClick={() => window.location.href = "/login"}>
          Login
        </Button>
      </div>
    </form>
  )
}

export default SignInPage
