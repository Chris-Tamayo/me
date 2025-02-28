import "../Project/Project.css";

const Project = ({ name, description, image, skills }) => {
  return (
    <div className="project-container tile align-self-stretch">
      <div className="d-flex flex-column">
        <img src={image} className="project-img mb-1"></img>
        <strong className="mb-1">{name}</strong>
        <p className="project-desc mb-1">{description}</p>
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