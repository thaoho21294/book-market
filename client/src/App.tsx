import Login from 'scenes/login'
import './App.scss'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import RootLayout from 'components/layouts/RootLayout'
import Books from 'scenes/books'
import About from 'scenes/about'
import PageNotFound from 'components/page-not-found/PageNotFound'
import Register from 'scenes/register'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Books />} />
        <Route path='books' element={<Books />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
      <Route path='register' element={<Register />} />
      <Route path='logout' element={<Login />} />
      <Route path='login' element={<Login />} />
    </Route>,
  ),
)
function App() {
  return <RouterProvider router={router} />
}

export default App
