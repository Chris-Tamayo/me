import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import Title from "../components/Title"

const HomePage = () => {
  return (
    <div className="d-flex flex-column">
      <Navbar />
      <Title />
      <hr></hr>
      <Projects />
    </div>
  )
}

export default HomePage