import { footer_text } from "../globals"
import "../styles/footer.scss"
import { services, contact_info, hours } from "../globals"
import { Link } from "react-router-dom"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="footer">
            <img className="background-overlay" src='/background-overlay.avif'/>
            <img className="background-overlay flip" src='/background-overlay.avif'/>
            <div className="footer-content">
                <div className="brand">
                    <img src='/logo.png'/>
                    <p>{footer_text}</p>
                </div>
                <div className="sections">
                    <div className="footer-services section">
                        <h4>Services</h4>
                        {services.map((service) => (
                            <Link to={'/services'} key={service.id}><p>{service.name}</p></Link>
                        ))}
                    </div>
                    <div className="contacts section">
                        <h4>Contacts</h4>
                        <div>
                            <FaPhoneAlt />
                            <p><span className="bold-tertiary">Phone</span> {contact_info.phone}</p>
                        </div>
                        <div>
                            <MdEmail />
                            <p><span className="bold-tertiary">Email</span> {contact_info.email}</p>
                        </div>
                        <div>
                            <FaLocationDot />
                            <p><span className="bold-tertiary">Location</span> {contact_info.location}</p>
                        </div>
                    </div>
                    <div className="location section">
                        <h4>Hours</h4>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'baseline'}}>
                            <p><span className="bold-tertiary">{hours.open_days}</span> {hours.open_hours}</p>
                            <p><span className="bold-tertiary">{hours.closed_days}</span> Closed</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <p className="copyright">© 2026 - Rooma Tech Services</p>
        </div>
    )
}