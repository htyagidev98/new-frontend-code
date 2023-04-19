import React from 'react'
import { NavLink } from 'react-router-dom'
const Task = () => {
  return (
    <div className='tasks'>
      <ul>
        <li><NavLink className='nav-link'>Home </NavLink> </li>
        <li><NavLink className='nav-link'>About </NavLink> </li>
        <li><NavLink className='nav-link'>Service </NavLink> </li>
        <li><NavLink className='nav-link'>Contact </NavLink> </li>
      </ul>
    </div>
  )
}

export default Task
