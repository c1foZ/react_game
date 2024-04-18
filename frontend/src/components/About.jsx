import React, { useEffect, useState } from 'react'
import Book from '../assets/book.jpg'

const About = () => {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    const handleQuotes = async () => {
      const response = await fetch('https://api.quotable.io/random')
      const json = await response.json()
      console.log(json)
      setQuote(json.content)
    }
    handleQuotes()
  }, [])

  return (
    <div className='w-full bg-white py-16 px-14'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px]' src={Book} alt="/" />
            <div className='p-5 text-center'>
                <h1 className='text-3xl font-bold uppercase mt-5'>This quote is about my life</h1>
                <p className='mt-5'>{quote}</p>
            </div>
        </div>
    </div>
  )
}

export default About