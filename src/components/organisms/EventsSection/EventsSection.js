import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { graphql, useStaticQuery } from 'gatsby'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { StyledArrow, StyledError, Wrapper } from './EventsSection.style'
import SectionTitle from '../../molecules/SectionTitle/SectionTitle'
import Event from '../../molecules/Event/Event'
import ArrowLeft from '../../../assets/images/arrow-circle-left-outline.svg'
import ArrowRight from '../../../assets/images/arrow-circle-right-outline.svg'
import { useWindowSize } from '../../../hooks/useWindowSize'

const EventsSection = () => {
  const [events, setEvents] = useState([])
  const windowSize = useWindowSize()
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
    infinite: true,
    slidesToShow:
      windowSize.width >= 1100 ? 3 : windowSize.width >= 700 ? 2 : 1,
    slidesToScroll: 1,
    draggable: windowSize.width < 1100,
    nextArrow:
      windowSize.width >= 1100 ? (
        <StyledArrow>
          <ArrowRight />
        </StyledArrow>
      ) : null,
    prevArrow:
      windowSize.width >= 1100 ? (
        <StyledArrow>
          <ArrowLeft />
        </StyledArrow>
      ) : null,
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
      {events.length > 0 ? (
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
      ) : (
        <StyledError>
          W związku z sytuacją epidemiologiczną tymczasowo nie ma zaplanowanych
          wydarzeń
        </StyledError>
      )}
    </Wrapper>
  )
}

export default EventsSection
