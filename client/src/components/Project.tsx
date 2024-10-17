import "../styles/Project.css";

interface ProjectProps {
  name: string,
  desc: string,
  imgSrc: string,
}

const Project = ( {name, desc, imgSrc}: ProjectProps ) => {
  return (
    <div className="d-flex flex-column project-container m-2">
      <img src={imgSrc} className="project-img my-2"></img>
      <span className="project-title">{name}</span>
      <span>{desc}</span>
    </div>
  )
}

export default Project