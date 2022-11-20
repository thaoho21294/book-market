import React from 'react'
import { BookType } from 'types/books.types'

import './BookCard.scss'

type BookCardProps = {
  item: BookType
}

const BookCard: React.FC<BookCardProps> = ({ item }) => {
  return (
    <div className='book-card'>
      <img src={item?.images[0]} alt='' />
      <p>
        {item?.title} (Quận {item?.district})
      </p>
      <span>{item?.price.toLocaleString()} đ</span>
    </div>
  )
}

export default BookCard
