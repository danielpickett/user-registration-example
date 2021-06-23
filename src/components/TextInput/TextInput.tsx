import { ChangeEvent } from 'react'
import './TextInput.scss'

export const TextInput = ({
  label,
  value,
  name,
  touched,
  valid,
  onChange,
  onBlur,
}: {
  label: string
  value: string
  name: string
  touched: boolean
  valid: boolean
  onChange: (newValue: string, name: string) => void
  onBlur: (name: string) => void
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value, name)

  const message = (() => {
    if (touched && value === '') return 'required'
    if (value !== '' && !valid) return `Invalid ${label.toLowerCase()}`
    return <>&nbsp;</>
  })()

  return (
    <div className="TextInput">
      <label className="TextInput__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="TextInput__input"
        id={name}
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={() => onBlur(name)}
      />
      <span className="TextInput__message">{message}</span>
    </div>
  )
}
