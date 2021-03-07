import React from 'react'
import NavigationLinks from '../../molecules/NavigationLinks/NavigationLinks'
import {
  Accent,
  ContactButton,
  LogoStyled,
  NavContainer,
} from './NavigationBar.style'

const NavigationBar = () => {
  return (
    <NavContainer>
      <LogoStyled to={'/'}>
        Mieć <Accent>Pasje</Accent>
      </LogoStyled>
      <NavigationLinks />
      <ContactButton>Kontakt</ContactButton>
    </NavContainer>
  )
}

export default NavigationBar
