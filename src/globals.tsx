import AboutUs from "./pages/AboutUs"
import Gallery from "./pages/Gallery"
import Home from "./pages/Home"
import Quote from "./pages/Quote"
import Reviews from "./pages/Reviews"
import ServiceArea from "./pages/ServiceArea"
import Services from "./pages/Services"
import type { Page } from "./types/propTypes"

export const services = ['HVAC', 'Electric', 'Plumbing', 'Kitchen Design & Remodeling', 'Bath Design & Remodeling']

export const pages: Page[] = [{page: 'Home', link: '/', element: <Home />}, 
                      {page: 'About Us', link: '/about-us', element: <AboutUs />}, 
                      {page: 'Services', link: '/services', element: <Services />},
                      {page: 'Service Area', link: '/service-area', element: <ServiceArea />},
                      {page: 'Gallery', link: '/gallery', element: <Gallery />},
                      {page: 'Reviews', link: '/reviews', element: <Reviews />},
                      {page: 'Get a Quote', link: '/quote', element: <Quote />}]

export const footer_text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'

export const contact_info = {
    phone: import.meta.env.VITE_PHONE_NUMBER,
    email: import.meta.env.VITE_EMAIL,
    location: import.meta.env.VITE_LOCATION
}

export const hours = {
    open_days: 'Mon-Fri',
    open_hours: '7am-5pm',
    closed_days: 'Sat-Sun',
}