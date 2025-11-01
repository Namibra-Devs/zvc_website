import React from 'react'
import Hero from '@components/sections/Hero'
import About from '@components/sections/About'
import Projects from '@components/sections/Projects'

import Services from '@components/sections/Services'
import Impact from '@components/sections/Impact'
import Partnerships from '@components/sections/Partnerships'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      
      <Services />
      <Impact />
      <Projects/>
      <Partnerships />
    </div>
  )
}

export default Home