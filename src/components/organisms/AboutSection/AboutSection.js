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
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </MainWrapper>
    </Wrapper>
  )
}

export default AboutSection
