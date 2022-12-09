import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useToken from '../../../hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createUser, updateUser, googleSignIn } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate()

    if(token){
        navigate('/');
    }


    // handle google signIn
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Create Successfully')
                navigate('/')
            })
            .catch(error => {
                console.log(error);
                setSignUpError(error.message)
            })
    }

    // handle sign up
    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Create Successfully')
                reset()

                // handle update user 
                const userInfo = {
                    displayName: data.name
                };
                console.log(data);
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .then(err => console.log(err))


            })
            .catch(error => {
                console.log(error.message);
                setSignUpError(error.message)
            })
    }

    // save all users
    const saveUser = (name, email) => {
        const user = { name, email };
        console.log({email});
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
            })
    }


  


    return (
        <div>
            <div className='h-[700px] flex justify-center items-center'>
                <div className='w-96 bg-gray-800 rounded-md p-7'>
                    <h2 className='text-xl text-center font-bold text-cyan-400'>Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control w-full max-w-xs mt-2">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text" {...register("name", {
                                required: 'Name is required'
                            })} className="input input-bordered input-info w-full max-w-xs" />
                            {errors.name && <p className='text-error'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs mt-3">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" {...register("email", {
                                required: true
                            })} className="input input-bordered input-info w-full max-w-xs" />
                            {errors.email && <p className='text-error'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs my-3">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password" {...register("password", {
                                required: 'password is required',
                                pattern: { value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password must be strong and special characters' },
                                minLength: { value: 6, message: 'password must be 6 characters longer' }
                            })} className="input input-bordered input-info w-full max-w-xs" />
                            {errors.password && <p className='text-error'>{errors.password.message}</p>}
                        </div>
                        <input type="submit" className='btn bg-gray-600 w-full' />
                        {signUpError && <p className='text-error'>{signUpError}</p>}
                    </form>
                    <p className='mt-1'>Already have a account <Link to='/login' className='text-cyan-500 ml-2'>Please Login</Link></p>
                    <div className="divider my-5 text-cyan-400">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline btn-primary w-full'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default SignUp;