import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const {register, formState: { errors },handleSubmit}= useForm();
    const {signIn}= useContext(AuthContext);
    const[loginError, setLoginError]= useState('');
    const locartion= useLocation();
    const navigate= useNavigate();

    const from= locartion.state?.from?.pathname || "/"; 


    const handleLogin= data=>{
        console.log(data);
        setLoginError('');

        signIn(data.email, data.password)
        .then(result=>{
            const user= result.user;
            console.log(user); 
            navigate(from, {state: true}); 
        })
        .catch(error =>{
            console.log(error.message);
            setLoginError(error.message)
        })
    }
    return (
        <div className='h-[800px] flex justify-center items-center text-accent'>
            <div className='w-96 p-6'>
                <h2 className='text-3xl font-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label"><span className="label-text text-accent">Email</span></label>
                        <input {...register("email",
                         {required: "Email Address is required" 
                        })} className="input input-bordered w-full max-w-xs" type='email'/>
                              {errors.email && <p className='text-red-600'>{errors.email.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label"><span className="label-text text-accent">Password</span></label>
                        <input {...register("password",
                        {required:"Password is required",
                         minLength:{value:6, message:"password must be 6 characters or longer"}
                        }
                        )} className="input input-bordered w-full max-w-xs" type='password' />
                         {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                        <label className="label"><span className="label-text text-accent">Forget Password</span></label>
                    </div>
                    <input className='btn btn-accent w-full' value='Submit' type="submit" />

                    <p>New To Doctors Protal <Link to='/signup' className='text-secondary'>Please Register</Link></p>
                    <div className="divider ">OR</div>
                    <div  className='btn btn-outline text-accent w-full'>CONTINEW WITH GOOGLE</div>
                    <div>
                    {
                        loginError && <p className='text-red-500'>{loginError} </p>
                    }
                </div>
                </form>
            </div>
        </div>
    );
};

export default Login;