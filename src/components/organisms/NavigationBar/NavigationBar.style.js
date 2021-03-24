import styled from 'styled-components'
import { Link } from 'gatsby'

export const NavWrapper = styled.nav`
  position: absolute;
  width: 100%;
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
  cursor: pointer;
  color: inherit;
  text-decoration: inherit;
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0;
`
