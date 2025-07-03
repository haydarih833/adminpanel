import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" }, // Fixed typo 'handers' to 'headers'
                body: JSON.stringify(data)
            });

            const result = await res.json();

            if (!res.ok) {
                alert(result.message || "Login failed");
                return;
            }

            localStorage.setItem("token", result.token);
            alert("Login Successful");
            window.location.href = "/"; // Redirect after successful login
        } catch (error) {
            console.error("Login error", error);
            alert("An error occurred. Please try again."); // Added user feedback for errors
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mx-auto text-center bg-slate-800 p-5 w-[420px] gap-4 rounded-2xl text-white absolute top-[22%] left-1/3'>
            <h2 className='text-xl font-bold text-center'>Log In</h2>

            <TextField
                {...register("email", { required: "Email is required" })}
                placeholder='Email'
                type='email'
                className='text-white'
                label='Email'
                error={!!errors.email} // Show error state if there's an error
                helperText={errors.email ? errors.email.message : ""} // Display error message
            />

            <TextField
                {...register("password", { required: "Password is required" })}
                placeholder='Password'
                type='password'
                label='Password'
                error={!!errors.password} // Show error state if there's an error
                helperText={errors.password ? errors.password.message : ""} // Display error message
            />

            <Button type="submit" variant='outlined'>
                Login
            </Button>
            <div className='flex justify-between'>
                <Button type='button' color='error' onClick={() => window.location.href = "/"}>
                    Cancel
                </Button>
                <Button type='button' onClick={() => window.location.href = "/signup"}>
                    signup
                </Button>
            </div>
        </form>
    );
}

export default Login;
