import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import NavigationBar from '../organisms/NavigationBar/NavigationBar'
import GlobalStyle from '../../assets/styles/GlobalStyle'
import { ThemeColorContext } from '../../providers/ThemeColorProvider'
import Footer from '../organisms/Footer/Footer'

toast.configure({
  position: 'bottom-right',
  autoClose: 5000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
})
const UniversalLayout = ({ children }) => {
  const { theme } = useContext(ThemeColorContext)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          rel="stylesheet"
          media="print"
          onLoad="this.onload=null;this.removeAttribute('media');"
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,800;1,400&display=swap"
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
