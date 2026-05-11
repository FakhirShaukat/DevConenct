import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const SelectionPage = () => {
  return (
    <>
      <div className='h-screen w-full bg-black text-white overflow-hidden relative'>

        {/* Glow orb */}
        <div className='absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[80px] pointer-events-none' />

        {/* Back button */}
        <Link to='/'>
          <div className='BackBtn p-4 px-10 relative z-10'>
            <button className='border border-white/15 text-white/60 hover:border-white/35 hover:text-white hover:bg-white/5 transition-all duration-200 px-4 py-1.5 rounded-lg text-sm'>
              ← Back
            </button>
          </div>
        </Link>

        {/* Heading */}
        <div className='heading text-center mt-10 relative z-10'>
          <h1 className='text-4xl font-bold tracking-tight text-white'>Who is using?</h1>
          <p className='text-sm text-white/40 font-light mt-2'>Choose your role to get started</p>
        </div>

        {/* Selection cards */}
        <Link to='/loginpage'>
          <div className='selection-container flex flex-col md:flex-row justify-center mt-14 items-center gap-6 relative z-10'>

            <div className='developer-con flex flex-col rounded-2xl bg-white/5 border border-white/10 justify-center items-center w-[200px] h-[250px] cursor-pointer
              hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/8 hover:border-blue-500/40 transition-all duration-300 ease-in-out group'>
              <div className='w-16 h-16 rounded-full bg-white/8 group-hover:bg-blue-500/20 flex items-center justify-center mb-4 transition-colors duration-300'>
                <img src={assets.code} className='w-9' alt='Developer' />
              </div>
              <p className='font-medium text-white/85 group-hover:text-white transition-colors duration-200'>Developer</p>
              <p className='text-xs text-white/30 group-hover:text-white/50 mt-1 transition-colors duration-200'>Build & collaborate</p>
            </div>

            <div className='user-con flex flex-col rounded-2xl bg-white/5 border border-white/10 justify-center items-center w-[200px] h-[250px] cursor-pointer
              hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/8 hover:border-blue-500/40 transition-all duration-300 ease-in-out group'>
              <div className='w-16 h-16 rounded-full bg-white/8 group-hover:bg-blue-500/20 flex items-center justify-center mb-4 transition-colors duration-300'>
                <img src={assets.user} className='w-9' alt='User' />
              </div>
              <p className='font-medium text-white/85 group-hover:text-white transition-colors duration-200'>User</p>
              <p className='text-xs text-white/30 group-hover:text-white/50 mt-1 transition-colors duration-200'>Find & connect</p>
            </div>

          </div>
        </Link>

      </div>
    </>
  )
}

export default SelectionPage