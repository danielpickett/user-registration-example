import { emailRegEx, numbersOnlyRegEx } from 'regex'
import { phoneNumberUSAMask, numbersOnlyMask } from 'masks'
import { FormFieldType } from 'components'

// If using RegExp.test for form field tests, don't forget to bind the regex
// to the test function. If you don't, you'll get a runtime error.
// https://stackoverflow.com/questions/20579033/why-do-i-need-to-write-functionvalue-return-my-functionvalue-as-a-callb

const numberOnlyTest = numbersOnlyRegEx.test.bind(numbersOnlyRegEx)
const emailTest = emailRegEx.test.bind(emailRegEx)

export const registrationFormFields: FormFieldType[] = [
  {
    name: 'firstName',
    label: 'First name',
  },
  {
    name: 'lastName',
    label: 'Last name',
  },
  {
    name: 'npiNumber',
    label: 'NPI number',
    test: numberOnlyTest,
    mask: numbersOnlyMask,
  },
  {
    name: 'email',
    label: 'Email',
    test: emailTest,
  },
  {
    name: 'phoneNumber',
    label: 'Phone number',
    // TODO: add support for international phone numbers
    mask: phoneNumberUSAMask,
  },
  // TODO: break 'businessAddress' field into individual fields
  {
    name: 'businessAddress',
    label: 'Business address',
    placeholder: 'Street, City, State, Zip',
  },
]
