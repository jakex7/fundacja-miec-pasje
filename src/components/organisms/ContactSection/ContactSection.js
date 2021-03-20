import React, { useEffect } from 'react'
import Header from '../../atoms/Header/Header'
import FormField from '../../molecules/FormField/FormField'
import ContactLinks from '../../molecules/ContactLinks/ContactLinks'
import { Element, FlexContainer, Row, Wrapper } from './ContactSection.style'
import Button from '../../atoms/Button/Button'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const initialFormState = {
  firstName: '',
  email: '',
  message: '',
}
toast.configure({
  position: 'bottom-right',
  autoClose: 5000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
})
const ContactSection = () => {
  const handleFormSubmit = (values, { resetForm }) => {
    console.log(values)
    resetForm()
    toast('Wiadomość przesłana pomyślne', { type: 'success' })
  }
  const formik = useFormik({
    initialValues: initialFormState,
    validationSchema: Yup.object({
      firstName: Yup.string().required('Wymagane'),
      email: Yup.string()
        .email('Wprowadź poprawny adres email')
        .required('Wymagane'),
      message: Yup.string()
        .min(10, 'Wiadomość jest zbyt krótka')
        .required('Wymagane'),
    }),
    onSubmit: handleFormSubmit,
  })
  useEffect(() => {
    formik.touched.firstName && formik.errors.firstName
      ? toast.dark('Imie jest wymagane', { toastId: 'firstName' })
      : toast.dismiss('firstName')
    formik.touched.email && formik.errors.email
      ? toast.dark('Wprowadź poprawne adres e-mail', { toastId: 'email' })
      : toast.dismiss('email')
    formik.touched.message && formik.errors.message
      ? toast.dark('Wiadomość jest zbyt krótka', { toastId: 'message' })
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
