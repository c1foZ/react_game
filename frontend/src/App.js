import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeComponent from './components/HomeComponent'
import ContactComponent from './components/ContactComponent'
import AboutComponent from './components/AboutComponent'
import PlayComponent from './components/PlayComponent'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/play' element={<PlayComponent />} />
          <Route path='/about' element={<AboutComponent />} />
          <Route path='/contact' element={<ContactComponent />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
