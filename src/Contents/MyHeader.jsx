import './Header.css'
import { useRef, useState } from 'react'

const MyHeader = () => {

  const [Nav, setNav] = useState(false)

  const toggleNav =()=>{
    setNav(!Nav)
  }


  return (
    <>
    <div className='Profile'>
      <svg onClick={toggleNav} className={`burger-icon ${Nav ? 'open' : ''}`} viewBox="0 0 46 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="navigation">
          <g id="burger">
            <path id="hamburger " d="M10.38 9C9.61785 9 9 9.65815 9 10.47C9 11.2819 9.61785 11.94 10.38 11.94V9ZM36.14 11.94C36.9021 11.94 37.52 11.2819 37.52 10.47C37.52 9.65815 36.9021 9 36.14 9V11.94ZM10.38 16.84C9.61785 16.84 9 17.4982 9 18.31C9 19.1218 9.61785 19.78 10.38 19.78V16.84ZM32.46 19.78C33.2221 19.78 33.84 19.1218 33.84 18.31C33.84 17.4982 33.2221 16.84 32.46 16.84V19.78ZM10.38 24.68C9.61785 24.68 9 25.3382 9 26.15C9 26.9618 9.61785 27.62 10.38 27.62V24.68ZM23.26 27.62C24.0221 27.62 24.64 26.9618 24.64 26.15C24.64 25.3382 24.0221 24.68 23.26 24.68V27.62ZM10.38 11.94H36.14V9H10.38V11.94ZM10.38 19.78H32.46V16.84H10.38V19.78ZM10.38 27.62H23.26V24.68H10.38V27.62Z" fill="#99204A"/>
          </g>
          <g id="down">
            <path id="down_2" d="M9.53266 14.5689C8.82245 15.3181 8.82245 16.533 9.53266 17.2822L18.4304 26.6592C19.851 28.1565 22.1531 28.1559 23.5731 26.6581L32.4673 17.2753C33.1776 16.5261 33.1776 15.3112 32.4673 14.562C31.7571 13.8127 30.6055 13.8127 29.8953 14.562L22.2828 22.5925C21.5726 23.3419 20.4209 23.3419 19.7107 22.5925L12.1047 14.5689C11.3945 13.8196 10.243 13.8196 9.53266 14.5689Z" fill="#99204A"/>
          </g>
        </g>
      </svg>
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