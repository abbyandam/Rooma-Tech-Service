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

export const aboutUs = "Rooma Tech Service is a small team based in Lancaster, PA. I've been in the trades for over 24 years, providing my services since 2009 and officially launching in the Lancaster area in 2019. I have full certifications in HVAC, OSHA Safety, and EMP, ensuring quality work.\n\nFor me, personal service is a guarantee. When you call, you're speaking directly to the person doing the work. No waiting months for a project to start. I don’t deal with subcontractors so we can start sooner and get the job done faster.\n\nAt the end of the day, happy customers is the top priority. We deliver luxury work, know what we're doing, and always clean up after ourselves. Every project gets full attention and is done right the first time."