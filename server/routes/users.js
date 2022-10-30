const router = require('express').Router()
const User = require('../models/user.model')

router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/login').post((req, res) => {
  User.findOne({ username: req.body.username, password: req.body.password })
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/add').post((req, res) => {
  const { username, password, location, description } = req.body
  const newUser = new User({ username, password, location, description })

  newUser
    .save()
    .then(() => res.json('User added!'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      const updatedUser = new User(Object.assign(user, req.body))
      updatedUser
        .save()
        .then(() => res.json('User updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error:' + err))
})

module.exports = router
