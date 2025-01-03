import scu from "../../assets/scu.png";
import "../Education/Education.css";

const Education = () => {
  return (
    <div className="tile">
      <strong>Education</strong>
      <div className="d-flex flex-row align-items-center py-2">
        <img src={scu} className="edu-logo"></img>
        <div className="d-flex flex-column">
          <p>Santa Clara University</p>
          <p><i>B.S. in Computer Science and Engineering</i></p>
          <p className="dates">June 2024</p>
        </div>
      </div>
    </div>
  )
}

export default Education