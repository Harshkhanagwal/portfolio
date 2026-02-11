import { useState } from 'react'

import './App.css'
import Herosection from './components/Herosection/Herosection'
import Nav from './components/Nav/Nav'
import AboutSection from './components/AboutSection/AboutSection'
import Quote from './Quote/Quote'
import Projects from './Projects/Projects'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Herosection/>
      <AboutSection/>
      <Quote/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
      {/* <div className="temparea">  
        
    </div> */}
    </>
  )
}

export default App
