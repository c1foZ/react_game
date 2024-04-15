import React from 'react'
import Navbar from './Navbar'
import Hero from "./Hero";
import Analytics from "./Analytics";
import Contact from "./Contact";

function HomeComponent() {
  return (
    <div> 
        <Navbar />
        <Hero />
        <Analytics />
        <Contact />
    </div>
  )
}

export default HomeComponent