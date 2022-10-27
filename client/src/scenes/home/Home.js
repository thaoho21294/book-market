import React from 'react'
import { Routes, Route, useMatch } from 'react-router-dom'
import Header from 'components/header'
import Navbar from 'components/navbar'
import Books from 'scenes/books'
import About from 'scenes/about'
import './Home.scss'

// TODO: explore why path array doesn't work

function Home() {
  const isCreating = useMatch('/posts/create')

  return (
    <div className='home'>
      <Header />
      <Navbar />
      <Routes>
        <Route path='books' element={<Books />} />
        {/* <Route path='books/:id' element={<Post />} />
        <Route path='books/add' element={<Post />} /> */}
        <Route path='/about' element={<About />} />
        <Route index element={<Books />} />
      </Routes>
      {!isCreating && <footer className='small-container'>This footer</footer>}
    </div>
  )
}

export default Home
