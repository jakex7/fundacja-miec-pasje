import React, { useState } from 'react'
import {
  blueTheme,
  defaultTheme,
  greenTheme,
  purpleTheme,
} from '../assets/styles/theme'

export const ThemeColorContext = React.createContext({
  theme: {},
})

const ThemeColorProvider = ({ children }) => {
  const allThemes = [defaultTheme, blueTheme, purpleTheme, greenTheme]
  const [theme, setTheme] = useState(
    defaultTheme
    // allThemes[Math.floor(Math.random() * allThemes.length)]
  )
  const handleSetTheme = index => {
    setTheme(allThemes[index])
  }
  return (
    <ThemeColorContext.Provider value={{ theme, handleSetTheme }}>
      {children}
    </ThemeColorContext.Provider>
  )
}

export default ThemeColorProvider
