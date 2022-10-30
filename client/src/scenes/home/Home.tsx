import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from 'components/header'
import Books from 'scenes/books'
import About from 'scenes/about'
import './Home.scss'

// TODO: explore why path array doesn't work

function Home() {
  return (
    <div className='home'>
      <Header />
      <Routes>
        <Route path='books' element={<Books />} />
        {/* <Route path='books/:id' element={<Book />} />
        <Route path='books/add' element={<Books />} /> */}
        <Route path='/about' element={<About />} />
        <Route index element={<Books />} />
      </Routes>
      <footer>This is footer</footer>
    </div>
  )
}

export default Home
