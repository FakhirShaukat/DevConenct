import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='w-full  flex flex-col mt-20 ' id="contact" >
            <div className=' flex  justify-between  p-10 px-20'>
            <div className='flex justify-center items-center gap-2'>
                <img src={assets.global} className='w-8 invert' alt="" />
                <h1 className='text-2xl'>DevConnect</h1>
            </div>
            <div className='footer-links flex flex-col md:flex-row  justify-around cursor-pointer space-x-20'>
                <div className='link'>
                    <h1>Platform</h1>
                    <ul className='text-xs pt-2 text-gray-500 leading-relaxed'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div className='link'>
                    <h1>Support</h1>
                    <ul className='text-xs pt-2 text-gray-500 leading-relaxed '>
                        <li>Help Center</li>
                        <li>Contact Us</li>
                        <li>Terms & Policy</li>
                    </ul>
                </div>
                <div className='link'>
                    <h1>Company</h1>
                    <ul className='text-xs pt-2 text-gray-500 leading-relaxed'>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
            </div>
            <div className='text-center pt-20 pb-2'><p className='text-xs text-gray-300'>Copyright FS 2025. All Right Reserved</p></div>
        </div>
    )
}

export default Footer
