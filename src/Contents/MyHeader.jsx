import './Header.css'
import GradPic from "/assets/gradpic.jpg"

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
      <img className='GradPic' src={GradPic} alt='GradPic'/>
    </div>
    </>
  )
}

export default MyHeader