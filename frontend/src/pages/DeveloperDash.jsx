import React from 'react'
import { assets } from '../assets/assets'
import Sidebar from '../components/Sidebar'

const DeveloperDash = () => {

    const team = [
        { name: "Alex", role: "Working on GitHub Project", img: assets.user },
        { name: "Julie", role: "UI/UX Designer", img: assets.user },
        { name: "Sam", role: "Backend Developer", img: assets.user }
    ]

    const stats = [
        { label: 'Total Projects',   value: 20, dark: false },
        { label: 'Running Projects', value: 4,  dark: true  },
        { label: 'Pending Projects', value: 10, dark: false },
        { label: 'Ended Projects',   value: 6,  dark: true  },
    ]

    const projects = [
        'AI Chat-bot Application',
        'E-Commerce Website for a Shoe Brand',
        'Portfolio Website using ThreeJS',
        'Descriptive Dashboard for Admins',
    ]

    return (
        <div className='h-screen w-full bg-black text-white flex overflow-hidden'>

            <Sidebar />

            <div className='content-side ml-[200px] h-screen flex flex-col flex-1 overflow-y-auto'>

                {/* Header */}
                <div className='content-header flex justify-between items-center p-3 px-6 border-b border-white/8 sticky top-0 bg-black/80 backdrop-blur-sm z-10'>
                    <div className='search-bar w-[50%] gap-2 flex'>
                        <input
                            type='search'
                            placeholder='Search for skills, languages'
                            className='w-full p-2 text-sm rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-all duration-200'
                        />
                        <button className='px-4 rounded-xl text-sm text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200 shrink-0'>
                            Search
                        </button>
                    </div>
                    <div className='user-info flex justify-center items-center border border-white/10 bg-white/5 p-1.5 px-4 gap-2 rounded-xl'>
                        <img src={assets.user} className='w-7 p-0.5 invert opacity-70' alt='' />
                        <p className='text-sm text-white/80'>Franklin Smith</p>
                    </div>
                </div>

                {/* Main content */}
                <div className='dashboard-content p-6 w-full flex-1'>

                    {/* Title row */}
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
                            <p className='text-xs pt-1 text-white/35'>Plan and accomplish important tasks</p>
                        </div>
                        <div className='addproject'>
                            <button className='border border-blue-500/40 p-2 px-4 text-xs rounded-xl bg-blue-500/15 text-blue-300 hover:bg-blue-500 hover:text-white transition-all duration-200'>
                                + Add Project
                            </button>
                        </div>
                    </div>

                    {/* Stat cards */}
                    <div className='project-details'>
                        <div className='cards pt-4 flex justify-between gap-3'>
                            {stats.map(({ label, value, dark }) => (
                                <div
                                    key={label}
                                    className={`flex-1 h-[120px] px-4 p-3 rounded-xl border transition-all duration-200 hover:scale-[1.02]
                                        ${dark
                                            ? 'bg-white/8 border-white/12 hover:bg-white/12'
                                            : 'bg-white/3 border-white/8 hover:bg-white/6'
                                        }`}
                                >
                                    <div className='flex justify-between items-center'>
                                        <h3 className='text-sm text-white/60'>{label}</h3>
                                        <img
                                            src={assets.arrow}
                                            className='w-7 border border-white/15 invert rounded-full p-1 opacity-50'
                                            alt=''
                                        />
                                    </div>
                                    <p className='text-4xl font-bold pt-2'>{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Projects + Team */}
                    <div className='projects-info mt-6 flex w-full gap-4'>

                        {/* Recent projects */}
                        <div className='recent-projects w-[60%]'>
                            <h2 className='text-lg font-semibold'>Recent Projects</h2>
                            <ul className='pt-3 space-y-2'>
                                {projects.map((project) => (
                                    <li
                                        key={project}
                                        className='p-3 border border-white/8 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 hover:border-white/15 transition-all duration-200 cursor-pointer'
                                    >
                                        {project}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Team members */}
                        <div className='team-collaboration w-[40%]'>
                            <div className='content border border-white/8 bg-white/3 h-full p-4 rounded-xl'>
                                <h2 className='text-lg font-semibold'>Team Members</h2>
                                <ul className='space-y-2 cursor-pointer pt-3'>
                                    {team.map((member, index) => (
                                        <li
                                            key={index}
                                            className='flex items-center gap-3 p-2 px-3 border border-white/8 rounded-xl hover:bg-white/5 hover:border-white/15 transition-all duration-200'
                                        >
                                            <img
                                                src={member.img}
                                                alt={member.name}
                                                className='w-8 h-8 rounded-full border border-white/15 invert opacity-70'
                                            />
                                            <div>
                                                <h3 className='font-medium text-sm text-white/85'>{member.name}</h3>
                                                <p className='text-xs text-white/35'>{member.role}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeveloperDash