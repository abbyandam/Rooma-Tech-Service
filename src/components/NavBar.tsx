import '../styles/navBar.scss'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa";
import { services } from "../globals.tsx";
import type { NavBarProps } from '../types/propTypes.tsx';
import { pages } from '../globals.tsx';
import { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function NavBar({current_page}: NavBarProps) { 
    const navRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const updateHeight = () => {
        if (navRef.current) {
            const height = navRef.current.offsetHeight
            document.documentElement.style.setProperty('--navbar-height', `${height}px`)
        }
        }

        updateHeight()
        window.addEventListener('resize', updateHeight)
        return () => window.removeEventListener('resize', updateHeight)
    }, [])

    const [isOpen, setIsOpen] = useState(false)
    const { pathname } = useLocation()
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    const [fontReady, setFontReady] = useState(false)

    useEffect(() => {
        document.fonts.ready.then(() => setFontReady(true))
    }, [])

    return (
        <div className="nav-bar" ref={navRef}>
            <Link to={'/'} className='brand'>
                <img src={logo} alt='Company Logo'/>
                <h2><span className='black-big'>R</span><span className='grad-primary'>ooma</span><span className='black-big'>T</span><span className='grad-secondary'>ech</span></h2>
            </Link>
            <div className='nav-items desktop'>
                <Link to={'/'} className='background-button'><h5>Home</h5></Link>
                <Link to={'/about-us'} className='background-button'><h5>About Us</h5></Link>
                <div 
                    className='link-services' 
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave ={() => setIsOpen(false)}
                >
                    <Link to={'/services'} className='background-button'>
                        <h5>Services</h5>
                        <FaAngleDown />
                    </Link>
                    { isOpen && 
                        (<ol className='dropdown'>
                            { services.map((service) => {
                                return (<li key={service}><Link to={'/services'}><h5>{service}</h5><hr/></Link></li>)
                            })}
                        </ol>)
                    }
                </div>
                <Link to={'/service-area'} className='background-button'><h5>Service Area</h5></Link>
                <Link to={'/gallery'} className='background-button'><h5>Gallery</h5></Link>
                <Link to={'/reviews'} className='background-button'><h5>Reviews</h5></Link>
            </div>
            <div className='nav-items mobile'>
                <div 
                    className='link-services'
                    onClick={() => (setIsOpen(!isOpen))}
                >
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h5>{current_page.page}</h5>
                        <FaAngleDown />
                    </div>
                    { isOpen && (
                        <ol className='dropdown'>
                            {
                                pages.filter((page) => page.page !== current_page.page && page.page !== "Get a Quote") 
                                    .map((page) => {
                                            return (
                                                <li key={page.page}>
                                                    <Link to={page.link}>
                                                        <h5>{page.page}</h5>
                                                        <hr/>
                                                    </Link>
                                                </li>
                                            )
                                        })
                            }
                        </ol>
                    )}
                </div>
            </div>
            <Link to={'/quote'} className='primary-button'><h5>Get a Quote</h5></Link>
        </div>
    )
}