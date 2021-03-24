import styled from 'styled-components'

export const EventWrapper = styled.div`
  margin: 1rem;
  box-sizing: border-box;
  max-width: calc(100% - 2rem);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  background-color: ${({ theme }) => theme.lightGray};
  border: 1px solid ${({ theme }) => theme.darkGray};
`
export const Top = styled.div``
export const Day = styled.span`
  margin: 0;
  font-weight: 300;
  font-size: 2.5rem;
`
export const Month = styled.div`
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 0.9rem;
`
export const Bottom = styled.div``
export const Title = styled.div`
  margin-bottom: 1rem;
  letter-spacing: 1px;
`
export const Time = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.accent};
`
export const Location = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.accent};
`
