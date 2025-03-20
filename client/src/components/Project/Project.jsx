import "../Project/Project.css";

const Project = ({ name, description, image, skills, link }) => {
  return (
    <div className="project-container tile align-self-stretch">
      <div className="d-flex flex-column">
        <img src={image} className="project-img mb-3"></img>
        <a href={link} className="project-name" target="new"><strong className="mb-1 d-flex align-items-center">{name}<span class="material-symbols-outlined mx-1">open_in_new</span></strong></a>
        <p className="project-desc mb-2">{description}</p>
        <div className="d-flex flex-wrap skills-container">
          {skills.map((skill, index) => (
            <span className="skill">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project