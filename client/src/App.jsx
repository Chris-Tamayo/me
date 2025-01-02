import './App.css'
import Contact from './components/Contact/Contact'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-100">
      <div className="d-flex flex-column">
        <Intro />
        <Contact />
        <Skills />
      </div>
    </div>
  )
}

export default App
