export type BookType = {
  _id: string
  title: string
  genre: string
  price: number
  images: string[]
  description?: string
  username: string
  district: string
}

export type BookListResponse = {
  data: BookType[]
}
