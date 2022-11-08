import { useEffect, useState } from 'react'
import axios from 'axios'
import { useMatch, useNavigate } from 'react-router-dom'
import { Message, Button, Icon, Dimmer, Loader, Form } from 'semantic-ui-react'
import { FormikProvider, useFormik } from 'formik'

import { SERVER_URL } from '../../constants'
import { getUser, removeUser, setUser } from '../../contexts'
import './Login.scss'
import FormInput from 'components/form-input'
import { loginValidationSchema } from 'schema/validationSchema'

const Login = () => {
  const navigate = useNavigate()
  const isLogout = useMatch('/logout')
  const [error, setError] = useState()
  const [loading, setLoading] = useState()

  useEffect(() => {
    if (isLogout) {
      removeUser()
      navigate('/')
    }

    if (getUser()) {
      navigate('/')
    }
  }, [isLogout])

  const handleSubmitException = () => {
    // @ts-expect-error TS(2345): Argument of type 'false' is not assignable to para... Remove this comment to see the full error message
    setLoading(false)
    // @ts-expect-error TS(2345): Argument of type '"Invalid username or password"' ... Remove this comment to see the full error message
    setError('Invalid username or password')
  }

  const onSubmit = (values) => {
    // @ts-expect-error TS(2345): Argument of type 'true' is not assignable to param... Remove this comment to see the full error message
    setLoading(true)
    axios
      .post(`${SERVER_URL}/users/login`, {
        username: values.username,
        password: values.password,
      })
      .then((response) => {
        if (response.data == null) {
          // fake timer
          setTimeout(() => {
            handleSubmitException()
          }, 2000)
          return
        }
        // fake timer
        setTimeout(() => {
          setUser({
            username: response.data.username,
            permission: response.data.permission,
            role: response.data.role,
          })
          // @ts-expect-error TS(2345): Argument of type 'false' is not assignable to para... Remove this comment to see the full error message
          setLoading(false)
          navigate('/')
        }, 2000)
      })
      .catch((err) => {
        console.log(err)
        handleSubmitException()
      })
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit,
  })

  return (
    <div className='login-container'>
      <div className='login-title'>
        <Icon name='book' size='huge' circular color='green'></Icon>
        <h2>Sign in to Book Market</h2>
      </div>
      <Dimmer active={loading}>
        <Loader />
      </Dimmer>
      <FormikProvider value={formik}>
        <Form className='login-form'>
          {error && <Message negative>{error}</Message>}
          <FormInput id='username' name='username' label='Username' />
          <FormInput
            id='password'
            label='Password'
            name='password'
            type='password'
          />
          <Button
            onClick={() => {
              formik.handleSubmit()
            }}
            color='green'
          >
            Log in
          </Button>
        </Form>
      </FormikProvider>
    </div>
  )
}

export default Login
