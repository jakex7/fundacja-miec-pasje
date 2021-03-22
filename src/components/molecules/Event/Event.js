import React from 'react'
import PropTypes from 'prop-types'
import { monthName, zeroPad } from '../../../helpers/datetime'
import {
  Bottom,
  Day,
  EventWrapper,
  Location,
  Month,
  Time,
  Title,
  Top,
} from './Event.style'

const Event = ({ id, title, datetime, location }) => {
  const date = new Date(datetime)
  return (
    <div key={id}>
      <EventWrapper>
        <Top>
          <Day>{zeroPad(date.getDate())}</Day>
          <Month>{monthName(date.getMonth())}</Month>
        </Top>
        <Bottom>
          <Title>{title}</Title>
          <Time>
            {zeroPad(date.getHours())}:{zeroPad(date.getMinutes())}
          </Time>
          <Location>@{location}</Location>
        </Bottom>
      </EventWrapper>
    </div>
  )
}

Event.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  datetime: PropTypes.string,
  location: PropTypes.string,
}

export default Event
