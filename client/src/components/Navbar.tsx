import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Get time in Pacific Time (PDT/PST)
      const pdtTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setTime(pdtTime);
    };

    // Update the time immediately and then every minute
    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="d-flex flex-row justify-content-between">
      <p>{time} PDT</p>
      <div className="d-flex flex-row">
        <a target="new" href="https://www.linkedin.com/in/christopher-tamayo/" className="navbar-link">LinkedIn</a>
        <a target="new" href="mailto:chriswtamayo@gmail.com" className="navbar-link">Email</a>
        <a target="new" href="https://github.com/Chris-Tamayo" className="navbar-link">GitHub</a>
      </div>
      <div className="d-flex flex-row">
        <p className="me-5">Skills</p>
        <div className="d-flex flex-column">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML / CSS</span>
          <span>Java</span>
          <span>Spring</span>
          <span>AWS</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
