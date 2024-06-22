import './projectsCarousel.css'
import ProjectList from '../Json/ProjectsList.json'


const Projects = () => {

  const projectCard = () => {
    return ProjectList.map((el, index) => {
      return (
        <div className='card' key={index}>
          <div className={`Title${index}`}>
            {el.Title}
          </div>
          <div className={`Images${index}`}>
            <img className={`Image${index}`} src={el.Image} alt={el.Title} />
          </div>
          <div className={`Links${index}`}>
              <div className='projectHolder'>
                <div className='desc'>{el.Description}</div>
                <div className='LinkParent'>
                  <button className={`ProjectLink${index}`} onClick={() => window.open(el.Links)}>Click to visit</button>
                </div>
              </div>
          </div>
        </div>
      );
    });
  };
    
  return (
    <>
      <p className='Projects'>Projects</p>
        <div className='ProjectsContainer'>
          {projectCard()}
        </div>
      
    </> 
  )
}


export default Projects