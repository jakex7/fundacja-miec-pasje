import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import UniversalLayout from './UniversalLayout'

const Wrapper = styled.div`
  margin-top: 90px;
`

const SitesLayout = ({ children }) => {
  return (
    <UniversalLayout>
      <Wrapper>{children}</Wrapper>
    </UniversalLayout>
  )
}

SitesLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SitesLayout
