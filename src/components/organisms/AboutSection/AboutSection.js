import React from 'react'
import { MainWrapper, StyledDotsImage, Wrapper } from './AboutSection.style'
import SectionTitle from '../../molecules/SectionTitle/SectionTitle'

const AboutSection = ({ header, content }) => {
  return (
    <Wrapper id="o-nas">
      <SectionTitle title="O nas">
        <>{header}</>
      </SectionTitle>
      <MainWrapper>
        <StyledDotsImage />
        <p>{content}</p>
      </MainWrapper>
    </Wrapper>
  )
}

export default AboutSection
