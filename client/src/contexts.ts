const getUser = () => {
  // @ts-expect-error TS(2345): Argument of type 'string | null' is not assignable... Remove this comment to see the full error message
  return JSON.parse(localStorage.getItem('user'))
}

const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

const removeUser = () => {
  localStorage.removeItem('user')
}

export { getUser, setUser, removeUser }
