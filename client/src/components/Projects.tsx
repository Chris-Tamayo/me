import Project from "./Project"
import gem from "../assets/gem-edu.png";
import nba from "../assets/nba.jpg";
import printer from "../assets/printer.png";
import pt from "../assets/pt.png";
import smartwalk from "../assets/smartwalk.png";

const Projects = () => {
  return (
    <div className="d-flex flex-row justify-content-between align-items-start flex-wrap">
      <Project name="Gem.edu" desc="AI-Powered Academic Advisor and Tutor" imgSrc={gem} />
      <Project name="Potenti" desc="PT recovery website w/ motion tracking wearables" imgSrc={pt} />
      <Project name="NBA Ref Report Webscraper" desc="Determining ref bias in NBA playoff games" imgSrc={nba} />
      <Project name="InkSights" desc="Printer status dashboard via webscraper" imgSrc={printer} />
      <Project name="SmartWalk" desc="Safest pedestrian paths b/w two locations" imgSrc={smartwalk} />
    </div>
  )
}

export default Projects