import "../FeaturedProject/FeaturedProject.css";
import pt from "../../assets/pt.png";

const FeaturedProject = () => {
  return (
    <div className="tile featured-project">
      <strong>Featured Project</strong>
      <div className="d-flex flex-column">
        <img src={pt} className="project-img"></img>
        <a href="https://github.com/liamahearn/PT-Wearable" className="featured-project-name" target="new"><strong className="d-flex align-items-center">Potenti<span class="material-symbols-outlined mx-1">open_in_new</span></strong></a>
        <p className="project-desc">PT recovery website w/ motion tracking wearables</p>
      </div>
    </div>
  )
}

export default FeaturedProject