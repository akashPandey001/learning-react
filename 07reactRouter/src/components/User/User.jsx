import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-shadow-lg text-5xl'>
     User : {userid}
    </div>
  )
}

export default User
