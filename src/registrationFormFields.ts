import { emailRegEx, numbersOnlyRegEx, phoneNumRegEx } from 'regex'
import { phoneNumberUSAMask, numbersOnlyMask } from 'masks'
import { FormFieldType } from 'components'

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
    test: numbersOnlyRegEx.test.bind(numbersOnlyRegEx),
    mask: numbersOnlyMask,
  },
  {
    name: 'email',
    label: 'Email',
    test: emailRegEx.test.bind(emailRegEx),
  },
  {
    name: 'phoneNumber',
    label: 'Phone number',
    test: phoneNumRegEx.test.bind(phoneNumRegEx),
    mask: phoneNumberUSAMask,
  },
  // TODO: break this field into individual fields
  {
    name: 'businessAddress',
    label: 'Business address',
    placeholder: 'Street, City, State, Zip',
  },
]
