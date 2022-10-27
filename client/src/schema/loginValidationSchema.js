import { object, string } from 'yup'

const loginValidationSchema = object({
  username: string().required('Username is required'),
  password: string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

export default loginValidationSchema
