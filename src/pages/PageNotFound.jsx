import React from 'react'
import image from '/src/assets/pagenotfound.jpg'
import { useNavigate } from 'react-router-dom'

export function PageNotFound() {
  const navigator =useNavigate()
  return (
   <div className='d-flex justify-content-center'> 
     <div className='d-flex justify-content-between align-item-center flex-column w-50 h-50 m-3'>
      <img src={image} alt="" /> 
      <div className='d-flex justify-content-evenly m-3'>
        <button className='btn btn-danger' onClick={()=>{navigator('/')}}>Go back</button>
      <button className='btn btn-primary' onClick={()=>{navigator('/')}}>Home</button>
      </div>
    </div>
   </div>
  )
}

