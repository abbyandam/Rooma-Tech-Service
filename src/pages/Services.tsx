import { Link } from 'react-router-dom'
import bathroom from '../assets/services/bathroom.png'
import electric from '../assets/services/electric.png'
import hvac from '../assets/services/hvac.png'
import kitchen from'../assets/services/kitchen.png'
import phoneTroubleshooting from '../assets/services/phone_troubleshooting.png'
import plumbing from '../assets/services/plumbing.png'
import '../styles/services.scss'

export default function Services() {
    return (
        <div className="services">
            <div className='title'>
                <h2>Services</h2>
                <h4>Commercial & Residential</h4>
            </div>
            <div className="list">
                <div>
                    <img src={hvac}/>
                    <h5>HVAC</h5>
                    <p>Heating & cooling repair and maintenance</p>
                </div>
                <div>
                    <img src={electric}/>
                    <h5>Electric</h5>
                    <p>Full electrical services including upgrades, repairs, and preventive maintenance</p>
                </div>
                <div>
                    <img src={plumbing}/>
                    <h5>Plumbing</h5>
                    <p>Leaky faucet? We handle upgrades, repairs, and maintenance</p>
                </div>
                <div>
                    <img src={bathroom}/>
                    <h5>Bathroom Design & Remodeling</h5>
                    <p>We’ll turn an outdated bathroom into a space you’ll love</p>
                </div>
                <div>
                    <img src={kitchen}/>
                    <h5>Kitchen Design & Remodeling</h5>
                    <p>Expert kitchen remodeling from concept to completion</p>
                </div>
                <div>
                    <img src={phoneTroubleshooting}/>
                    <h5>Phone Troubleshooting</h5>
                    <p>Call and we'll walk you through a repair for free</p>
                </div>
            </div>
            <Link to={'/quote'} className='secondary-button'><h3>Request a Quote</h3></Link>
        </div>
    )
}