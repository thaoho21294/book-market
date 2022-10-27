import React from 'react'
import { Link, useMatch } from 'react-router-dom'
import './Navbar.scss'
import { FEATURES } from '../../constants'
import classNames from 'classnames'
import { getPermission } from 'utils/permission'

const Navbar = () => {
  const { canCreate } = getPermission()
  return (
    <nav className='small-container'>
      <ol>
        {FEATURES.map((feature, index) => {
          const isEnable = feature.needAuthentication
            ? canCreate()
            : !feature.needAuthentication

          return (
            isEnable && (
              <li
                key={index}
                className={classNames({
                  active: useMatch(feature.path),
                })}
              >
                <Link to={feature.path}>{feature.label}</Link>
              </li>
            )
          )
        })}
      </ol>
    </nav>
  )
}

export default Navbar
