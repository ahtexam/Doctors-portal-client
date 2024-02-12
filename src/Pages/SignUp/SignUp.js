import React, { useContext, useState } from 'react';
import {  useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const {register, handleSubmit, formState:{errors}}=useForm();
    const {createUser, updateUser}= useContext(AuthContext);
   const [signUpError, setSignUpError]=useState('')
   const navigate= useNavigate();

    const handleSignUp =(data)=>{
        console.log(data);
        setSignUpError('')
         createUser(data.email, data.password)
         .then(result =>{
            const user= result.user;
            console.log(user);
            toast('User Created Successfully')
            const userInfo={
                displayName: data.name
            }
            updateUser(userInfo)
            .then( ()=>{
                navigate('/')
            })
            .catch(err=>console.log(err))
         })
         .catch(error => {
            console.log(error)
            setSignUpError(error.message)
        });
    }
    return (
        <div className='h-[800px] flex justify-center items-center text-accent'>
        <div className='w-96 p-6'>
            <h2 className='text-3xl font-bold text-center'>Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignUp)} >
                <div className="form-control w-full max-w-xs ">
                    <label className="label"><span className="label-text text-accent">Name</span></label>
                    <input  {...register("name", {
                        required:"Name Is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs ">
                    <label className="label"><span className="label-text text-accent">Email</span></label>
                    <input {...register("email",
                    {required: "Email Is Required"}
                    )} className="input input-bordered w-full max-w-xs" type='email' />
                    {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs ">
                    <label className="label"><span className="label-text text-accent" type='password'>Password</span></label>
                    <input {...register("password",{
                        required:'Password Is Requird',
                    })} className="input input-bordered w-full max-w-xs "type='password' />
                     {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    <label className="label"><span className="label-text text-accent">Forget Password</span></label>
                </div>
                <input className='btn btn-accent w-full' value='Submit' type="submit" />
                {signUpError&& <p className='text-red-600'>{signUpError}</p>}
                <p>Already have an account <Link to='/login' className='text-secondary'>Please Login</Link></p>
                <div className="divider ">OR</div>
                <div  className='btn btn-outline text-accent w-full'>CONTINEW WITH GOOGLE</div>
            </form>
        </div>
    </div>
    );
};

export default SignUp;