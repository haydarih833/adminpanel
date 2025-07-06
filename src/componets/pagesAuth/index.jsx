import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Login failed");
        setLoading(false);
        return;
      }

      localStorage.setItem("user", JSON.stringify(result));
      alert("Login Successful");
      window.location.href = "/users";
    } catch (error) {
      console.error("Login error", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full h-screen flex items-center justify-center bg-sky-900 absolute top-0'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white w-[90%] max-w-[500px] rounded-3xl p-10 text-center shadow-xl'
      >
        <h2 className='text-3xl font-bold mb-8'>Sign In</h2>

        <div className='flex flex-col gap-6'>
          <TextField
            {...register("email", { required: "ایمیل الزامی است" })}
            label="Email"
            type="email"
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
          />

          <TextField
            {...register("password", { required: "رمز عبور الزامی است" })}
            label="Password"
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
          >
            {loading ? "در حال ورود..." : "ورود"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;