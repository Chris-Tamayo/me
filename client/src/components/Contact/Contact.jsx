import ContactsContainer from "./ContactsContainer";
import headshot from "../../assets/headshot.jpg";

const Contact = () => {
  return (
    <div className="tile-container d-flex">
      <ContactsContainer />
      <div className="headshot-tile">
        <img src={headshot}></img>
      </div>
    </div>
  )
}

export default Contact