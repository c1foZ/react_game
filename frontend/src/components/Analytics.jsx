import React from 'react'
import Book from '../assets/book.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-14'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px]' src={Book} alt="/" />
            <div className='p-5 text-center flex items-center justify-center'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ad sequi, rerum nostrum totam aliquid dolorem animi ullam. Ex perferendis dolorum nulla quibusdam magni sunt neque natus delectus impedit qui.</p>
            </div>
        </div>
    </div>
  )
}

export default Analytics