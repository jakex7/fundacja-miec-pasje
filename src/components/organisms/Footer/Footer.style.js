import styled from 'styled-components'
import LogoImage from '../../../assets/images/logo.svg'

export const Wrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  background-color: ${({ theme }) => theme.lightGray};
  border-top: 1px solid ${({ theme }) => theme.darkGray};
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 4rem 0;
`
export const ContentContainer = styled.footer`
  width: 80%;
  max-width: 1000px;
  //margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  //padding: 4rem 2rem;
  margin: 0 auto;
  position: relative;
`

export const Column = styled.div`
  flex: 1;
  margin: 0;
  &:not(:first-of-type):not(:nth-last-of-type(2)) {
    margin: 0 2rem;
  }
`
export const Row = styled.div`
  display: flex;
  justify-content: ${({ right }) => (right ? 'flex-end' : 'flex-start')};
  align-items: center;
`
export const StyledLogo = styled(LogoImage)`
  max-height: 50px;
  width: 50px;
  path {
    stroke: rgba(0, 0, 0, 0.6);
  }
`
export const StyledLogoText = styled.p`
  font-weight: 600;
  margin-left: 2rem;
  color: rgba(0, 0, 0, 0.8);
`
export const StyledParagraph = styled.p`
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 0;
  margin-top: 0.5rem;
`
export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: right;
`
export const ListElement = styled.li`
  padding: 0.2rem;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  a {
    text-decoration: none;
    color: inherit;
  }
`
export const Claim = styled.div`
  position: absolute;
  display: inline-block;
  bottom: -1rem;
  right: 0;
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.75);
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      opacity: 0.75;
    }
  }
`
