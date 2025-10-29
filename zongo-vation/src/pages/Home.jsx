import React from 'react'
import Hero from '@components/sections/Hero'
import AboutPreview from '@components/sections/AboutPreview'
import FeaturedProject from '@components/sections/FeaturedProject'
import Services from '@components/sections/Services'
import Impact from '@components/sections/Impact'
import Partnerships from '@components/sections/Partnerships'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <FeaturedProject />
      <Services />
      <Impact />
      <Partnerships />
    </div>
  )
}

export default Home