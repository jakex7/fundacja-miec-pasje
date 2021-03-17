import React from 'react'
import Header from '../../atoms/Header/Header'
import Accent from '../../atoms/Accent/Accent'
import {
  MainWrapper,
  SectionTitle,
  StyledDotsImage,
  TitleWrapper,
  Wrapper,
} from './EventsSection.style'

const EventsSection = () => {
  return (
    <Wrapper id="o-nas">
      <TitleWrapper>
        <SectionTitle href="#o-nas">O nas</SectionTitle>
        <Header>
          Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit.&nbsp;
          <Accent underline withoutColor>
            Maiores, molestiae!
          </Accent>
        </Header>
      </TitleWrapper>
      <MainWrapper>
        <StyledDotsImage />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.&nbsp;
          <Accent>Aliquam aliquid amet aut dolore</Accent>, doloremque dolores
          doloribus esse impedit, mollitia necessitatibus nihil numquam
          perspiciatis rem rerum sunt ullam veritatis vitae voluptas?
        </p>
      </MainWrapper>
    </Wrapper>
  )
}

export default EventsSection
