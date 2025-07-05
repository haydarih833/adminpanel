import React from 'react'
import { Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form';

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/signin", {
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
        <div className=' w-full h-screen absolute top-0 left-0 bg-sky-900' >
            <div className='w-[500px] h-[600px] absolute top-1/12 left-4/12 bg-white text-center pt-20 text-4xl rounded-3xl'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>SIGN IN</p>
                    <div className='flex flex-col gap-10 p-10 '>
                        <TextField
                            {...register("email", { required: "Email is required" })}
                            placeholder='Email'
                            type='email'
                            className='mt-10'
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

                        <Button type="submit" variant='outlined' className=''>
                            SignIn
                        </Button>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignIn
