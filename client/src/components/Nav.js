import React from 'react';
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <ul className='nav-ul'>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/list'>List</Link></li>
      </ul>
    </div>
  )
}
