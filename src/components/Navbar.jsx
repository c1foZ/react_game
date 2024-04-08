import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='text-white flex justify-between items-center h-28 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold text-[#ff893b]'>
            GAME.
        </h1>
        <ul className='flex font-bold'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Play</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div>
            <AiOutlineMenu size={20} />
        </div>
    </div>
  )
}

export default Navbar