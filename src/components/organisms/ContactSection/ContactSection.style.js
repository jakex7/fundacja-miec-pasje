import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 2rem auto 6rem;
  padding: 2rem 4rem;
  background-color: ${({ theme }) => theme.accent};
  box-shadow: ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.darkGray};
  color: #fff;
  width: 90%;
  max-width: 1000px;
`
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Element = styled.div`
  flex: 1;
`
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1rem;
`
