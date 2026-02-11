import React from 'react'
import './About.css'
import { CodeBlock, dracula } from 'react-code-blocks';

const AboutSection = () => {
const code = `programming_and_development = [
    "Java",
    "JavaScript",
    "React.js",
    "MongoDB",
    "Express.js",
    "Node.js",
    "MERN Stack"
]
tools = [
    "Git & Github",
    "Postman",
    "AWS"
]`

    return (
        <>
            <section className="section main about-section" id='about'>
                    <h3 className="h3 section-heading "><span className='g-txt'>{`<`}</span>About<span className='g-txt'>{`/>`}</span></h3>
                <div className="container about-section-inner">
                    <div className="about-clm about-left">
                        <h2 className='h2 function-h2'>{`.aboutMe ("`}<span className='g-txt'>Harsh_khanagwal</span>{`") {`} </h2>
                        <p className='txt child-txt'>
                            I'm a <span className='g-txt'>Full-stack developer</span>  who enjoys working close to the fundamentals —
                            clean code, clear structure, and systems that are easy to reason about.
                            <br />
                            <br />
                            Most of my work revolves around building full-stack web applications
                            where performance, clarity, and real-world usability matter.
                            <br />
                            <br />
                            I care about how things are built, not just how they look.
                            <br /><br />

                            <b>returns</b>: code I won't regret later

                        </p>

                        <p className='h2 function-h2'>{`}`}</p>
                    </div>
                    <div className="about-clm about-right">
                        <div className="codeblockhead">
                            <div className='mac-menu'>
                                 <span className='mac-dot mac-dot-1'></span> 
                                 <span className='mac-dot mac-dot-2'></span> 
                                 <span className='mac-dot mac-dot-3'></span> 
                            </div> 
                            <span>{`skills.js`}</span>
                        </div>
                        <CodeBlock
                            text={code}
                            language={"json"}
                            showLineNumbers={true}
                            theme={dracula}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection