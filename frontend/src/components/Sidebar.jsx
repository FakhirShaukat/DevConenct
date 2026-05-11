import React from 'react'
import { assets } from '../assets/assets'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {

    const location = useLocation()

    const sidebarLinks = [
        { label: "Dashboard", icons: assets.home,      to: "/developerdashboard" },
        { label: "Projects",  icons: assets.layers,    to: "/projects" },
        { label: "Meetings",  icons: assets.videocall, to: "/meetings" },
    ]

    return (
        <div className='sidebar h-screen w-[200px] text-white fixed bg-black border-r border-white/8 flex flex-col'>

            {/* Logo */}
            <div className='logo flex px-5 pt-6 gap-2 items-center'>
                <img className='w-5 invert opacity-80' src={assets.global} alt='' />
                <p className='text-sm font-semibold tracking-wide text-white/80'>DevConnect</p>
            </div>

            {/* Nav links */}
            <div className='sidebar-links pt-8 px-3 space-y-1 flex-1'>
                {sidebarLinks.map((link, index) => {
                    const isActive = location.pathname === link.to
                    return (
                        <Link
                            key={index}
                            to={link.to}
                            className={`links flex items-center w-full gap-3 p-2 px-3 rounded-xl cursor-pointer transition-all duration-200
                                ${isActive
                                    ? 'bg-blue-500/20 border border-blue-500/30 text-blue-300'
                                    : 'text-white/50 hover:bg-white/6 hover:text-white border border-transparent'
                                }`}
                        >
                            <img
                                className={`w-4 invert ${isActive ? 'opacity-100' : 'opacity-40'}`}
                                src={link.icons}
                                alt={link.label}
                            />
                            <p className='text-sm'>{link.label}</p>
                        </Link>
                    )
                })}
            </div>

            {/* Log out */}
            <div className='px-3 pb-6'>
                <Link to='/'>
                    <div className='flex items-center gap-2 p-2 px-3 text-sm rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 hover:border-red-500/35 hover:text-red-300 transition-all duration-200 cursor-pointer'>
                        <img src={assets.logout} className='invert w-4 opacity-70' alt='' />
                        <button>Log Out</button>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Sidebar