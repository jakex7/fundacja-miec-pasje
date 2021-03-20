import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from '../../atoms/Header/Header'

export const Title = styled.a`
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

const SectionTitle = ({ title, children }) => {
  return (
    <TitleWrapper>
      <Title href={`#${title.toLowerCase().replace(' ', '-')}`}>{title}</Title>
      <Header>{children}</Header>
    </TitleWrapper>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
}

export default SectionTitle
