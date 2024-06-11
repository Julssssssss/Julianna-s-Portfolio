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
            {el.Links.map((link, linkIndex) => (
              <div className='LinkParent' key={linkIndex}>
                <button className={`ProjectLink${linkIndex}`} onClick={() => window.open(link)}>{link}</button>
              </div>
            ))}
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