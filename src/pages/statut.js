import React from 'react'
import HomeLayout from '../components/templates/HomeLayout'
import ThemeColorProvider from '../providers/ThemeColorProvider'
import SitesLayout from '../components/templates/SitesLayout'
import Statute from '../components/organisms/Statute/Statute'

const IndexPage = () => (
  <ThemeColorProvider>
    <SitesLayout>
      <Statute />
    </SitesLayout>
  </ThemeColorProvider>
)

export default IndexPage
