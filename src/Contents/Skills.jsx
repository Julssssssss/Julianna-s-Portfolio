
import SkillSet from '../Json/skillSet.json'
import IconLayout from './IconLayout'



const Skills = () => {
    
  return (
   <>
   <div className='sets'>
        <div>
            <IconLayout datas={SkillSet}/>
        </div>
   </div>
   </>
  )
}

export default Skills