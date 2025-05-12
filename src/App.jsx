import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'

function App() {
  return (
    <main className='mx-auto max-w-7xl overflow-x-hidden antialiased'>
      <div className='bg-image fixed inset-0 bg-cover bg-fixed bg-center'></div>
      <div className='relative z-10'>
        <Navbar/>
        <Hero/>
        <Projects/>
        <Skills/>
        <Experience/>
        <Education/>
        {/* <Testimonial/> */}
        <Contact/>
      </div>


    </main>
  )
}

export default App