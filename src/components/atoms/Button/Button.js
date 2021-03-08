import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './Button.style'

const Button = props => {
  const { text, onClick } = props
  return <StyledButton onClick={onClick}>{text}</StyledButton>
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Button
