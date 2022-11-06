import { getUser } from 'contexts'
import React from 'react'
import { Icon } from 'semantic-ui-react'
import './Header.scss'

const Header = () => {
  const user = getUser()
  return (
    <header>
      <h3 className='brand'>Book Market</h3>
      <div className='menu-bar'>
        {!user ? (
          <a href='/login'>Login</a>
        ) : (
          <>
            <Icon name='user circle' size='big' />
            {user.username} | <a href='/logout'> Logout</a>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
