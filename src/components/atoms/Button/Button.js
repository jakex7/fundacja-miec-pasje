import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './Button.style'

const Button = ({ text, onClick, accent, as, to, type }) => {
  return (
    <StyledButton onClick={onClick} accent={accent} as={as} to={to} type={type}>
      {text}
    </StyledButton>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  accent: PropTypes.string,
  as: PropTypes.func,
  to: PropTypes.string,
  type: PropTypes.string,
}

export default Button
