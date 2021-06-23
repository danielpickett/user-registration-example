import { useState } from 'react'
import { TextInput } from 'components'
import './RegistrationForm.scss'

const formFields = [
  { name: 'firstName', label: 'First name' },
  { name: 'lastName', label: 'Last name' },
  { name: 'npiNumber', label: 'NPI number' },
  { name: 'businessAddress', label: 'Business address' },
  { name: 'phoneNumber', label: 'Phone number' },
  { name: 'email', label: 'Email' },
] as const

type InitialStateType = Record<typeof formFields[number]['name'], string>

export const RegistrationForm = () => {
  const initialState = formFields.reduce<Partial<InitialStateType>>(
    (fields, field) => {
      return { ...fields, [field.name]: '' }
    },
    {}
  ) as InitialStateType

  const [state, setState] = useState(initialState)

  const handleChange = (value: string, name: string) =>
    setState((prev) => ({ ...prev, [name]: value }))

  const handleClick = () => {
    console.log(state)
  }

  return (
    <div className="RegistrationForm">
      <h1 className="RegistrationForm__heading">Provider Registration</h1>
      {formFields.map(({ label, name }) => (
        <TextInput
          key={name}
          label={label}
          name={name}
          value={state[name]}
          onChange={handleChange}
        />
      ))}

      <button
        className="RegistrationForm__button"
        type="button"
        onClick={handleClick}
      >
        Submit Registration
      </button>
    </div>
  )
}
