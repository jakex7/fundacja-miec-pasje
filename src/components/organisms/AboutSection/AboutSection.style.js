import styled, { css } from 'styled-components'
import DotsImage from '../../../assets/images/dots.svg'
import mediaMaxWidth from '../../../helpers/mediaMaxWidth'

export const Wrapper = styled.article`
  width: 100%;
  padding: 5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mediaMaxWidth(
    700,
    css`
      padding: 5rem 1rem;
    `
  )}
`
export const MainWrapper = styled.div`
  background-color: ${({ theme }) => theme.lightGray};
  box-shadow: ${({ theme }) => theme.shadow};
  height: 100%;
  max-width: 900px;
  position: relative;

  border: 1px solid ${({ theme }) => theme.darkGray};
  div {
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
