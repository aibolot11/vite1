import { useState } from 'react'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Loyout from './pages/Loyout'
import Posts from './pages/Posts'
import Form from './pages/Form'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Loyout/>}>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/forms' element={<Form/>}/>
      </Route>
      </Routes>
    </>
  )
}

export default App
