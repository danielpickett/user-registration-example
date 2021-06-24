import { useState } from 'react'
import { TextInput } from 'components'
import './RegistrationForm.scss'

export type FormFieldType = {
  name: string
  label: string
  placeholder?: string
  test?: (string: string) => boolean
  mask?: (string: string) => string
}

type FieldStateType = { value: string; touched: boolean }
type InitialStateType = Record<string, FieldStateType>

export const RegistrationForm = ({
  formFields,
}: {
  formFields: FormFieldType[]
}) => {
  const initialState = formFields.reduce<Partial<InitialStateType>>(
    (fields, field) => {
      return {
        ...fields,
        [field.name]: { value: '', touched: false },
      }
    },
    {}
  ) as InitialStateType
  const [state, setState] = useState(initialState)

  const isValidField = (value: string, test?: (string: string) => boolean) => {
    if (value === '') return false
    if (!test) return true
    if (test(value)) return true
    return false
  }

  const isSubmitDisabled = formFields.some((field) => {
    const { test } = field
    const { value } = state[field.name]
    return !isValidField(value, test)
  })
  const handleChange = (value: string, name: string) => {
    const mask = formFields.find((field) => name === field.name)?.mask
    setState((prev) => ({
      ...prev,
      [name]: { ...prev[name], value: mask ? mask(value) : value },
    }))
  }

  const handleClick = () => {
    if (isSubmitDisabled) {
      Object.keys(state).forEach((key) => {
        setState((prev) => ({
          ...prev,
          [key]: { ...prev[key], touched: true },
        }))
      })
    } else {
      alert(JSON.stringify(state, null, 2))
    }
  }

  const handleBlur = (name: string) => {
    setState((prev) => ({
      ...prev,
      [name]: { ...prev[name], touched: true },
    }))
  }

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
            placeholder={field.placeholder}
            onChange={handleChange}
            valid={isValidField(fieldState.value, field.test)}
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
