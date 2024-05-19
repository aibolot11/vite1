import React from 'react'
import { useState } from 'react'

function Form() {

  const [form, setForm] = useState('')
  const [block, setBlock] = useState([])
console.log(form);

  const click = (element)=> {
    element.preventDefault()
    setBlock([form, ...block])
  }

  return (
    <div>
      <form>
        <input type="text" placeholder='Write post' onInput={e => {setForm(e.target.value)}} />
        <button onClick={click}>Send</button>
      </form>
      <h2>
        {block.map((e, index) => <div key={index}>{e}</div>)}
      </h2>
    </div>
  )
}

export default Form