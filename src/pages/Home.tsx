import '../styles/home.scss'
import { FaPhoneAlt, FaTools, FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Home() {
    return (
    <div className='home'>
        <img src='home_image.jpg' className='background-img'/>
        <div className='home-text'>
            <p><span className='big bold underline'>Commercial & Residential</span></p>
            <h1>Home Improvement Services</h1>
            <div>
                <FaTools />
                <p><span className='big bold italic tertiary'>Solutions are my specialty</span></p> 
            </div>
            <p><span className='bold'>HVAC・Electric・Plumbing・Kitchen・Bathroom</span></p>
        </div>
        <div className='buttons'>
            <Link to={'/quote'} className='primary-button'><h2>Request a Quote</h2></Link>
            <Link to={'/quote'} className='secondary-button'><h2>Contact</h2><FaPhoneAlt /></Link>
        </div>
        <Link to={'/services?service=phone'} className='link'>
            <span className='bold'>Get <span className='underline italic'>Free</span> Phone Troubleshooting</span>
            <FaRegArrowAltCircleRight />
        </Link>
    </div>
    )
}