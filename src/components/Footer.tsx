import { footer_text } from "../globals"
import logo from "../assets/logo.png"
import "../styles/footer.scss"
import { services, contact_info, hours } from "../globals"
import { Link } from "react-router-dom"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import background_overlay from "../assets/background-overlay.avif";

export default function Footer() {
    return (
        <div className="footer">
            <img className="background-overlay" src={background_overlay}/>
            <img className="background-overlay flip" src={background_overlay}/>
            <div className="footer-content">
                <div className="brand">
                    <img src={logo}/>
                    <p>{footer_text}</p>
                </div>
                <div className="sections">
                    <div className="services section">
                        <h2>Services</h2>
                        {services.map((service) => (
                            <Link to={'/services'} key={service}><p>{service}</p></Link>
                        ))}
                    </div>
                    <div className="contacts section">
                        <h2>Contacts</h2>
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
                        <h2>Hours</h2>
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