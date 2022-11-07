import Header from 'components/header'
import { Outlet } from 'react-router-dom'

const Root = () => {
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

export default Root
