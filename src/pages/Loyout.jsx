import React from 'react'
import Menu from '../components/Menu'
import { Outlet } from 'react-router-dom'

function Loyout() {
  return (
    <div>
      <Menu />
      <Outlet/>
      <footer>HI</footer>
    </div>
  )
}

export default Loyout