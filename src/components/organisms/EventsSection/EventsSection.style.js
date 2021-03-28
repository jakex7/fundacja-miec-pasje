import styled from 'styled-components'

export const Wrapper = styled.article`
  max-width: 1000px;
  width: 80%;
  margin: 0 auto 5rem;
  display: flex;
  flex-direction: column;
`

export const StyledArrow = styled.div`
  svg {
    width: 32px;
    fill: ${({ theme }) => theme.error};
  }
  width: 32px;
  height: 32px;
  margin: 0 -1rem;
  &::before {
    display: none;
  }
`
export const StyledError = styled.p`
  text-align: center;
`
