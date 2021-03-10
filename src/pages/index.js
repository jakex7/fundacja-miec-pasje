import React from 'react'
import HomeLayout from '../components/templates/HomeLayout'
import HeroSection from '../components/organisms/HeroSection/HeroSection'
import AboutSection from '../components/organisms/AboutSection/AboutSection'
import ThemeColorProvider from '../providers/ThemeColorProvider'

const IndexPage = () => (
  <ThemeColorProvider>
    <HomeLayout>
      <HeroSection />
      <AboutSection />
    </HomeLayout>
  </ThemeColorProvider>
)

export default IndexPage
