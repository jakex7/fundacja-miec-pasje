import React, { useState } from 'react'
import { LogoStyled, NavWrapper } from './NavigationBar.style'
import Accent from '../../atoms/Accent/Accent'
import MenuOpen from '../../../assets/images/menu-outline.svg'
import MenuClose from '../../../assets/images/close-outline.svg'
import styled from 'styled-components'
import NavigationLinks from '../../molecules/NavigationLinks/NavigationLinks'

const OpenButton = styled.div`
  cursor: pointer;
  height: 42px;
  svg {
    height: 100%;
    fill: ${({ fill }) => fill && `${fill}`};
  }
`
const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.accent};
  color: #fff;
  z-index: 100;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: 0.5s ease-in-out;
`
const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  height: 100%;
`
const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`

const NavigationBarMobile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <NavWrapper>
      <LogoStyled to={'/'}>
        Mieć <Accent>Pasje</Accent>
      </LogoStyled>
      <OpenButton onClick={toggleOpen}>
        <MenuOpen />
      </OpenButton>

      <MenuWrapper isOpen={isOpen} onClick={toggleOpen}>
        <NavWrapper>
          <LogoStyled as="div" onClick={toggleOpen}>
            Mieć Pasje
          </LogoStyled>
          <OpenButton onClick={toggleOpen}>
            <MenuClose fill="white" />
          </OpenButton>
        </NavWrapper>
        <InnerWrapper>
          <StyledList>
            <NavigationLinks isMobile />
          </StyledList>
        </InnerWrapper>
      </MenuWrapper>
    </NavWrapper>
  )
}

export default NavigationBarMobile
