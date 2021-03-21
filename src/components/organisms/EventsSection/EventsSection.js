import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Wrapper } from './EventsSection.style'
import SectionTitle from '../../molecules/SectionTitle/SectionTitle'
import { events } from '../../../assets/data/events'

const EventWrapper = styled.div`
  margin: 1rem;
  box-sizing: border-box;
  width: calc(100% - 2rem);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  background-color: ${({ theme }) => theme.lightGray};
  border: 1px solid ${({ theme }) => theme.darkGray};
`
const Top = styled.div``
const Day = styled.h3`
  margin: 0;
  font-weight: 300;
  font-size: 2.5rem;
`
const Month = styled.div`
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 0.9rem;
`
const Bottom = styled.div``
const Title = styled.div`
  margin-bottom: 1rem;
  letter-spacing: 1px;
`
const Time = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.accent};
`
const Location = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.accent};
`

const EventsSection = () => {
  const settings = {
    dots: true,
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return (
    <Wrapper id="wydarzenia">
      <SectionTitle title="Wydarzenia">
        <>Nadchodzące wydarzenia</>
      </SectionTitle>
      <Slider {...settings}>
        {events.map(event => (
          <div key={Math.random()}>
            <EventWrapper>
              <Top>
                <Day>{event.day}</Day>
                <Month>{event.month}</Month>
              </Top>
              <Bottom>
                <Title>{event.title}</Title>
                <Time>{event.time}</Time>
                <Location>@{event.location}</Location>
              </Bottom>
            </EventWrapper>
          </div>
        ))}
      </Slider>
    </Wrapper>
  )
}

export default EventsSection
