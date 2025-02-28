import Project from "../components/Project/Project";
import pt from "../assets/pt.png"
import gem from "../assets/gem-edu.png";
import smartwalk from "../assets/smartwalk.png";
import "../pages/ProjectPage.css";

const ProjectsPage = () => {
  return (
    <div className="d-flex flex-column projects-container">
      <p className="px-2">&lt;Home</p>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <Project 
          name="Potenti"
          description="Motion tracking PT recovery website"
          image={pt}
          skills={["JavaScript", "HTML", "CSS", "Node.js", "MongoDB"]}
        />
        <Project 
          name="Gem.edu, Google's Gemini API Contest"
          description="AI-Powered academic advisor and tutor"
          image={gem}
          skills={["React.js", "JavaScript", "HTML", "CSS"]}
        />
        <Project 
          name="SmartWalk, INRIX Hackathon"
          description="Route planner that suggests the safest walking paths based on crime data"
          image={smartwalk}
          skills={["JavaScript", "HTML", "CSS"]}
        />
      </div>
      
    </div>
  );
};

export default ProjectsPage;