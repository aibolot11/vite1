import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Form() {
 const [title, setTitle] = useState('')
  const [body, setBody] = useState('');

  const request = async ()=> {

    const response = await axios.post('https://dummyjson.com/posts/add', {
      title: title,
      body:body,
      userId: 5
    })
  }

 const navigate = useNavigate()
  

  const click = (element)=> {
    element.preventDefault()
    request()
    navigate('/posts')

    
  }

  return (
    <div>
      <form>
        <input type="text" placeholder='Write title' onInput={e => {setTitle(e.target.value)}} />
        <input type='text' placeholder='write body' onInput={e => {setBody(e.target.value)}}/>
        <button onClick={click}>Send</button>
      </form>
    </div>
  )
}

export default Form