import { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT CHANGE':
      console.log('input change')
      return {
        ...state,
        [action.field]: action.value,
      }
    case 'CLEAR VALUES':
      return action.initialValues
    case 'THROW ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.errorMessage,
        },
      }
    default:
      return state
  }
}

export const useForm = initialValues => {
  const [formValues, dispatch] = useReducer(reducer, initialValues)
  const handleInputChange = e => {
    dispatch({
      type: 'INPUT CHANGE',
      field: e.target.name,
      value: e.target.value,
    })
  }
  const handleClearForm = () => {
    dispatch({
      type: 'CLEAR VALUES',
      initialValues,
    })
  }
  const handleThrowError = (field, errorMessage) => {
    dispatch({
      type: 'THROW ERROR',
      field,
      errorMessage,
    })
  }
  return {
    formValues,
    handleInputChange,
    handleClearForm,
    handleThrowError,
  }
}
