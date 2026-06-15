import { contact_info, hours } from "../globals";
import '../styles/quote.scss'
import { FaUpload } from "react-icons/fa";

export default function Quote() {
    return (
        <div className="quote">
            <div className="contact">
                <img src="/quote_background.png"/>
                <h2>Contact Us</h2>
                <div className="gap"/>
                <p><span className="bold">Phone</span>: {contact_info.phone}</p>
                <p><span className="bold">Email</span>: {contact_info.email}</p>
                <p><span className="bold">Location</span>: {contact_info.location}</p>
                <p><span className="bold">Hours</span>: {hours.open_days} {hours.open_hours}</p>
            </div>
            <form>
                <div>
                    <input 
                        placeholder="Name"
                    />
                    <input 
                        placeholder="Phone"
                    />
                </div>
                <div>
                    <input 
                        placeholder="Email"
                    />
                    <input 
                        placeholder="Address"
                    />
                </div>
                <div>
                    <input 
                        placeholder="City"
                    />
                    <input 
                        placeholder="State"
                    />
                    <input 
                        placeholder="Zipcode"
                    />
                </div>
                <div className="dropdown"/>
                <textarea placeholder="Message"/>
                <button className="upload-button">
                    <FaUpload />
                    Upload Photos
                </button>
                <button className="secondary-button">
                    <h4>Submit Request</h4>
                </button>
            </form>
        </div>
    )
}