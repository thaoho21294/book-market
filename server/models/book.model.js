const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    genre: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: Array, required: true },
    desription: { type: String, required: false },
    username: { type: String, required: true },
  },
  {
    timestamps: true,
  },
)

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
