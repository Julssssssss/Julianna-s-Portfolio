import './App.css';
import MyHeader from './Contents/MyHeader';
import AboutMe from './Contents/AboutMe';
import Skills from './Contents/Skills';
import Schools from './Contents/Schools';
import Projects from './Contents/Projects';
import Contacts from './Contents/Contacts';
import Footer from './Contents/Footer';
import { useState, useRef } from 'react';

const App = () => {
  const [Nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!Nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  

  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);


  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='Parent'>
        
        <svg onMouseEnter={toggleNav} className={`square-icon ${Nav ? 'open' : ''}`} width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect className='rect' x="27.3032" width="38.471" height="38.471" rx="5" transform="rotate(45.2108 27.3032 0)" fill="#C9A0B2"/>
          <circle className='circle' cx="27" cy="27" r="9" fill={Nav ? 'white' : '#CB5B80'}/>
        </svg>
        {Nav &&(
          <div className='menu' onMouseLeave={closeNav}>
            <button className='Info' onClick={() => {scrollToSection(headerRef); closeNav();}}>
              <span className='tooltip'>About me</span>
              <svg className='navIcon' width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5152 0C21.4398 0 23 1.56022 23 3.48485V23.3485C23 23.9259 22.5319 24.3939 21.9545 24.3939H2.09091C2.09091 25.1638 2.715 25.7879 3.48485 25.7879H21.9545C22.5319 25.7879 23 26.256 23 26.8333C23 27.4107 22.5319 27.8788 21.9545 27.8788H3.48485C1.56022 27.8788 0 26.3186 0 24.3939V3.48485C0 1.56022 1.56022 0 3.48485 0H19.5152ZM19.5152 2.09091H3.48485C2.715 2.09091 2.09091 2.715 2.09091 3.48485V22.303H20.9091V3.48485C20.9091 2.715 20.285 2.09091 19.5152 2.09091ZM14.9848 13.2424C15.5141 13.2424 15.9515 13.6357 16.0208 14.146L16.0303 14.2879V14.9842C16.0303 16.3788 14.1022 17.4242 11.5 17.4242C8.99774 17.4242 7.119 16.4577 6.97818 15.1435L6.9697 14.9842V14.2879C6.9697 13.7586 7.36301 13.3212 7.87329 13.252L8.01515 13.2424H14.9848ZM11.5 6.9697C12.8477 6.9697 13.9394 8.05506 13.9394 9.40278C13.9394 10.7505 12.8477 11.843 11.5 11.843C10.1523 11.843 9.06061 10.7505 9.06061 9.40278C9.06061 8.05506 10.1523 6.9697 11.5 6.9697Z" fill="#99204A"/>
              </svg>
            </button>

            <button className='ProjectsList' onClick={() => {scrollToSection(projectsRef); closeNav();}}>
              <span className='tooltip1'>Projects</span>
              <svg className='navIcon' width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.125 0H14.375C13.6125 0 12.8812 0.302901 12.3421 0.842068C11.8029 1.38124 11.5 2.1125 11.5 2.875C11.5 2.1125 11.1971 1.38124 10.6579 0.842068C10.1188 0.302901 9.3875 0 8.625 0H2.875C2.1125 0 1.38123 0.302901 0.842068 0.842068C0.302901 1.38124 0 2.1125 0 2.875V28.75C0 29.5125 0.302901 30.2438 0.842068 30.7829C1.38123 31.3221 2.1125 31.625 2.875 31.625H8.625C9.3875 31.625 10.1188 31.3221 10.6579 30.7829C11.1971 30.2438 11.5 29.5125 11.5 28.75C11.5 29.5125 11.8029 30.2438 12.3421 30.7829C12.8812 31.3221 13.6125 31.625 14.375 31.625H20.125C20.8875 31.625 21.6188 31.3221 22.1579 30.7829C22.6971 30.2438 23 29.5125 23 28.75V2.875C23 2.1125 22.6971 1.38124 22.1579 0.842068C21.6188 0.302901 20.8875 0 20.125 0Z" fill="#99204A"/>
                <path d="M20.125 0H14.375C12.7872 0 11.5 1.28718 11.5 2.875V28.75C11.5 30.3378 12.7872 31.625 14.375 31.625H20.125C21.7128 31.625 23 30.3378 23 28.75V2.875C23 1.28718 21.7128 0 20.125 0Z" fill="#B3849D"/>
                <path d="M17.25 14.375C16.8688 14.375 16.5031 14.2235 16.2335 13.954C15.964 13.6844 15.8125 13.3187 15.8125 12.9375V7.1875C15.8125 6.80625 15.964 6.44062 16.2335 6.17103C16.5031 5.90145 16.8688 5.75 17.25 5.75C17.6312 5.75 17.9969 5.90145 18.2665 6.17103C18.5361 6.44062 18.6875 6.80625 18.6875 7.1875V12.9375C18.6875 13.3187 18.5361 13.6844 18.2665 13.954C17.9969 14.2235 17.6312 14.375 17.25 14.375ZM17.25 20.8438C16.8235 20.8438 16.4066 20.9702 16.0521 21.2071C15.6975 21.4441 15.4211 21.7808 15.2579 22.1748C15.0947 22.5688 15.052 23.0024 15.1352 23.4207C15.2184 23.8389 15.4237 24.2231 15.7253 24.5247C16.0269 24.8263 16.4111 25.0316 16.8293 25.1148C17.2476 25.198 17.6812 25.1553 18.0752 24.9921C18.4692 24.8289 18.8059 24.5525 19.0429 24.1979C19.2798 23.8434 19.4063 23.4265 19.4063 23C19.4063 22.4281 19.1791 21.8797 18.7747 21.4753C18.3703 21.0709 17.8219 20.8438 17.25 20.8438Z" fill="#99204A"/>
                <path d="M5.75 14.375C5.36875 14.375 5.00312 14.2235 4.73354 13.954C4.46395 13.6844 4.3125 13.3187 4.3125 12.9375V7.1875C4.3125 6.80625 4.46395 6.44062 4.73354 6.17103C5.00312 5.90145 5.36875 5.75 5.75 5.75C6.13125 5.75 6.49688 5.90145 6.76647 6.17103C7.03605 6.44062 7.1875 6.80625 7.1875 7.1875V12.9375C7.1875 13.3187 7.03605 13.6844 6.76647 13.954C6.49688 14.2235 6.13125 14.375 5.75 14.375ZM5.75 20.8438C5.32354 20.8438 4.90665 20.9702 4.55205 21.2071C4.19746 21.4441 3.92109 21.7808 3.75789 22.1748C3.59468 22.5688 3.55198 23.0024 3.63518 23.4207C3.71838 23.8389 3.92374 24.2231 4.2253 24.5247C4.52686 24.8263 4.91107 25.0316 5.32934 25.1148C5.74761 25.198 6.18116 25.1553 6.57516 24.9921C6.96917 24.8289 7.30593 24.5525 7.54286 24.1979C7.77979 23.8434 7.90625 23.4265 7.90625 23C7.90625 22.4281 7.67908 21.8797 7.2747 21.4753C6.87033 21.0709 6.32187 20.8438 5.75 20.8438Z" fill="#B3849D"/>
              </svg>
            </button>

            <button className='Contacts' onClick={() => {scrollToSection(contactsRef); closeNav();}}>
              <span className='tooltip2'>Contacts</span>
              <svg className='navIcon' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6665 9.33333V6.66667C6.6665 5.19391 7.86041 4 9.33317 4H17.3332H25.3332C26.806 4 27.9998 5.19391 27.9998 6.66667V9.33333V22.6667V25.3333C27.9998 26.8061 26.806 28 25.3332 28H17.3332H9.33317C7.86041 28 6.6665 26.8061 6.6665 25.3333V22.6667V9.33333Z" stroke="#99204A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.3335 16C21.3335 18.2092 19.5427 20 17.3335 20C15.1243 20 13.3335 18.2092 13.3335 16C13.3335 13.7908 15.1243 12 17.3335 12C19.5427 12 21.3335 13.7908 21.3335 16Z" stroke="#99204A" stroke-width="2"/>
                <path d="M12 28C12.5673 24.9237 14.0267 24 17.3333 24C20.64 24 22.0993 24.8567 22.6667 27.9329" stroke="#99204A" stroke-width="2" stroke-linecap="round"/>
                <path d="M4 9.33333H6.66667" stroke="#99204A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 22.6667H6.66667" stroke="#99204A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 16H6.66667" stroke="#99204A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        )}

        <div ref={headerRef}><MyHeader /></div>
        <AboutMe />
        <Skills />
        <Schools />
        <div ref={projectsRef}><Projects /></div>
        <div ref={contactsRef}><Contacts /></div>
        <Footer />
      </div>
    </>
  );
};

export default App;
