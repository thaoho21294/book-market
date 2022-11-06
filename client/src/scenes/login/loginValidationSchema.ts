import { object, string } from 'yup'

const loginValidationSchema = object({
  username: string().required('Username is required'),
  password: string().required('Password is required'),
})

export default loginValidationSchema
