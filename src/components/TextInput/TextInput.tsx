import { ChangeEvent } from 'react'
import './TextInput.scss'

export const TextInput = ({
  label,
  value,
  name,
  placeholder,
  touched,
  valid,
  onChange,
  onBlur,
}: {
  label: string
  value: string
  name: string
  placeholder?: string
  touched?: boolean
  valid?: boolean
  onChange?: (newValue: string, name: string) => void
  onBlur?: (name: string) => void
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value, name)
  }

  const message = (() => {
    if (touched && value === '') return 'required'
    if (value !== '' && !valid) return `Invalid ${label.toLowerCase()}`
  })()

  return (
    <div className="TextInput">
      <div className="TextInput__header">
        <label className="TextInput__label" htmlFor={name}>
          {label}
        </label>
        <span className="TextInput__message">{message}</span>
      </div>
      <input
        className="TextInput__input"
        id={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={onBlur && (() => onBlur(name))}
      />
    </div>
  )
}
