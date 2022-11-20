import BookCard from './BookCard'
import BookService from '../../services/books.service'
import './Books.scss'
import { useEffect, useState } from 'react'
import { BookType } from 'types/books.types'

const Books = () => {
  const [books, setBooks] = useState<BookType[]>([])
  const [step, setStep] = useState(1)
  const [itemsEachStep] = useState(30)

  useEffect(() => {
    BookService.getBooks().then((res) => {
      setBooks(res.data)
    })
  }, [])

  const handleShowMore = () => {
    setStep(step + 1)
  }
  return (
    <div className='books'>
      <div className='book-list'>
        {books.slice(0, itemsEachStep * step).map((book, index) => (
          <BookCard item={book} key={index} />
        ))}
      </div>
      {books.length > 30 && (
        <button
          data-testid='show-more-btn'
          className='show-more-btn'
          onClick={handleShowMore}
        >
          More Product
        </button>
      )}
    </div>
  )
}

export default Books
