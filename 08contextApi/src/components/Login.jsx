import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username });  
    }

  return (
    <div>
      <h2>login</h2>
      <input 
      value={username}
      onChange={(e) => {setUsername(e.target.value)}}
      type="text" placeholder='Username' 
      />
      <input 
       value={password}
       onChange={(e) => {setPassword(e.target.value)}}
      type="password" placeholder='Password' />
      <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login
