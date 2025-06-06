
import { useState } from 'react'

import './App.css'

function App() {
  
let [counter, setCounter] = useState(0)

  const iCounter = () =>{
    if (counter >= 20) {
      console.log('counter limit is reached')
      return;
    } 
    const newCounter = counter + 1
    setCounter(newCounter)
    console.log('counter increases by 1 and now counter is', newCounter)
  }
  const dCounter = () =>{
    if (counter <= 0){
      console.log('counter cannot go below this')
      return;
    }
      const newCounter = counter - 1
      setCounter(newCounter)
      console.log('counter decreases by 1 and now counter is', newCounter)
  }

  return (
    <>
    <h3> Counter is {counter} </h3>
    <button onClick={iCounter} >increase</button>
    <p>value of counter cannot go beyond 20</p>
    <button onClick={dCounter}>decrease</button>
    </>
  )
}

export default App
