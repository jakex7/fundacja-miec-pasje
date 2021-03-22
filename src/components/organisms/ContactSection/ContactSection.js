import React, { useEffect } from 'react'
import Header from '../../atoms/Header/Header'
import FormField from '../../molecules/FormField/FormField'
import ContactLinks from '../../molecules/ContactLinks/ContactLinks'
import { Element, FlexContainer, Row, Wrapper } from './ContactSection.style'
import Button from '../../atoms/Button/Button'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import axios from 'axios'
import { SEND_EMAIL_URL } from '../../../helpers/api'

const initialFormState = {
  firstName: '',
  email: '',
  message: '',
}
const ContactSection = () => {
  const handleFormSubmit = (values, { resetForm }) => {
    axios
      .post(SEND_EMAIL_URL, {
        message: {
          from: values.email,
          name: values.firstName,
          content: values.message,
        },
      })
      .then(() => {
        resetForm()
        toast('Wiadomość została wysłana 🚀', { type: 'success' })
      })
      .catch(() => {
        toast(
          'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później',
          { type: 'error' }
        )
      })
  }
  const formik = useFormik({
    initialValues: initialFormState,
    validationSchema: Yup.object({
      firstName: Yup.string().required('Imie jest wymagane'),
      email: Yup.string()
        .email('Adres e-mail jest nieprawidłowy')
        .required('E-mail jest wymagany'),
      message: Yup.string()
        .min(10, 'Wiadomość jest zbyt krótka')
        .required('Wiadomość jest wymagana'),
    }),
    onSubmit: handleFormSubmit,
  })
  useEffect(() => {
    formik.touched.firstName && formik.errors.firstName
      ? toast.dark(formik.errors.firstName, {
          toastId: 'firstName',
          autoClose: false,
        })
      : toast.dismiss('firstName')
    formik.touched.email && formik.errors.email
      ? toast.dark(formik.errors.email, { toastId: 'email', autoClose: false })
      : toast.dismiss('email')
    formik.touched.message && formik.errors.message
      ? toast.dark(formik.errors.message, {
          toastId: 'message',
          autoClose: false,
        })
      : toast.dismiss('message')
  }, [formik.touched, formik.errors])
  return (
    <Wrapper id="kontakt">
      <Header>Kontakt</Header>
      <FlexContainer>
        <Element>
          <ContactLinks />
        </Element>
        <Element>
          <form onSubmit={formik.handleSubmit}>
            <Row>
              <FormField
                id="firstName"
                label="Imie"
                {...formik.getFieldProps('firstName')}
                error={
                  formik.touched.firstName && formik.errors.firstName && true
                }
              />
              <FormField
                id="email"
                type="email"
                label="E-mail"
                {...formik.getFieldProps('email')}
                error={formik.touched.email && formik.errors.email && true}
              />
            </Row>
            <Row>
              <FormField
                id="message"
                label="Wiadomość"
                type="textarea"
                {...formik.getFieldProps('message')}
                error={formik.touched.message && formik.errors.message && true}
              />
            </Row>
            <Row>
              <Button text="Prześlij" type="submit" accent="#fff" />
            </Row>
          </form>
        </Element>
      </FlexContainer>
    </Wrapper>
  )
}

export default ContactSection
