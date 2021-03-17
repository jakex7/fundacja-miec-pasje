import styled from 'styled-components'

export const HeroWrapper = styled.main`
  min-height: 500px;
  height: 80vh;
  background-color: ${({ theme }) => theme.lightGray};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: calc(90px + 3rem) 4rem 3rem;
  border: 1px solid ${({ theme }) => theme.darkGray};

  position: relative;
  &::before {
    left: 3rem;
  }
  &::after {
    right: 3rem;
  }
  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.darkGray};
  }
`

export const HeroText = styled.div`
  flex: 1;
  margin-left: 1rem;
  max-width: 350px;
`
export const HeroImage = styled.div`
  flex: 1;
  margin-right: 1rem;
  max-width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    //width: calc(100% - 1rem);
    path {
      stroke-width: 10;
    }
  }
`
export const Paragraph = styled.p``

export const HeroScroll = styled.p`
  writing-mode: vertical-lr;
  font-size: 0.75rem;
  position: absolute;
  margin: 0;
  left: calc(calc(3rem - 0.75rem) / 2);
  bottom: 1rem;
  opacity: 0.25;
  cursor: pointer;
`
