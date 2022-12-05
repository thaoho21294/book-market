import BookCard from './BookCard'
import BookService from '../../services/books.service'
import './Books.scss'
import { useEffect, useState } from 'react'
import { BookType } from 'types/books.types'

const Books = () => {
  const [books, setBooks] = useState<BookType[]>([])

  useEffect(() => {
    BookService.getBooks().then((res) => {
      setBooks(res.data)
    })
  }, [])
  return (
    <div className='books'>
      <div className='book-list'>
        {books.map((book, index) => (
          <BookCard item={book} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Books
