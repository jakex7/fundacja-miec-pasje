import React from 'react'
import Header from '../../atoms/Header/Header'
import FormField from '../../molecules/FormField/FormField'
import ContactLinks from '../../molecules/ContactLinks/ContactLinks'
import { Element, FlexContainer, Row, Wrapper } from './ContactSection.style'
import Button from '../../atoms/Button/Button'
import { useForm } from '../../../hooks/useForm'

const initialFormState = {
  firstName: '',
  email: '',
  message: '',
  errors: {
    firstName: '',
    email: '',
    message: '',
  },
}

const ContactSection = () => {
  const { formValues, handleInputChange, handleClearForm } = useForm(
    initialFormState
  )

  const handleFormSubmit = e => {
    e.preventDefault()
    // if (formValues.firstName.length >=3 && formValues.email.length >=)
    console.log(formValues)
    handleClearForm()
  }

  return (
    <Wrapper id="kontakt">
      <Header>Kontakt</Header>
      <FlexContainer>
        <Element>
          <ContactLinks />
        </Element>
        <Element>
          <Row>
            <FormField
              id="firstName"
              name="firstName"
              label="Imie"
              value={formValues.firstName}
              onChange={handleInputChange}
            />
            <FormField
              id="email"
              name="email"
              label="E-mail"
              spellCheck={false}
              value={formValues.email}
              onChange={handleInputChange}
            />
          </Row>
          <Row>
            <FormField
              id="message"
              name="message"
              label="Wiadomość"
              type="textarea"
              value={formValues.message}
              onChange={handleInputChange}
            />
          </Row>
          <Row>
            <Button
              text="Prześlij"
              accent="#fff"
              type="submit"
              onClick={handleFormSubmit}
            />
          </Row>
        </Element>
      </FlexContainer>
    </Wrapper>
  )
}

export default ContactSection
