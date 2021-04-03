import React from 'react'
import styled from 'styled-components'
import UniversalLayout from './UniversalLayout'
import ThemeColorProvider from '../../providers/ThemeColorProvider'
import SEO from '../seo'
import Header from '../atoms/Header/Header'
import Footer from '../organisms/Footer/Footer'

const Wrapper = styled.div`
  margin-top: 90px;
`
const InnerWrapper = styled.article`
  width: 80%;
  max-width: 900px;
  margin: 0 auto 6rem;
  padding-top: 4rem;
`

const SitesLayout = ({ pageContext: { title, slug, content } }) => {
  return (
    <ThemeColorProvider>
      <UniversalLayout>
        <SEO title={title} />
        <Wrapper>
          <InnerWrapper id={slug}>
            <Header>{title}</Header>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </InnerWrapper>
        </Wrapper>
        <Footer />
      </UniversalLayout>
    </ThemeColorProvider>
  )
}

export default SitesLayout
