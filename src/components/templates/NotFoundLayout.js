import React from 'react'
import styled from 'styled-components'
import UniversalLayout from './UniversalLayout'
import ThemeColorProvider from '../../providers/ThemeColorProvider'
import SEO from '../seo'
import NotFoundImage from '../../assets/images/NotFoundImage.svg'
import Header from '../atoms/Header/Header'
import Button from '../atoms/Button/Button'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  margin-top: 90px;
  height: calc(100vh - 180px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const StyledNotFoundImage = styled(NotFoundImage)`
  width: 100%;
  max-width: 35%;
  height: auto;
`
const StyledHeader = styled(Header)`
  margin: 2rem;
  text-align: center;
`

const NotFoundLayout = () => {
  return (
    <ThemeColorProvider>
      <UniversalLayout>
        <SEO title="404: nie znaleziono" />
        <Wrapper>
          <StyledNotFoundImage />
          <StyledHeader>
            Nie udało nam się znależć tej strony{' '}
            <span role="img" aria-label="sad face">
              😔
            </span>
          </StyledHeader>

          <Button text="Strona główna" as={Link} to="/" />
        </Wrapper>
      </UniversalLayout>
    </ThemeColorProvider>
  )
}

export default NotFoundLayout
