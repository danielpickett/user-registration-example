import './App.scss'
import './theme.css'
import { RegistrationForm } from 'components'

import { registrationFormFields } from 'registrationFormFields'

// If using RegExp.test for form field tests, don't forget to bind the regex
// to the test function. If you don't, you'll get a runtime error.
// https://stackoverflow.com/questions/20579033/why-do-i-need-to-write-functionvalue-return-my-functionvalue-as-a-callb

const App = () => {
  return (
    <div className="App">
      <div className="App__form">
        <RegistrationForm formFields={registrationFormFields} />
      </div>
    </div>
  )
}

export default App
