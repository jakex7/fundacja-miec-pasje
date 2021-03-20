import React from 'react'
import Accent from '../../atoms/Accent/Accent'
import { MainWrapper, StyledDotsImage, Wrapper } from './AboutSection.style'
import SectionTitle from '../../molecules/SectionTitle/SectionTitle'

const AboutSection = () => {
  return (
    <Wrapper id="o-nas">
      <SectionTitle title="O nas">
        <>
          Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit.&nbsp;
          <Accent underline withoutColor>
            Maiores, molestiae!
          </Accent>
        </>
      </SectionTitle>
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

export default AboutSection
