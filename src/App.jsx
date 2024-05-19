import './App.css'
import MyHeader from './Contents/MyHeader'
import AboutMe from './Contents/AboutMe'
import Skills from './Contents/Skills'


const App = () => {
  return (
    <>
    <div className='Parent'>
      <style>
          {`*{outline: solid red}`}
      </style>
      <MyHeader />
      <AboutMe />
      <Skills />
    </div>
    </>
  )
}

export default App