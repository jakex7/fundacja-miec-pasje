import React from 'react'
import Header from '../../atoms/Header/Header'
import Accent from '../../atoms/Accent/Accent'
import {
  MainWrapper,
  SectionTitle,
  TitleWrapper,
  Wrapper,
} from './AboutSection.style'

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
      <MainWrapper>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          aliquid amet aut dolore, doloremque dolores doloribus esse impedit,
          mollitia necessitatibus nihil numquam perspiciatis rem rerum sunt
          ullam veritatis vitae voluptas?
        </p>
        <div>
          <img src="" alt="" />
        </div>
      </MainWrapper>
    </Wrapper>
  )
}

export default AboutSection
