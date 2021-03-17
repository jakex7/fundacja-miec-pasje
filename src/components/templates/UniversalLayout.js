import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'
import NavigationBar from '../organisms/NavigationBar/NavigationBar'
import GlobalStyle from '../../assets/styles/GlobalStyle'
import { ThemeColorContext } from '../../providers/ThemeColorProvider'
import Footer from '../organisms/Footer/Footer'

const UniversalLayout = ({ children }) => {
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
      <Footer />
    </ThemeProvider>
  )
}

UniversalLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default UniversalLayout
