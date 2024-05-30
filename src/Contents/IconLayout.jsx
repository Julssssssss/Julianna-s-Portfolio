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
          <div className={`skillBar${index}`}>
            <div className={`percent${index}`}></div>
          </div>
      </div>
        )
      })
    }

    return (
    <>
      <div className='iconParent'>
        {icons()}
      </div>
    </>
  )
}




export default IconLayout