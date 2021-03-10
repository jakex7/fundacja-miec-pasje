import React, { useEffect, useState } from 'react'
import {
  defaultTheme,
  blueTheme,
  purpleTheme,
  greenTheme,
} from '../assets/styles/theme'

export const ThemeColorContext = React.createContext({
  theme: {},
})

const ThemeColorProvider = ({ children }) => {
  const allThemes = [defaultTheme, blueTheme, purpleTheme, greenTheme]
  const [theme, setTheme] = useState(
    allThemes[Math.floor(Math.random() * allThemes.length)]
  )
  return (
    <ThemeColorContext.Provider value={{ theme: theme }}>
      {children}
    </ThemeColorContext.Provider>
  )
}

export default ThemeColorProvider
