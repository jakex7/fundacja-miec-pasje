import React from 'react'
import NavigationLinks from '../../molecules/NavigationLinks/NavigationLinks'
import { LogoStyled, NavWrapper } from './NavigationBar.style'
import Accent from '../../atoms/Accent/Accent'
import Button from '../../atoms/Button/Button'

const NavigationBar = () => {
  return (
    <NavWrapper>
      <LogoStyled to={'/'}>
        Mieć <Accent>Pasje</Accent>
      </LogoStyled>
      <NavigationLinks />
      <Button text="Kontakt" />
    </NavWrapper>
  )
}

export default NavigationBar
