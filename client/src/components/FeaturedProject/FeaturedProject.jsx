import "../FeaturedProject/FeaturedProject.css";
import pt from "../../assets/pt.png";

const FeaturedProject = () => {
  return (
    <div className="tile">
      <strong>Featured Project</strong>
      <div className="d-flex flex-column">
        <img src={pt} className="project-img"></img>
        <p>Potenti</p>
        <p className="project-desc">PT recovery website w/ motion tracking wearables</p>
      </div>
    </div>
  )
}

export default FeaturedProject