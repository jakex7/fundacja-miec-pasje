import React from 'react'
import HomeLayout from '../components/templates/HomeLayout'
import HeroSection from '../components/organisms/HeroSection/HeroSection'
import AboutSection from '../components/organisms/AboutSection/AboutSection'
import ThemeColorProvider from '../providers/ThemeColorProvider'
import EventsSection from '../components/organisms/EventsSection/EventsSection'
import SEO from '../components/seo'

const IndexPage = () => (
  <ThemeColorProvider>
    <HomeLayout>
      <SEO title="Strona główna" />
      <HeroSection />
      <AboutSection />
      <EventsSection />
    </HomeLayout>
  </ThemeColorProvider>
)

export default IndexPage
