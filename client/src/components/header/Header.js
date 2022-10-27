import { getUser } from 'contexts'
import React from 'react'
import './Header.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const Header = () => {
  const user = getUser()
  return (
    <div>
      <div className='menu-bar'>
        {!user ? (
          <a href='/login'>Login</a>
        ) : (
          <>
            <AccountCircleIcon className='icon' fontSize='large' />
            {user.username} | <a href='/logout'> Logout</a>
          </>
        )}
      </div>
      <header>
        <h1 className='brand'>Thao Ho Blog</h1>
      </header>
    </div>
  )
}

export default Header
