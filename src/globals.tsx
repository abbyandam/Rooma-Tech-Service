import AboutUs from "./pages/AboutUs"
import Gallery from "./pages/Gallery"
import Home from "./pages/Home"
import Quote from "./pages/Quote"
import Reviews from "./pages/Reviews"
import ServiceArea from "./pages/ServiceArea"
import Services from "./pages/Services"
import type { Page } from "./types/propTypes"

export const services = ['HVAC', 'Electric', 'Plumbing', 'Kitchen', 'Bathroom']

export const pages: Page[] = [{page: 'Home', link: '/', element: <Home />}, 
                      {page: 'About Us', link: '/about-us', element: <AboutUs />}, 
                      {page: 'Services', link: '/services', element: <Services />},
                      {page: 'Service Area', link: '/service-area', element: <ServiceArea />},
                      {page: 'Gallery', link: '/gallery', element: <Gallery />},
                      {page: 'Reviews', link: '/reviews', element: <Reviews />},
                      {page: 'Get a Quote', link: '/quote', element: <Quote />}]