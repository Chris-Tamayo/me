import amazon from "../../assets/amazon.jpeg";
import noli from "../../assets/noli.jpeg";
import asb from "../../assets/asb.png";
import Experience from "./Experience.jsx";

const Experiences = () => {
  return (
    <div className="tile h-100">
      <strong>Experience</strong>
      <div className="d-flex flex-column pb-2">
        <Experience company="Amazon" role="Software Development Engineer" dates="Sep. 2024 - Present" logo={amazon}/>
        <Experience company="Amazon" role="Software Development Engineer Intern" dates="June 2023 - Sep. 2024" logo={amazon}/>
        <Experience company="Amazon" role="Software Development Engineer Intern" dates="June 2022 - Sep. 2023" logo={amazon}/>
        <Experience company="NoLi Fitness" role="App Development Intern" dates="Nov. 2021 - Mar. 2022" logo={noli}/>
        <Experience company="American Savings Bank" role="IT Banking Systems Intern" dates="June 2021 - Aug. 2021 " logo={asb}/>
      </div>
    </div>
  )
}

export default Experiences