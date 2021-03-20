import React from 'react'
import { Wrapper } from './EventsSection.style'
import SectionTitle from '../../molecules/SectionTitle/SectionTitle'
// import styled from 'styled-components'

// const Container = styled.div`
// `

const EventsSection = () => {
  return (
    <Wrapper id="wydarzenia">
      <SectionTitle title="Wydarzenia">
        <>Nadchodzące wydarzenia</>
      </SectionTitle>
    </Wrapper>
  )
}

export default EventsSection
