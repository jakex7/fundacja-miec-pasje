import styled from 'styled-components'

export const StyledButton = styled.button`
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
    transform: scaleX(0.2);
    height: 100%;
    z-index: -1;
    transition: transform 0.3s ease-in-out;
  }
`
