import styled from 'styled-components'

export const Wrapper = styled.article`
  width: 100%;
  padding: 5rem 3rem;
  //padding: 5rem 4rem;
  display: flex;
  flex-direction: column;
`
export const SectionTitle = styled.h4`
  font-weight: 400;
  color: ${({ theme }) => theme.accent};
  margin: 0 0 1rem;
`
export const TitleWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 2rem;
  padding: 1rem;
  // border-left: 3px solid ${({ theme }) => theme.accent};
`

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  p {
    margin: 0;
    padding: 3rem 4rem 5rem;
    flex: 1;
    position: relative;

    &::before {
      content: '';
      display: block;
      position: absolute;
      z-index: -1;
      background-color: ${({ theme }) => theme.lightGray};
      top: 0;
      right: 0;
      height: 100%;
      width: 200%;
      //opacity: 0.075;
    }
  }

  div {
    flex: 1;
    padding: 0 4rem;
  }
`
