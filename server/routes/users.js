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
  const username = req.body.username
  const password = req.body.password
  const role = req.body.role ?? 'guest'
  const permission = req.body.permission ?? 'read'
  const newUser = new User({ username, password, role, permission })

  newUser
    .save()
    .then(() => res.json('User added!'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.username = req.body.username ?? user.username
      user.permission = req.body.permission ?? user.permission
      user.role = req.body.role ?? user.role
      user
        .save()
        .then(() => res.json('User updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error:' + err))
})

module.exports = router
