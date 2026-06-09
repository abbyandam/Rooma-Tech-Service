import '../styles/navBar.scss'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa";
import { services } from "../globals.tsx";
import type { NavBarProps } from '../types/propTypes.tsx';
import { pages } from '../globals.tsx';

export default function NavBar({current_page}: NavBarProps) { 
    return (
        <div className="nav-bar">
            <Link to={'/'} className='brand'>
                <img src={logo} alt='Company Logo'/>
                <h2><span className='black-big'>R</span><span className='grad-primary'>ooma</span> <span className='black-big'>T</span><span className='grad-secondary'>ech</span></h2>
            </Link>
            <div className='nav-items desktop'>
                <Link to={'/'} className='background-button'><h3>Home</h3></Link>
                <Link to={'/about-us'} className='background-button'><h3>About Us</h3></Link>
                <div className='link-services'>
                    <Link to={'/services'} className='background-button'>
                        <h3>Services</h3>
                        <FaAngleDown />
                    </Link>
                    <ol className='dropdown'>
                        { services.map((service) => {
                            return (<li key={service}><Link to={'/'}><h4>{service}</h4><hr/></Link></li>)
                        })}
                    </ol>
                </div>
                <Link to={'/service-area'} className='background-button'><h3>Service Area</h3></Link>
                <Link to={'/gallery'} className='background-button'><h3>Gallery</h3></Link>
                <Link to={'/reviews'} className='background-button'><h3>Reviews</h3></Link>
            </div>
            <div className='nav-items mobile'>
                <div className='link-services'>
                    <div className='background-button'>
                        <h3>{current_page.page}</h3>
                        <FaAngleDown />
                    </div>
                    <ol className='dropdown'>
                        {
                            pages.filter((page) => page.page !== current_page.page && page.page !== "Get a Quote") 
                                 .map((page) => {
                                        return (
                                            <li key={page.page}>
                                                <Link to={page.link}>
                                                    <h4>{page.page}</h4>
                                                    <hr/>
                                                </Link>
                                            </li>
                                        )
                                    })
                        }
                    </ol>
                </div>
            </div>
            <Link to={'/quote'} className='primary-button'><h1>Get a Quote</h1></Link>
        </div>
    )
}