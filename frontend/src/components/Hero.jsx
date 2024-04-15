import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#ff893b] font-bold p-3'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-3'>Grow with data.</h1>
        <div className='flex justify-center items-center md:pt-3'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, flexible financing</p>
          <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'
            strings={['BTB', 'BTC', 'HEYS']}
            typeSpeed={400} 
            backSpeed={400}
            loop 
          />
        </div>
        <p className='font-bold text-gray-500 pt-2'>Monitor your data analytics.</p>
        <button className='uppercase bg-green-500 text-black w-[200px] font-bold rounded-lg mx-auto my-5 py-2'>Get started</button>
      </div>
    </div>
  );
};

export default Hero;
