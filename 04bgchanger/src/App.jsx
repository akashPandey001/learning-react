import { useState } from 'react'



function App() {
  const [color, setColor] = useState('aqua')

  return (
   <div className='w-full h-screen bg-black'
   style={{backgroundColor: color}}>

   <div className='fixed  flex  justify-center bottom-12 inset-x-0 px-3'>
    <div className='flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded 3xl'>
      <button onClick={ () => setColor('red')} className='outline-none px-6 py-2 rounded-full  shadow-lg'
      style={{backgroundColor: 'red'}}>Red
      </button >
      <button onClick={ () => setColor('green')} className='outline-none px-6 py-2 rounded-full  shadow-lg'
      style={{backgroundColor: 'green'}}>Green
      </button>
      <button onClick={ () => setColor('blue')}  className='outline-none px-6 py-2 rounded-full  shadow-lg'
      style={{backgroundColor: 'blue'}}>Blue
      </button>
      <button onClick={ () => setColor('purple')} className='outline-none px-6 py-2 rounded-full  shadow-lg'
      style={{backgroundColor: 'purple'}}>Purple
      </button>
      <button onClick={ () => setColor('turquoise')} className='outline-none px-6 py-2 rounded-full  shadow-lg'
      style={{backgroundColor: 'turquoise'}}>Turquoise
      </button>
      <button onClick={ () => setColor('Yellow')} className='outline-none px-6 py-2 rounded-full  shadow-lg'
      style={{backgroundColor: 'Yellow'}}>Yellow
      </button>
      <button onClick={ () => setColor('orange')} className='outline-none px-6 py-2 rounded-full  shadow-lg'
      style={{backgroundColor: 'orange'}}>Orange
      </button>
      <button onClick={ () => setColor('#7FFF00')} className='outline-none px-6 py-2 rounded-full  shadow-lg'
      style={{backgroundColor: '#7FFF00'}}>Chartreuse
      </button>
      <button onClick={ () => setColor('pink')} className='outline-none px-6 py-2 rounded-full  shadow-lg'
      style={{backgroundColor: 'pink'}}>Pink
      </button>
      <button onClick={ () => setColor('#4B0082')} className='outline-none px-6 py-2 rounded-full  shadow-lg'
      style={{backgroundColor: '#4B0082'}}>Indigo
      </button>
      </div>
   </div>
   </div>
  )
}

export default App
