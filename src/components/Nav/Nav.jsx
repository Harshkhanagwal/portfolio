import React, { useState } from 'react'
import './Nav.css'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  const handleClick = (section) => {
    setActive(section)
    setOpen(false)
  }

  return (
    <>
      <header>
        <nav className='container border-subtle'>
          <span className="logo g-txt">
            {'<HK/>'}
          </span>

          <div className="nav-elements desktop">
            <a
              className={`link ${active === 'home' ? 'active' : ''}`}
              href="#"
              onClick={() => handleClick('home')}
            >
              {'.home()'}
            </a>

            <a
              className={`link ${active === 'about' ? 'active' : ''}`}
              href="#about"
              onClick={() => handleClick('about')}
            >
              {'.about()'}
            </a>

            <a
              className={`link ${active === 'projects' ? 'active' : ''}`}
              href="#projects"
              onClick={() => handleClick('projects')}
            >
              {'.projects()'}
            </a>

            <a
              className={`link ${active === 'contact' ? 'active' : ''}`}
              href="#contact"
              onClick={() => handleClick('contact')}
            >
              {'.contact()'}
            </a>
          </div>

          <span className="menu-btn" onClick={() => setOpen(true)}>
            ☰
          </span>
        </nav>
      </header>

      <div className={`mobile-nav ${open ? 'open' : ''}`}>
        <span className="close-btn" onClick={() => setOpen(false)}>
          ×
        </span>

        <div className="mobile-links">
          <a
            className={`link ${active === 'home' ? 'active' : ''}`}
            href="#"
            onClick={() => handleClick('home')}
          >
            {'.home()'}
          </a>

          <a
            className={`link ${active === 'about' ? 'active' : ''}`}
            href="#about"
            onClick={() => handleClick('about')}
          >
            {'.about()'}
          </a>

          <a
            className={`link ${active === 'projects' ? 'active' : ''}`}
            href="#projects"
            onClick={() => handleClick('projects')}
          >
            {'.projects()'}
          </a>

          <a
            className={`link ${active === 'contact' ? 'active' : ''}`}
            href="#contact"
            onClick={() => handleClick('contact')}
          >
            {'.contact()'}
          </a>
        </div>
      </div>
    </>
  )
}

export default Nav
