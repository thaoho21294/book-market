import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useMatch, useNavigate } from 'react-router-dom'
import { TextField, Button, Alert } from '@mui/material'
import { BLOG_API } from '../../constants'
import { getUser, removeUser, setUser } from '../../contexts'
import './Login.scss'
import loginValidationSchema from 'schema/loginValidationSchema'
import { useFormik } from 'formik'
import LoadingSpinner from 'components/loading-spinner'

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
    setLoading(false)
    setError('Invalid username or password')
  }

  const onSubmit = (values) => {
    setLoading(true)
    axios
      .post(`${BLOG_API}/users/login`, {
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

  const { handleSubmit, handleChange, touched, errors: formikErrors } = formik

  return (
    <div className='login-container'>
      {loading && <LoadingSpinner />}
      <form className='login-form' onSubmit={handleSubmit}>
        {error && <Alert severity='error'>{error}</Alert>}
        <TextField
          id='username'
          name='username'
          label='Username'
          variant='standard'
          color='success'
          error={touched.username && Boolean(formikErrors.username)}
          onChange={handleChange}
          helperText={touched.username && formikErrors.username}
        />
        <TextField
          id='password'
          label='Password'
          name='password'
          type='password'
          variant='standard'
          color='success'
          error={touched.password && Boolean(formikErrors.password)}
          helperText={touched.password && formikErrors.password}
          onChange={handleChange}
        />
        <Button
          type='submit'
          variant='contained'
          className='form__custom-button'
          color='success'
        >
          Log in
        </Button>
      </form>
    </div>
  )
}

export default Login
