import React from 'react'
import ThemeColorProvider from '../providers/ThemeColorProvider'
import SitesLayout from '../components/templates/SitesLayout'
import Statute from '../components/organisms/Statute/Statute'
import SEO from '../components/seo'

const IndexPage = () => (
  <ThemeColorProvider>
    <SitesLayout>
      <SEO title="Statut" />
      <Statute />
    </SitesLayout>
  </ThemeColorProvider>
)

export default IndexPage
