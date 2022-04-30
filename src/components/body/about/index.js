import React from 'react'
import "./about.css"

function About() {
  return (
    <div className='about'>
        <div className='about-top'>
            <div className='about-info'>
                My name is <span className='info-name'>Vishnu G Prasad</span>. I'm a Full Stack Developer based in India.
                I am very passionate and dedicated to my work. And I own the necessary
                skills to build great and premimum websites.
            </div>
            <div className='about-photo'>
                <img src = {require("../../../assets/coding.png")} className = "about-picture"/>
            </div>

        </div>
        <div className='about-bottom'>
            about
            {/* this is social contact icons */}
        </div>
    </div>
  )
}

export default About