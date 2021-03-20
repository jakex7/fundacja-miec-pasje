import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInput = styled.input`
  margin-top: 4px;
  border: 1px solid ${({ theme }) => theme.darkGray};
  background-color: ${({ theme }) => theme.lightGray};
  padding: 0.5rem 1rem 0.3rem;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 4px 0 0 rgba(51, 51, 51, 1);
  margin-bottom: 12px;
  font-family: inherit;
  width: 100%;
`

const Input = ({ type, value, name, id, onChange, spellCheck }) => {
  return (
    <StyledInput
      type={type}
      value={value}
      name={name}
      id={id}
      onChange={onChange}
      spellCheck={spellCheck}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  spellCheck: PropTypes.bool,
}

export default Input
