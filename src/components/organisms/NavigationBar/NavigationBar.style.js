import styled from 'styled-components'
import { Link } from 'gatsby'

export const NavContainer = styled.nav`
  position: absolute;
  width: 100vw;
  top: 0;
  left: 0;
  padding: 1.5rem 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  z-index: 100;
`

export const LogoStyled = styled(Link)`
  color: inherit;
  text-decoration: inherit;
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0;
`
export const Accent = styled.span`
  color: ${({ theme }) => theme.accent};
`
export const ContactButton = styled.button`
  background-color: unset;
  border: none;
  font-family: inherit;
  position: relative;
  font-weight: 800;
  padding: 0.5rem;
  outline: none;
  cursor: pointer;
  transition: color 0.3s ease-in;
  font-size: 1rem;
  z-index: 101;

  &:hover {
    color: #fff;
    &::after {
      transform: scaleX(1);
    }
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    background-color: ${({ theme }) => theme.accent};
    width: 100%;
    transform-origin: right;
    transform: scaleX(0.25);
    height: 100%;
    z-index: -1;
    transition: transform 0.3s ease-in-out;
  }
`
