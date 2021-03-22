import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { graphql, useStaticQuery } from 'gatsby'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { StyledArrow, Wrapper } from './EventsSection.style'
import SectionTitle from '../../molecules/SectionTitle/SectionTitle'
import Event from '../../molecules/Event/Event'
import ArrowLeft from '../../../assets/images/arrow-circle-left-outline.svg'
import ArrowRight from '../../../assets/images/arrow-circle-right-outline.svg'

const EventsSection = () => {
  const [events, setEvents] = useState([])
  const data = useStaticQuery(graphql`
    query Events {
      allDatoCmsEvent(sort: { order: ASC, fields: datetime }) {
        edges {
          node {
            id
            title
            datetime
            location
          }
        }
      }
    }
  `)
  const settings = {
    dots: true,
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    nextArrow: (
      <StyledArrow>
        <ArrowRight />
      </StyledArrow>
    ),
    prevArrow: (
      <StyledArrow>
        <ArrowLeft />
      </StyledArrow>
    ),
  }
  useEffect(() => {
    setEvents(
      data.allDatoCmsEvent.edges
        .map(({ node: { id, title, datetime, location } }) => ({
          id,
          title,
          datetime,
          location,
        }))
        .filter(({ datetime }) => new Date(datetime) >= new Date())
    )
  }, [data])
  return (
    <Wrapper id="wydarzenia">
      <SectionTitle title="Wydarzenia">
        <>Nadchodzące wydarzenia</>
      </SectionTitle>
      <Slider {...settings}>
        {events.map(({ title, id, datetime, location }) => (
          <Event
            key={id}
            title={title}
            id={id}
            datetime={datetime}
            location={location}
          />
        ))}
      </Slider>
    </Wrapper>
  )
}

export default EventsSection
