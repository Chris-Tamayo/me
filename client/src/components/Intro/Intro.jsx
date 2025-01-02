import "../Intro/Intro.css";

const Intro = () => {
  const startDate = new Date("2024-01-01");
  const now = new Date(); 
  const diffInMs = now - startDate;
  const yoe = Math.trunc(diffInMs / (1000 * 60 * 60 * 24 * 365.25));

  return (
    <div className="tile">
      <p>Hi! I'm <span className="name">Christopher Tamayo</span></p>
      <p>• Based in Seattle, WA</p>
      <p>• Software Development Engineer at Amazon</p>
      <p>• {yoe}+ years of experience</p>
    </div>
  )
}

export default Intro