import React from 'react'
import PropTypes from 'prop-types'
import UniversalLayout from './UniversalLayout'

const HomeLayout = ({ children }) => {
  return <UniversalLayout>{children}</UniversalLayout>
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
