import Project from "./Project"
import gem from "../assets/gem-edu.png";
import nba from "../assets/nba.jpg";
import printer from "../assets/printer.png";
import pt from "../assets/pt.png";
import smartwalk from "../assets/smartwalk.png";

const Projects = () => {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center flex-wrap">
      <Project name="Gem.edu" desc="AI-Powered Academic Advisor and Tutor" imgSrc={gem} />
      <Project name="Potenti" desc="Motion tracking PT recovery website" imgSrc={pt} />
      <Project name="FoulPlay" desc="NBA ref reports webscraper to determine ref bias" imgSrc={nba} />
      <Project name="InkSights" desc="Printer status dashboard via webscraper" imgSrc={printer} />
      <Project name="SmartWalk" desc="Safest pedestrian paths b/w two locations" imgSrc={smartwalk} />
    </div>
  )
}

export default Projects