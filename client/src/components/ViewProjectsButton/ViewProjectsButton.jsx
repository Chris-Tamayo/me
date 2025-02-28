import { useNavigate } from "react-router-dom";
import "../ViewProjectsButton/ViewProjectsButton.css";

const ViewProjectsButton = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="view-projects-button flex-grow-1 d-flex align-items-center" 
      onClick={() => navigate("/projects")}
    >
      <div className="d-flex flex-row justify-content-between align-items-center w-100 mx-3">
        <p className="m-0"><strong>View all projects</strong></p>
        <span class="material-symbols-outlined">north_east</span>
      </div>
    </div>
  )
}

export default ViewProjectsButton