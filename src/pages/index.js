import React from 'react'
import HomeLayout from '../components/templates/HomeLayout'
import HeroSection from '../components/organisms/HeroSection/HeroSection'
import AboutSection from '../components/organisms/AboutSection/AboutSection'

const IndexPage = () => (
  <HomeLayout>
    <HeroSection />
    <AboutSection />
  </HomeLayout>
)

export default IndexPage
