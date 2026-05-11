import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { assets } from '../assets/assets.js'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='bg-black text-white overflow-x-hidden'>

      <Navbar />

      {/* ══════════════ HERO ══════════════ */}
      <div className='h-[80vh] relative' style={{ minHeight: 600 }}>

        {/* Glow orb */}
        <div className='absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/15 blur-[80px] pointer-events-none' />

        <div className='main-content text-white flex flex-col justify-center items-center relative z-10' id='home'>

          {/* Beta badge */}
          <div className='mt-[120px] mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/25 text-blue-300'>
            <span className='w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse' />
            Now in open beta · 2,400+ developers
          </div>

          {/* Headings */}
          <div className='headings w-full text-center'>
            <h1 className='text-7xl font-bold tracking-tighter bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent'>
              Connect. Build. Grow.
            </h1>
            <h3 className='text-lg pt-5 font-light text-white/45 max-w-md mx-auto'>
              A platform for developers to connect with projects and peers
            </h3>
          </div>

          {/* Search bar */}
          <div className='search-bar w-full pt-8 flex justify-center items-center gap-2'>
            <input
              type='search'
              className='w-[500px] p-2.5 text-sm rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200'
              placeholder='Search for developers, skills, languages'
            />
            <button className='rounded-xl p-2.5 text-sm px-5 font-medium bg-blue-500 hover:bg-blue-600 transition-colors duration-200'>
              Search
            </button>
          </div>

          {/* CTA buttons */}
          <div className='CTA-buttons pt-6 flex items-center gap-3'>
            <button className='border border-white/15 text-white/75 hover:border-white/35 hover:text-white hover:bg-white/5 transition-all duration-200 p-2.5 rounded-xl text-sm px-5'>
              Learn More
            </button>
            <div className='w-px h-3.5 bg-white/15' />
            <Link to='./selectionpage'>
              <button className='bg-blue-500 hover:bg-blue-600 transition-colors duration-200 p-2.5 rounded-xl text-sm px-5 font-medium'>
                Get Started →
              </button>
            </Link>
          </div>

          {/* Stats row */}
          <div className='flex gap-12 mt-12 pt-10 border-t border-white/8'>
            {[
              { num: '2.4K+', label: 'Developers' },
              { num: '850+',  label: 'Projects' },
              { num: '140+',  label: 'Skills Listed' },
            ].map(({ num, label }) => (
              <div key={label} className='text-center'>
                <div className='text-2xl font-bold text-white'>{num}</div>
                <div className='text-xs mt-1 uppercase tracking-widest text-white/35'>{label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ══════════════ ABOUT ══════════════ */}
      <div className='about-section h-auto flex py-24 relative border-t border-white/8' id='about'>

        {/* Glow orb */}
        <div className='absolute bottom-1/4 right-10 w-[350px] h-[350px] rounded-full bg-indigo-500/10 blur-[80px] pointer-events-none' />

        <div className='details w-full flex flex-col md:flex-row justify-center items-center gap-16 px-12 max-w-5xl mx-auto relative z-10'>

          {/* Left — copy */}
          <div className='flex flex-col items-start text-left max-w-sm'>
            <p className='text-xs uppercase font-medium mb-4 text-blue-400 tracking-widest'>
              Why DevConnect
            </p>
            <h1 className='text-5xl font-bold tracking-tight leading-tight mb-4'>
              Built for devs who{' '}
              <span className='text-white/25'>want to do more</span>
            </h1>
            <p className='text-sm leading-relaxed font-light text-white/45'>
              At DevConnect, Developers breakthrough projects, tasks, problems by
              connecting to a thriving platform. Build, share and grow your network
              stronger than ever.
            </p>
            <Link to='./selectionpage' className='mt-6'>
              <button className='bg-blue-500 hover:bg-blue-600 transition-colors duration-200 px-5 py-2.5 rounded-xl text-sm font-medium'>
                Explore the Platform →
              </button>
            </Link>
          </div>

          {/* Right — feature cards */}
          <div className='flex flex-col gap-3 w-full max-w-sm'>
            {[
              {
                icon: '👥',
                bg: 'bg-blue-500/15',
                title: 'Find Your Team',
                desc: 'Discover developers with the right skills for your next project — fast.',
              },
              {
                icon: '💻',
                bg: 'bg-indigo-500/15',
                title: 'Showcase Your Work',
                desc: 'Post projects, contribute to open source, and build a visible portfolio.',
              },
              {
                icon: '📈',
                bg: 'bg-emerald-500/15',
                title: 'Grow Your Network',
                desc: 'Connect with peers, mentors, and collaborators across every stack.',
              },
            ].map(({ icon, bg, title, desc }) => (
              <div key={title} className='flex items-start gap-4 p-5 rounded-xl bg-white/3 border border-white/8 hover:bg-white/6 hover:border-white/15 transition-all duration-200'>
                <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-lg ${bg}`}>
                  {icon}
                </div>
                <div>
                  <div className='text-sm font-medium mb-1'>{title}</div>
                  <div className='text-xs leading-relaxed text-white/38'>{desc}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Main