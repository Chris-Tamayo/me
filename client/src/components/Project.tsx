import "../styles/Project.css";

interface ProjectProps {
  name: string,
  desc: string,
  imgSrc: string,
}

const Project = ( {name, desc, imgSrc}: ProjectProps ) => {
  return (
    <div className="d-flex flex-column project-container w-30">
      <img src={imgSrc} className="project-img"></img>
      <span>{name}</span>
      <span className="description">{desc}</span>
    </div>
  )
}

export default Project