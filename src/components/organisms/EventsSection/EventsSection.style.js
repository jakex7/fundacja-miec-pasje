import styled from 'styled-components'
import DotsImage from '../../../assets/images/dots.svg'

export const Wrapper = styled.article`
  width: 100%;
  padding: 5rem 3rem;
  //padding: 5rem 4rem;
  display: flex;
  flex-direction: column;
`
export const SectionTitle = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
  color: ${({ theme }) => theme.accent};
  margin: 0 0 1rem;
`
export const TitleWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto 2rem;
  padding: 1rem;
`

export const MainWrapper = styled.div`
  background-color: ${({ theme }) => theme.lightGray};
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
  position: relative;

  border: 1px solid ${({ theme }) => theme.darkGray};
  p {
    padding: 2rem 3rem;
  }
`
export const StyledDotsImage = styled(DotsImage)`
  position: absolute;
  width: 210px;
  top: -15px;
  left: -85px;
  z-index: -1;
`
