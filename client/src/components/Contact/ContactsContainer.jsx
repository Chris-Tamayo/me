import "../Contact/Contact.css";
import linkedIn from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import email from "../../assets/email.png";
import download from "../../assets/download.png";

const ContactsContainer = () => {
  return (
    <div className="d-flex w-50">
      <div className="d-flex flex-column flex-grow-1">
        <div className="d-flex flex-column justify-content-center align-items-center contact-tile linkedin-tile">
          <img src={linkedIn} className="contact-logo"></img>
          <p className="m-0">LinkedIn</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center contact-tile github-tile">
          <img src={github} className="contact-logo"></img>
          <p className="m-0">GitHub</p>
        </div>
      </div>
      <div className="d-flex flex-column flex-grow-1">
        <div className="d-flex flex-column justify-content-center align-items-center contact-tile email-tile">
          <img src={email} className="contact-logo"></img>
          <p className="m-0">Email</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center contact-tile resume-tile">
          <img src={download} className="contact-logo"></img>
          <p className="m-0">Resume</p>
        </div>
      </div>
    </div>
  )
}

export default ContactsContainer