import React from 'react'

const Contact = () => {
  return (
    <div className='text-white py-16 px-14'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div>
                <h1 className='text-3xl text-center text-[#ff893b] font-bold'>
                    Any questions?
                
                </h1>
                <p className='text-white text-center font-normal text-lg mt-2'>
                    Feel free to contact me.
                </p>
            </div>
            <input className='p-4 rounded-md text-black lg:my-auto sm:my-5 ' type="email" placeholder="Enter email"/>
            <div className='py-2 px-4 flex justify-center'>
                <button className='w-[200px] h-[50px] bg-green-500 rounded-md text-black uppercase font-bold'>Notify me</button>
            </div>
        </div>
    </div>
  )
}

export default Contact