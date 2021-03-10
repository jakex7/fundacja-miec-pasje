import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import NavigationBar from '../organisms/NavigationBar/NavigationBar'
import GlobalStyle from '../../assets/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'
import { ThemeColorContext } from '../../providers/ThemeColorProvider'

const HomeLayout = ({ children }) => {
  const { theme } = useContext(ThemeColorContext)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <NavigationBar />
      {children}
    </ThemeProvider>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
