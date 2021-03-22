import React from 'react'
import HomeLayout from '../components/templates/HomeLayout'
import HeroSection from '../components/organisms/HeroSection/HeroSection'
import AboutSection from '../components/organisms/AboutSection/AboutSection'
import ThemeColorProvider from '../providers/ThemeColorProvider'
import EventsSection from '../components/organisms/EventsSection/EventsSection'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

const IndexPage = ({ data: { datoCmsHome } }) => {
  const data = datoCmsHome
  return (
    <ThemeColorProvider>
      <HomeLayout>
        <SEO title="Strona główna" />
        <HeroSection content={data.heroContent} />
        <AboutSection
          header={data.aboutUsHeader}
          content={data.aboutUsContent}
        />
        <EventsSection />
      </HomeLayout>
    </ThemeColorProvider>
  )
}

export const query = graphql`
  query HomePageQuery {
    datoCmsHome {
      heroContent
      aboutUsHeader
      aboutUsContent
    }
  }
`

export default IndexPage
