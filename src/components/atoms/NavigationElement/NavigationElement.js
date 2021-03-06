import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { NavigationElementStyled, StyledLink } from './NavigationElement.style'

const NavigationElement = ({ to, text, anchor, isMobile }) => {
  return (
    <NavigationElementStyled isMobile={isMobile}>
      {anchor ? (
        <StyledLink to={to} as={AnchorLink} title={text} />
      ) : (
        <StyledLink to={to}>{text}</StyledLink>
      )}
    </NavigationElementStyled>
  )
}

export default NavigationElement
