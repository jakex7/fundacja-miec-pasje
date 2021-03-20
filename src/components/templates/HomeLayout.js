import React from 'react'
import PropTypes from 'prop-types'
import UniversalLayout from './UniversalLayout'
import ContactSection from '../organisms/ContactSection/ContactSection'

const HomeLayout = ({ children }) => {
  return (
    <UniversalLayout>
      {children}
      <ContactSection />
    </UniversalLayout>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
