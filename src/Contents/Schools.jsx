import './school.css'

const Schools = () => {
  return (
   <>
   <div className='schoolParent'>
        <div className='RTU'>
            <img className='rizal' src='https://res.cloudinary.com/dj70ev3dn/image/upload/v1716352669/Portfolio/rtu_gvadke.png' alt='rtu'/>
            <p className='tertiary'>Tertiary</p>
            <div className='schoolContainer'>
                <p className='schoolName'>Rizal Technological University</p>
                <p className='course'>Bachelor of Science in Information Technology</p>
                <p className='schoolYear0'>2020- 2024</p>
            </div>
        </div>
        <div className='divider'/>
        <div className='AU'>
            <img className='arellano' src='https://res.cloudinary.com/dj70ev3dn/image/upload/v1716352669/Portfolio/AU_wzjuae.png' alt='au'/>
            <p className='SHS'>Secondary</p>
            <div className='secondary'>
                <p className='schoolName1'>Arellano University Plaridel Campus</p>
                <p className='strand'>Tech-voc ICT</p>
                <p className='schoolYear1'>2018-2020</p>
            </div>
        </div>
    </div>
   </>
  )
}

export default Schools