import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const navigate = useNavigate();

    const username = 'admin@example.com'
    const password = '123'

    const handlelogin = () => {
        if (user === username && pass === password) {
            alert("Login Successfull !");
            navigate("/developerdashboard");
        } else {
            alert("Invalid credentials !")
        }
    }

    return (
        <div className='bg-black h-screen text-white overflow-hidden relative'>

            {/* Glow orb */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[80px] pointer-events-none' />

            {/* Back button */}
            <Link to='/selectionpage'>
                <div className='BackBtn p-4 px-10 relative z-10'>
                    <button className='border border-white/15 text-white/60 hover:border-white/35 hover:text-white hover:bg-white/5 transition-all duration-200 px-4 py-1.5 rounded-lg text-sm'>
                        ← Back
                    </button>
                </div>
            </Link>

            {/* Login form */}
            <div className='login-form flex justify-center items-center relative z-10'>
                <div className='form-details bg-white/4 border border-white/10 rounded-2xl w-[320px] h-auto text-center mt-6 pb-6'>

                    {/* Logo */}
                    <div className='logo flex justify-center items-center pt-6 gap-2'>
                        <img className='w-5 invert opacity-80' src={assets.global} alt='' />
                        <h1 className='text-sm font-semibold tracking-wide text-white/80'>DevConnect</h1>
                    </div>

                    {/* Title */}
                    <div className='pt-5 text-center px-6'>
                        <h1 className='text-xl font-bold tracking-tight'>Sign In To Your Account.</h1>
                        <p className='pt-1.5 text-xs text-white/38 font-light'>Unleash your potential</p>
                    </div>

                    {/* Inputs */}
                    <div className='inputs mt-5 w-full px-4 space-y-2.5'>
                        <input
                            type='email'
                            className='w-full p-2.5 text-sm rounded-xl bg-white/6 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200'
                            placeholder='Enter your email'
                            required
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <input
                            type='password'
                            className='w-full p-2.5 text-sm rounded-xl bg-white/6 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200'
                            placeholder='Enter your password'
                            required
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </div>

                    {/* Login button */}
                    <div className='px-4 mt-4'>
                        <button
                            onClick={handlelogin}
                            className='w-full p-2.5 font-semibold rounded-xl bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-sm'
                        >
                            Login
                        </button>
                    </div>

                    {/* Links */}
                    <div className='text-xs mt-3 space-y-1 text-white/40'>
                        <p>Don't have an account?{' '}
                            <a href='/signup' className='text-blue-400 hover:text-blue-300 transition-colors duration-200'>Sign Up</a>
                        </p>
                        <a href='/forgotpassword' className='text-blue-400 hover:text-blue-300 transition-colors duration-200'>
                            Forgot Password?
                        </a>
                    </div>

                    {/* Divider */}
                    <div className='divider mt-5 flex justify-center items-center px-4 gap-3 text-xs text-white/25'>
                        <div className='border-t border-white/10 w-full' />
                        <span className='shrink-0'>OR</span>
                        <div className='border-t border-white/10 w-full' />
                    </div>

                    {/* Google login */}
                    <div className='google-login px-4 mt-4'>
                        <div className='flex justify-center text-sm cursor-pointer rounded-xl p-2.5 border border-white/10 bg-white/3 hover:bg-white/8 hover:border-white/20 transition-all duration-200 items-center gap-2.5 text-white/70 hover:text-white'>
                            <img className='w-4' src={assets.google} alt='' />
                            <p>Continue with Google</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default LoginPage