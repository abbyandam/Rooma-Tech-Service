import portrait from "../assets/about_us_portrait.png"
import "../styles/aboutUs.scss"
import { aboutUs } from "../globals"

export default function AboutUs() {
    return (
        <div className="about-us">
            <div className="about-us-content">
                    <div className="text">
                        <h2>About Us</h2>
                        <h4>Family Owned & Operated since 2019</h4>
                        <img src={portrait}></img>
                        <p>{aboutUs}</p>
                    </div>
                    <div className="portrait">
                        <img src={portrait}></img>
                    </div>
            </div>
            <div className="why-us">
                <h4>Why Choose Rooma Tech Service?</h4>
                <div className="content">
                    <div>
                        <h5>Family Owned & Run</h5>
                        <p>You'll be speaking directly with the contractor doing the work</p>
                    </div>
                    <div>
                        <h5>Work Done Right</h5>
                        <p>Better work. Lower prices. No outsourcing</p>
                    </div>
                    <div>
                        <h5>Luxury Service</h5>
                        <p>High-end results with zero mess left behind</p>
                    </div>
                    <div>
                        <h5>Faster Service</h5>
                        <p>No waiting months for service. Get started in a week’s time</p>
                    </div>
                </div>
            </div>
        </div>
    )
}