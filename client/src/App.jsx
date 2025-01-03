import './App.css'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
import Experiences from './components/Experience/Experiences'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-100">
      <div className="d-flex flex-row">
        <div className="d-flex flex-column">
          <Intro />
          <Contact />
          <Skills />
        </div>
        <div className="d-flex flex-column">
          <Experiences />
        </div>
        <div className="d-flex flex-column">
          <Education />
        </div>
      </div>
    </div>
  )
}

export default App
