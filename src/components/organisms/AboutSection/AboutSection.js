import React from 'react'
import styled from 'styled-components'
import Header from '../../atoms/Header/Header'
import Accent from '../../atoms/Accent/Accent'

const Wrapper = styled.article`
  width: 100%;
  padding: 5rem 3rem;
  //padding: 5rem 4rem;
  display: flex;
  flex-direction: column;
`
const SectionTitle = styled.h4`
  font-weight: 400;
  color: ${({ theme }) => theme.accent};
  margin: 0;
`
const TitleWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 2rem;
  padding: 1rem;
  border-left: 3px solid ${({ theme }) => theme.accent};
`

const AboutSection = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <SectionTitle id="o-nas">O nas</SectionTitle>
        <Header>
          Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit.&nbsp;
          <Accent underline withoutColor>
            Maiores, molestiae!
          </Accent>
        </Header>
      </TitleWrapper>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
        aliquid amet aut dolore, doloremque dolores doloribus esse impedit,
        mollitia necessitatibus nihil numquam perspiciatis rem rerum sunt ullam
        veritatis vitae voluptas?
      </p>
    </Wrapper>
  )
}

export default AboutSection
