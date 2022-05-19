import React from 'react'
import SocialContact from '../../common/social-contact'
import "./about.css"

function About() {
  return (
    <div className='about'>
        <div className='about-top'>
            <div className='about-info'>
                Hi this is <span className='info-name'>Vishnu G Prasad</span>. I'm a Full Stack Developer based in India.
                I  am a passionate and dedicated Developer who owns the necessary
                skills to build great and premimum websites.
            </div>
            <div className='about-photo'>
                <img src = {require("../../../assets/coding.png") } className = "about-picture" alt = "vishnu"/>
            </div>

        </div>
        <div className='about-bottom'>
            <SocialContact></SocialContact>
        </div>
    </div>
  )
}

export default About