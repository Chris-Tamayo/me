import ContactsContainer from "./ContactsContainer";
import headshot from "../../assets/headshot.jpg";

const Contact = () => {
  return (
    <div className="tile-container d-flex">
      <div className="headshot-tile">
        <img src={headshot}></img>
      </div>
      <ContactsContainer />
    </div>
  )
}

export default Contact