import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'
import { toast } from 'react-toastify'
import NavigationBar from '../organisms/NavigationBar/NavigationBar'
import GlobalStyle from '../../assets/styles/GlobalStyle'
import { ThemeColorContext } from '../../providers/ThemeColorProvider'
import { useWindowSize } from '../../hooks/useWindowSize'
import NavigationBarMobile from '../organisms/NavigationBar/NavigationBarMobile'

toast.configure({
  position: 'bottom-right',
  autoClose: 5000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
})
const UniversalLayout = ({ children }) => {
  const { theme } = useContext(ThemeColorContext)
  const windowSize = useWindowSize()
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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/react-toastify@7.0.3/dist/ReactToastify.min.css"
        />
      </Helmet>
      {windowSize.width >= 900 ? <NavigationBar /> : <NavigationBarMobile />}
      {children}
    </ThemeProvider>
  )
}

UniversalLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default UniversalLayout
