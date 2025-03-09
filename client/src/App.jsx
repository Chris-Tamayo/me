import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Experiences from './components/Experience/Experiences';
import FeaturedProject from './components/FeaturedProject/FeaturedProject';
import Intro from './components/Intro/Intro';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import Skills from './components/Skills/Skills';
import ViewProjectsButton from './components/ViewProjectsButton/ViewProjectsButton';
import ProjectsPage from "./pages/ProjectPage";

function App() {
  return (
    <Router basename="/me">  {/* Add basename here */}
      <Routes>
        <Route path="/" element={
          <div className="d-flex justify-content-center align-items-center w-100 position-relative home-container m-2">
            <ParticlesBackground />
            <div className="d-flex flex-row flex-wrap justify-content-center" style={{ zIndex: 1 }}>
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
        } />
        <Route path="/projects" element={
          <div className="d-flex justify-content-center align-items-center w-100 h-100 position-relative">
            <ParticlesBackground />
            <ProjectsPage />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
