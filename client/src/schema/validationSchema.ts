import { object, string } from 'yup'

export const loginValidationSchema = object({
  username: string().label('Username').required(),
  password: string().label('Password').required(),
})
