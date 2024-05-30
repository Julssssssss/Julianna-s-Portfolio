import './Header.css'
import { useRef, useState } from 'react'

const MyHeader = () => {



  return (
    <>
    <div className='Profile'>
      <div className='circle1'> 
        <p className='intro'>Hi, it's</p>
        <p className='name'>Julianna</p>
        <div className='circle2'/>
        <div className='circle3'/>
      </div>
      <img className='Juls' src='https://res.cloudinary.com/dj70ev3dn/image/upload/v1714900989/Portfolio/IMG_20231209_103809_604_1_b1y8df.png' alt='juls'/>
    </div>
    </>
  )
}

export default MyHeader