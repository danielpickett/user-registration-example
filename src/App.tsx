import './App.scss'
import './theme.css'
import { Form } from 'components'
import { registrationFormFields } from 'registrationFormFields'

const App = () => {
  const handleSubmit = (formData: Record<string, string>) => {
    alert(JSON.stringify(formData, null, 2))
  }
  return (
    <div className="App">
      <div className="App__form">
        <Form formFields={registrationFormFields} onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default App
