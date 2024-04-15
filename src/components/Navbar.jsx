import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='text-white flex justify-between items-center h-28 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold text-[#ff893b]'>
            GAME.
        </h1>
        <ul className='hidden md:flex'>
            <li className='p-4'><Link to={'/'}>Home</Link></li>
            <li className='p-4'><Link to={'/play'}>Play</Link></li>
            <li className='p-4'><Link to={'/about'}>About</Link></li>
            <li className='p-4'><Link to={'/contact'}>Contact</Link></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'> 
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#ff893b] m-4'>
              GAME.
          </h1>
          <ul className='pt-24 uppercase'>
            <li className='p-4 border-b border-[#ff893ba1]'>Home</li>
            <li className='p-4 border-b border-[#ff893ba1]'>Play</li>
            <li className='p-4 border-b border-[#ff893ba1]'>About</li>
            <li className='p-4'>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar