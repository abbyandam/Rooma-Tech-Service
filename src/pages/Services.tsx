import { Link } from 'react-router-dom'
import '../styles/services.scss'

interface  ServicesProps {
    isLandingPageFormat?: boolean
}

export default function Services({isLandingPageFormat} : ServicesProps) {
    return (
        <div className={isLandingPageFormat ? "services landing" : "services"}>
            <div className='title'>
                <h2>Services</h2>
                <h4>Commercial & Residential</h4>
            </div>
            <div className="list">
                <div id='hvac'>
                    <img src='/services/hvac.png'/>
                    <h5>HVAC</h5>
                    <p>Heating & cooling repair and maintenance</p>
                </div>
                <div id='electric'>
                    <img src='/services/electric.png'/>
                    <h5>Electric</h5>
                    <p>Full electrical services including upgrades, repairs, and preventive maintenance</p>
                </div>
                <div id='plumbing'>
                    <img src='/services/plumbing.png'/>
                    <h5>Plumbing</h5>
                    <p>Leaky faucet? We handle upgrades, repairs, and maintenance</p>
                </div>
                <div id='bathroom'>
                    <img src='/services/bathroom.png'/>
                    <h5>Bathroom Design & Remodeling</h5>
                    <p>We’ll turn an outdated bathroom into a space you’ll love</p>
                </div>
                <div id='kitchen'>
                    <img src='/services/kitchen.png'/>
                    <h5>Kitchen Design & Remodeling</h5>
                    <p>Expert kitchen remodeling from concept to completion</p>
                </div>
                <div id='phone'>
                    <img src='/services/phone_troubleshooting.png'/>
                    <h5>Phone Troubleshooting</h5>
                    <p>Call and we'll walk you through a repair for free</p>
                </div>
            </div>
            {!isLandingPageFormat &&
                <Link to={'/quote'} className='secondary-button'><h3>Request a Quote</h3></Link>
            }
        </div>
    )
}