const router = require('express').Router()
const Book = require('../models/book.model')

router.route('/').get((req, res) => {
  Book.find()
    .then((blogs) => res.json(blogs))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/add').post((req, res) => {
  const newBook = new Book(req.body)

  newBook
    .save()
    .then(() => res.json('Book added!'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/:id').delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted!'))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/update/:id').post((req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      const updatedBook = new Book(Object.assign(book, req.body))

      updatedBook
        .save()
        .then(() => res.json('Book updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error:' + err))
})

module.exports = router
