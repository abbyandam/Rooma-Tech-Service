import { cities } from "../globals"
import "../styles/serviceArea.scss"

export default function ServiceArea() {
    return (
        <div className="service-area">
            <img src='map.png'/>
            <h2>Service Area</h2>
            <div className="gap"/>
            <span className="tertiary"><h3>Pennsylvania</h3></span>
            <hr/>
            <ol>
                { cities.sort().map((city) => (
                    <p key={city}>{city}</p>
                ))}
            </ol>
            <div className="gap"/>
            <p><span className="bold">Not in our service area?</span></p>
            <span className="tertiary"><p>Reach out anyway, we may still be able to help</p></span>
        </div>
    )
}