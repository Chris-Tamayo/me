import './App.css'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
import Experiences from './components/Experience/Experiences'
import FeaturedProject from './components/FeaturedProject/FeaturedProject'
import Intro from './components/Intro/Intro'
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground'
import Skills from './components/Skills/Skills'
import ViewProjectsButton from './components/ViewProjectsButton/ViewProjectsButton'

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-100 position-relative">
      <ParticlesBackground />
      <div className="d-flex flex-row flex-wrap" style={{ zIndex: 1 }}>
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
          <FeaturedProject />
          <ViewProjectsButton />
        </div>
      </div>
    </div>
  )
}

export default App
