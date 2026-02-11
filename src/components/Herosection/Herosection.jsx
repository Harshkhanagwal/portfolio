import React from 'react'
import './Herosection.css'
import Scrolldown from '../../assets/Scroll_down.gif'
const Herosection = () => {
    return (
        <>

            <section className="heroarea">
                <div className="hero-overlay">
                    <div className="hero-content">

                        <h3 className='h4 hero-intro'>Hello,  I'm</h3>
                        <h1 className='h1 g-txt hero-heading'>Harsh khanagwal</h1>
                        <p className='p hero-p'>A developer who enjoys building things
                          <br />  that actually work.</p>

                          <div className="hero-actions">
                                <button className='primary-button'>
                                    Contact Now
                                </button>
                                <button className='secondary-button'>
                                    My resume
                                </button>
                          </div>
                    </div>

                    <img className='scroll_down' src={Scrolldown} alt="Scroll down animation" />
                </div>

            </section>



        </>
    )
}

export default Herosection