import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'


function Github() {
  const data = useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect( ()=>{
    //     fetch("https://api.github.com/users/akashpandey001")
    //     .then(Response => Response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setdata(data)

    //     })
    // },[])
  return (
    <div className='bg-gray-600 text-5xl m-4 p-4'>
         Github Followers : {data.followers}
         <img src={data.avatar_url} alt="Github pfp" width={300} />
    </div>
  )
}

export default Github


export const GithubInfoLoader = async() => {
   const response = await fetch("https://api.github.com/users/akashpandey001")
   return response.json()
}