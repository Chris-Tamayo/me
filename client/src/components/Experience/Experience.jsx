import "../Experience/Experience.css";

const Experience = ({company, role, dates, logo}) => {
  return (
    <div className="d-flex flex-row align-items-center experience">
      <img src={logo} className="company-logo"></img>
      <div className="d-flex flex-column">
        <p>{company}</p>
        <p><i>{role}</i></p>
        <p className="dates">{dates}</p>
      </div>
    </div>
  )
}

export default Experience