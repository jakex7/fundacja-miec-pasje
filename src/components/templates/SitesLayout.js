import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import UniversalLayout from './UniversalLayout'
import ThemeColorProvider from '../../providers/ThemeColorProvider'
import SEO from '../seo'
import Header from '../atoms/Header/Header'

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
        <Wrapper>
          <SEO title={title} />
          <InnerWrapper id={slug}>
            <Header>{title}</Header>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </InnerWrapper>
        </Wrapper>
      </UniversalLayout>
    </ThemeColorProvider>
  )
}

SitesLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SitesLayout
