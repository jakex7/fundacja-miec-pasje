import { Link } from 'gatsby'
import styled from 'styled-components'

export const NavigationElementStyled = styled.li`
  margin-right: 1rem;
  &:last-of-type {
    margin-right: unset;
  }
`
export const StyledLink = styled(Link)`
  text-decoration: inherit;
  color: inherit;
  cursor: pointer;
  padding: 1rem;
  position: relative;

  &:hover::after {
    transform: scaleY(1) translateY(-5px);
    opacity: 0.75;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 5px;
    background-color: ${({ theme }) => theme.accent};
    width: 100%;
    transform-origin: bottom;
    transform: scaleY(0);
    opacity: 0;
    height: 2px;
    z-index: -1;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
`
