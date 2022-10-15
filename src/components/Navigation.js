import React from 'react'
import './Navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUserAlt,
  faEnvelope,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  const navStyles = 'd-flex align-items-center '
  const link1 = 'Nav-Link1 '

  return (
    <div class='navigation d-flex justify-content-center align-items-center '>
      <ul class=' justify-content-center'>
        <li class='nav-item'>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? navStyles + link1 + ' active'
                : navStyles + link1
            }
            to='/Showcase'>
            <FontAwesomeIcon icon={faHome} className='icon' />
            <span className='mx-2'>Home</span>
          </NavLink>
        </li>
        <li class='nav-item'>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? navStyles + link1 + ' active'
                : navStyles + link1
            }
            to='/About'>
            <FontAwesomeIcon icon={faUserAlt} className='icon' />
            <span className='mx-2'>About</span>
          </NavLink>
        </li>
        <li class='nav-item'>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? navStyles + link1 + ' active'
                : navStyles + link1
            }
            to='/Portfolio'>
            <FontAwesomeIcon icon={faBriefcase} className='icon' />
            <span className='mx-2'>Portfolio</span>
          </NavLink>
        </li>
        <li class='nav-item'>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? navStyles + link1 + ' active'
                : navStyles + link1
            }
            to='/Contact'>
            <FontAwesomeIcon icon={faEnvelope} className='icon' />
            <span className='mx-2'>Contact</span>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
