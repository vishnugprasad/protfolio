import React from 'react'
import About from './about'
import "./body.css"
import Contact from './contact'
import Projects from './projects'
import Skills from './skills'
import Work from './work'
function Body() {
  return (
    <div className='body'>
      <section id = "about">
        <About></About>
      </section>
      <section id = "projects">
        <Projects></Projects>
      </section>
      <section id = "skills">
        <Skills></Skills>
      </section>
      <section id = "work">
        <Work></Work>
      </section>
      <section id = "contact">
        <Contact></Contact>
      </section>
    </div>
  )
}

export default Body

