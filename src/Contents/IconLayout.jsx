import './Icon.css'

const IconLayout = ({datas}) => {


  const icons = () =>{
    return datas.map((el, index) =>{
      return(
      <div className='ParentContainer' key={index}>
        <div className={`IconContainer${index}`}>
            <img className='Logos' src={el.IconName} alt={el.Name}/>
        </div>
          <div className={`language${index}`}>{el.Name}</div>
      </div>
        )
      })
    }

    return (
    <>
    <div className='SkillTitle'>Skills</div>
      <div className='iconParent'>
        <div className='circle9'/>
        <div className='circle10'/>
        <div className='circle11'/>
        {icons()}
      </div>
    </>
  )
}




export default IconLayout