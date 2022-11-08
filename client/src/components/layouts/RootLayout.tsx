import Header from 'components/header'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <Header />
      <div id='container'>
        <Outlet />
      </div>
      <footer>This is footer</footer>
    </>
  )
}

export default RootLayout
