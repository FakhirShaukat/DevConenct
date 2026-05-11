import React from 'react'
import { useState, useEffect } from 'react';
import { assets } from '../assets/assets'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`header-section cursor-pointer text-white flex fixed top-0 z-50 w-full justify-between items-center p-4 px-10 transition-all duration-300 ${scrolled ? 'bg-black/70 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className='logo flex justify-center items-center gap-2'>
        <img src={assets.global} className='w-6 invert ' alt="" />
        <h1 className='text-md'>DevConnect</h1>
      </div>
      <div className='navbar flex justify-around gap-2 '>
        <ul className='flex gap-4 text-sm justify-center items-center'>
          <li><Link to="home" smooth={true} duration={500} offset={-80}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} offset={-80}>About</Link></li>
          <li><Link to="contact" smooth={true} duration={500} offset={-80}>Contact Us</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
