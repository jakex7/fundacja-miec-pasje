import React from 'react'
import { NavigationElementStyled, StyledLink } from './NavigationElement.style'

const NavigationElement = ({ to, text, native }) => {
  return (
    <NavigationElementStyled>
      {native ? (
        <StyledLink href={to} as="a">
          {text}
        </StyledLink>
      ) : (
        <StyledLink to={to}>{text}</StyledLink>
      )}
    </NavigationElementStyled>
  )
}

export default NavigationElement
