const getUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

const removeUser = () => {
  localStorage.removeItem('user')
}

export { getUser, setUser, removeUser }
