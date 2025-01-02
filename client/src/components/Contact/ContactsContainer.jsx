import "../Contact/Contact.css";

const ContactsContainer = () => {
  return (
    <div className="d-flex w-50">
      <div className="d-flex flex-column flex-grow-1">
        <div className="contact-tile">
          LinkedIn
        </div>
        <div className="contact-tile">
          GitHub
        </div>
      </div>
      <div className="d-flex flex-column flex-grow-1">
        <div className="contact-tile">
          Email
        </div>
        <div className="contact-tile">
          Resume
        </div>
      </div>
    </div>
  )
}

export default ContactsContainer