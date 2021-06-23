import { useState } from 'react'
import { TextInput } from 'components'
import './RegistrationForm.scss'
import { emailRegEx, numbersOnlyRegEx, phoneNumRegEx } from 'regex'

const formFields = [
  { name: 'firstName', label: 'First name', regex: undefined },
  { name: 'lastName', label: 'Last name', regex: undefined },
  { name: 'npiNumber', label: 'NPI number', regex: numbersOnlyRegEx },
  { name: 'businessAddress', label: 'Business address', regex: undefined },
  {
    name: 'phoneNumber',
    label: 'Phone number',
    regex: phoneNumRegEx,
  },
  { name: 'email', label: 'Email', regex: emailRegEx },
] as const

type FieldNameType = typeof formFields[number]['name']
type FieldStateType = { value: string; touched: boolean }
type InitialStateType = Record<FieldNameType, FieldStateType>

const initialState = formFields.reduce<Partial<InitialStateType>>(
  (fields, field) => {
    return {
      ...fields,
      [field.name]: { value: '', touched: false },
    }
  },
  {}
) as InitialStateType

export const RegistrationForm = () => {
  const [state, setState] = useState(initialState)

  const handleChange = (value: string, name: string) =>
    setState((prev) => ({
      ...prev,
      [name]: { ...prev[name as FieldNameType], value },
    }))

  const handleClick = () => {
    console.log(state)
  }
  const handleBlur = (name: string) => {
    setState((prev) => ({
      ...prev,
      [name]: { ...prev[name as FieldNameType], touched: true },
    }))
  }

  const isValidField = (value: string, regex?: RegExp) => {
    if (value === '') return false
    if (!regex) return true
    if (regex.test(value)) return true
    return false
  }

  console.log('state', state)
  const isSubmitDisabled = formFields.some((field) => {
    const { regex } = field
    const { value } = state[field.name]
    return !isValidField(value, regex)
  })

  console.log('isSubmitDisabled', isSubmitDisabled)
  return (
    <div className="RegistrationForm">
      <h1 className="RegistrationForm__heading">Provider Registration</h1>
      {formFields.map((field) => {
        const fieldState = state[field.name]
        return (
          <TextInput
            key={field.name}
            label={field.label}
            name={field.name}
            value={fieldState.value}
            onChange={handleChange}
            valid={isValidField(fieldState.value, field.regex)}
            touched={fieldState.touched}
            onBlur={handleBlur}
          />
        )
      })}

      <button
        className={`RegistrationForm__button${
          isSubmitDisabled ? ' RegistrationForm__button--is-disabled' : ''
        }`}
        type="button"
        onClick={handleClick}
      >
        Submit Registration
      </button>
    </div>
  )
}
