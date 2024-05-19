import React from 'react'
import { useEffect,useState } from 'react'

function Posts() {
const [posts, setPost] = useState([])
console.log(posts);
  const post = async () => {
    const response = await fetch('https://dummyjson.com/posts' )
    const data = await response.json()
    setPost(data.posts)
    
  }
  useEffect(()=> {
    post()
  }, [])
  return (
    <div>
      {
        posts.map((element)=> (
          <h2>{element.title}</h2>
        ))
      }
    </div>
  )
}

export default Posts