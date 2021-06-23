import { ChangeEvent } from 'react'
import './TextInput.scss'

export const TextInput = ({
  label,
  value,
  onChange,
  name,
}: {
  label: string
  value: string
  onChange: (newValue: string, name: string) => void
  name: string
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value, name)

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
      />
    </div>
  )
}
