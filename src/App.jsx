import { useState } from 'react'
import { Home } from './components/homepage/Home'
import BarraNavegacion from './components/global-components/BarraNavegacion'
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/homepage/NotFound'
import AccessForm from './components/authentication/AccessForm'
import About from './components/homepage/About'
import Contact from './components/homepage/Contact'

function App() {

  return (
    <>
      <BarraNavegacion/>
      <section
      className="bg-amber-900 min-h-screen flex items-center justify-center ">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/sign-in' element={<AccessForm/>}/>
            <Route path='/*' element={<NotFound/>}/>
          </Routes>
      </section>
    </>
  )
}

export default App
