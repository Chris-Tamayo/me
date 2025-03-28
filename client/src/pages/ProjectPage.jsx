import Project from "../components/Project/Project";
import pt from "../assets/pt.png"
import gem from "../assets/gem-edu.png";
import smartwalk from "../assets/smartwalk.png";
import "../pages/ProjectPage.css";
import { useNavigate } from "react-router-dom";

const ProjectsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column projects-container">
      <p className="home-button" onClick={() => navigate("/")}>
        <strong>&lt;&#9;<span className="home-span">Home</span></strong>
      </p>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <Project 
          name="Potenti"
          description="Motion tracking PT recovery website"
          image={pt}
          skills={["JavaScript", "HTML", "CSS", "Node.js", "MongoDB"]}
          link="https://github.com/liamahearn/PT-Wearable"
        />
        <Project 
          name="Gem.edu - Google's Gemini Hackathon"
          description="AI-Powered academic advisor and tutor"
          image={gem}
          skills={["React.js", "JavaScript", "HTML", "CSS"]}
          link="https://www.youtube.com/watch?v=BVtw-ZKlJEM"
        />
        <Project 
          name="SmartWalk - INRIX Hackathon"
          description="Route planner that suggests the safest walking paths based on crime data. For INRIX hackathon."
          image={smartwalk}
          skills={["JavaScript", "HTML", "CSS"]}
          link="https://devpost.com/software/safewalk-0yf4ue?ref_content=my-projects-tab&ref_feature=my_projects"
        />
      </div>
      
    </div>
  );
};

export default ProjectsPage;