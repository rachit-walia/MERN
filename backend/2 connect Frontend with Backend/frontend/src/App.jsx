import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [jokes,setJokes]=useState([])
  useEffect(()=>{
    axios.get('https://localhost:3000/api/jokes').then((respnse)=>{
      setJokes(respnse.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  })

  return (
    <>
      
        <h1>Hello react</h1>
        <p>JOKES: {jokes.length}</p>
        {
          jokes.map((joke,index)=>{
            <div>key={joke.id},
            <h3>{joke.title}</h3>
            <p>{joke.content}</p></div>
          })
        }
    </>
  )
}

export default App
