import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Input from '../../atoms/Input/Input'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &:not(:first-child) {
    margin-left: 2rem;
  }
`
const StyledTextarea = styled.textarea`
  margin-top: 4px;
  border: ${({ error, theme }) =>
    error ? `4px solid ${theme.error}` : `1px solid ${theme.darkGray}`};
  background-color: ${({ theme }) => theme.lightGray};
  padding: 0.5rem 1rem 0.3rem;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 4px 0 0 rgba(51, 51, 51, 1), ${({ theme }) => theme.shadow};
  margin-bottom: 12px;
  width: 100%;
  font-family: inherit;
  resize: none;
`
const FormField = ({
  id,
  label,
  name,
  value,
  onChange = () => {},
  type = 'text',
  spellCheck = true,
  error = false,
}) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <StyledTextarea
          name={name}
          id={id}
          cols="30"
          rows="10"
          onChange={onChange}
          value={value}
          error={error}
        />
      ) : (
        <Input
          type={type}
          value={value}
          name={name}
          id={id}
          onChange={onChange}
          spellCheck={spellCheck}
          error={error}
        />
      )}
    </Wrapper>
  )
}

FormField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  spellCheck: PropTypes.bool,
  error: PropTypes.bool,
}

export default FormField
