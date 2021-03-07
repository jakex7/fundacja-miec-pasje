import React from 'react'
import { NavigationElementStyled, StyledLink } from './NavigationElement.style'

const NavigationElement = ({ to, text }) => {
  return (
    <NavigationElementStyled>
      <StyledLink to={to}>{text}</StyledLink>
    </NavigationElementStyled>
  )
}

export default NavigationElement
