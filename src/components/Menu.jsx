import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
      <Link to="/posts">all posts</Link>
      <Link to="/forms">forms</Link>
    </div>
  )
}

export default Menu