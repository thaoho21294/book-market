import Login from 'scenes/login'
import Home from 'scenes/home'
import './App.scss'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Root from 'components/layouts/RootLayout'
import Books from 'scenes/books'
import About from 'scenes/about'
import PageNotFound from 'components/page-not-found/PageNotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Root />}>
        <Route index element={<Books />} />
        <Route path='books' element={<Books />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
      <Route path='logout' element={<Login />} />
      <Route path='login' element={<Login />} />
    </Route>,
  ),
)
function App() {
  return <RouterProvider router={router} />
}

export default App
