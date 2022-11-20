import { object, string } from 'yup'

export const loginValidationSchema = object({
  username: string().label('Username').required(),
  password: string().label('Password').required(),
})

export const registerValidationSchema = object({
  username: string().label('Username').required(),
  password: string().label('Password').required(),
  email: string().label('Email').required(),
})