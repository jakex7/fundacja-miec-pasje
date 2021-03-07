import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    width: 100%;
    height: 100%;
  }
`
export default GlobalStyle
