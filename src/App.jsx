import './App.css';
import MyHeader from './Contents/MyHeader';
import AboutMe from './Contents/AboutMe';
import Skills from './Contents/Skills';
import Schools from './Contents/Schools';
import Projects from './Contents/Projects';
import Contacts from './Contents/Contacts';
import Footer from './Contents/Footer';
import Images from '/public/assets/Images.jsx';
import { useState, useRef, useEffect } from 'react';

const App = () => {
  const [Nav, setNav] = useState(false);
  const [Light, setLight] = useState(false);

  const darkMode = ()=>{
    setLight(false)
  }
  const lightMode = ()=>{
    setLight(true)
  }
  const toggleMode = ()=>{
    if(Light){
      darkMode()
    }else{
      lightMode()
    }
  }
  useEffect(() => {
    if (Light) {
      document.body.classList.remove('darkMode');
    } else {
      document.body.classList.add('darkMode');
    }
  }, [Light]);

  useEffect(()=>{
      const ClickOutside = (event) =>{
        if(Nav && !event.target.closest('.menu')){
          closeNav()
        }
      }
      
      const handleScroll = () => {
        if (Nav) {
          closeNav();
        }
      }

      document.addEventListener('mousedown', ClickOutside)
      window.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('mousedown', ClickOutside)
        window.removeEventListener('scroll', handleScroll);
      };
  }, [Nav])

  const toggleNav = () => {
    setNav(!Nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  

  const aboutMeRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);


  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='Parent'>

        <button className='Mode' onClick={toggleMode}>
          <img className='Cloud' src={Images[7].Source} alt={Images[7].Name}/>
          <img className={`Sun ${Light ? 'dark' : 'light'}`} src={Images[5].Source} alt={Images[5].Name}/>
          <img className={`Moon ${Light ? 'light' : 'dark'}`} src={Images[6].Source} alt={Images[6].Name}/>
        </button>

        <svg onMouseEnter={() => !Nav && toggleNav()} className={`square-icon ${Nav ? 'open' : ''}`} width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect className='rect' x="27.3032" width="38.471" height="38.471" rx="5" transform="rotate(45.2108 27.3032 0)" fill="#C9A0B2"/>
          <circle className='circle' cx="27" cy="27" r="9" fill={Nav ? 'white' : '#CB5B80'}/>
        </svg>
        {Nav &&(
          <div className='menu' onMouseLeave={closeNav}>
            <button className='Info' onClick={() => {scrollToSection(aboutMeRef); closeNav();}}>
              <span className='tooltip'>About me</span>
              <img className='navIcon' src={Images[0].Source} alt={Images[0].alt}/>
            </button>

            <button className='Schools' onClick={() => {scrollToSection(educationRef); closeNav();}}>
              <span className='tooltip1'>Education</span>
              <img className='navIcon1' src={Images[1].Source} alt={Images[1].alt}/>
            </button>

            <button className='Skills' onClick={() => {scrollToSection(skillsRef); closeNav();}}>
              <span className='tooltip2'>Skills</span>
              <img className='navIcon' src={Images[2].Source} alt={Images[2].alt}/>
            </button>

            <button className='ProjectsList' onClick={() => {scrollToSection(projectsRef); closeNav();}}>
              <span className='tooltip3'>Projects</span>
              <img className='navIcon' src={Images[3].Source} alt={Images[3].alt}/>
            </button>

            <button className='Contacts' onClick={() => {scrollToSection(contactsRef); closeNav();}}>
              <span className='tooltip4'>Contacts</span>
              <img className='navIcon4' src={Images[4].Source} alt={Images[4].alt}/>
            </button>
          </div>
        )}

        <MyHeader />
        <div ref={aboutMeRef}><AboutMe /></div>
        <div ref={educationRef}><Schools /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={contactsRef}><Contacts /></div>
        <Footer />
      </div>
    </>
  );
};

export default App;
