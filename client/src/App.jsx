import { useState } from 'react'

import './Style/App.css'
import './Style/index.css'
import './Style/Typography.css'
import './Style/form.css'

import Test from './Test'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import AboutSection from './components/AboutSection/AboutSection'
import Cursor from './components/Cursor/Cursor'
import Skills from './components/Skills/Skills'
import Skill2 from './components/Skills/Skills2'
import Experience from './components/ExperienceSection/Experience'
import Projects from './components/ProjectsSection/ProjectsSection'
import Personal from './components/Personal/Personal'
import Contact from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <Skill2/>
      <Projects/>
      <Personal/>
      <Experience/>
      <Contact/>
      <Footer/>
      <Cursor/>
    </>
  )
}

export default App
