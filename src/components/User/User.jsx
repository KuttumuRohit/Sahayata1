import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'




function User() {
    const {id}=useParams()
  return (
    
    <div  className='text-3xl p-4 bg-gray-600 text-white text-center'>
      User:{id}
    </div>
  )
}

export default User
