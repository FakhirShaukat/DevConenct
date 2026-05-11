import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className='bg-black h-screen text-white overflow-hidden relative'>

      {/* Glow orb */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[80px] pointer-events-none' />

      {/* Back button */}
      <Link to='/loginpage'>
        <div className='BackBtn p-4 px-10 relative z-10'>
          <button className='border border-white/15 text-white/60 hover:border-white/35 hover:text-white hover:bg-white/5 transition-all duration-200 px-4 py-1.5 rounded-lg text-sm'>
            ← Back
          </button>
        </div>
      </Link>

      {/* Form */}
      <div className='login-form flex justify-center items-center relative z-10'>
        <div className='form-details bg-white/4 border border-white/10 rounded-2xl w-[320px] h-auto text-center mt-6'>

          {/* Logo */}
          <div className='logo flex justify-center items-center pt-6 gap-2'>
            <img className='w-5 invert opacity-80' src={assets.global} alt='' />
            <h1 className='text-sm font-semibold tracking-wide text-white/80'>DevConnect</h1>
          </div>

          {/* Title */}
          <div className='pt-5 text-center px-6'>
            <h1 className='text-xl font-bold tracking-tight'>Forgot Your Password?</h1>
            <p className='pt-1.5 text-xs text-white/38 font-light'>Enter your email and we'll send you a reset code</p>
          </div>

          {/* Inputs */}
          <div className='inputs mt-5 w-full px-4 space-y-2.5 mb-6'>
            <input
              type='email'
              className='w-full p-2.5 text-sm rounded-xl bg-white/6 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200'
              placeholder='Enter your email'
            />
            <button className='bg-blue-500 w-full rounded-xl p-2.5 text-sm font-semibold hover:bg-blue-600 transition-colors duration-200'>
              Send Code
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ForgotPassword