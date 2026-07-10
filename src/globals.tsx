import Slideshow from "./components/Slideshow.tsx"
import AboutUs from "./pages/AboutUs"
import Gallery from "./pages/Gallery"
import Home from "./pages/Home"
import Quote from "./pages/Quote"
import Reviews from "./pages/Reviews"
import ServiceArea from "./pages/ServiceArea"
import Services from "./pages/Services"
import type { Page } from "./types/types"

export const services = [
    { id: 'hvac', name: 'HVAC'},
    { id: 'electric', name: 'Electric'},
    { id: 'plumbing', name: 'Plumbing'},
    { id: 'kitchen', name: 'Kitchen'},
    { id: 'bathroom', name: 'Bath'},
]

export const service_options = [
    'HVAC', 
    'Electric', 
    "Plumbing", 
    'Kitchen Design', 
    'Kitchen Remodel', 
    'Bathroom Design', 
    'Bathroom Remodel',
    'Phone Troubleshooting',
    'Other, Please describe in message' 
]

export const base_pages: Page[] = [{page: 'Home', link: '/', element: <Home />}, 
    {page: 'About Us', link: '/about-us', element: <AboutUs />}, 
    {page: 'Services', link: '/services', element: <Services />},
    {page: 'Service Area', link: '/service-area', element: <ServiceArea />},
    {page: 'Gallery', link: '/gallery', element: <Gallery />},
    {page: 'Reviews', link: '/reviews', element: <Reviews />},
    {page: 'Get a Quote', link: '/quote', element: <Quote />}]
    
const HomePage = <Slideshow pages={[<Home />, <AboutUs />, <Services isLandingPageFormat={true}/>, <ServiceArea />, <Reviews />]} />

export const pages: Page[] = [{page: 'Home', link: '/', element: HomePage}, ...base_pages.splice(1)]

export const footer_text = 'A small team based in Lancaster, PA, providing  services since 2009'

export const license = "HIC License PA#I42602"

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

export const aboutUs = "Rooma Tech Service is a small team based in Lancaster, PA. We've been in the trades for over 24 years, providing services since 2009 and officially launching in the Lancaster area in 2019. We have full certifications in HVAC, OSHA Safety, and EMP, ensuring quality work.\n\nPersonal service is a guarantee. When you call, you're speaking directly to the person doing the work. No waiting months for a project to start. We don’t deal with subcontractors so we can start sooner and get the job done faster.\n\nAt the end of the day, happy customers is the top priority. We deliver luxury work with solutions for all problems, leaving the job site with happy customers. Every project gets full attention and is done right the first time."

export const cities = ['Lancaster', 'Lititz', 'New Holland', 'Reading', 'Mt Joy', 'Middletown', 'West Chester', 'York', 'Lebanon', 'Harrisburg', 'Elizabethtown']

export const reviews = [
  {
    "title": "Light Fixture Installation",
    "content": "Romany did an excellent job replacing two old fluorescent fixtures with LED fixtures. He is very knowledgeable, explains things well, and is respectful of property. He also was able to do my job quickly. He is not cheap, but he does quality work.",
    "user": "Loretta Minear"
  },
  {
    "title": "Gas Line Installation",
    "content": "He was pleasant and serviced me quickly, and gave me instructions. I would recommend him.",
    "user": "Linda Jumper"
  },
  {
    "title": "Faucet Repair",
    "content": "Efficient, friendly, and professional.",
    "user": "Chris Kirman"
  },
  {
    "title": "Ceiling Fan Repair",
    "content": "Great experience. Will definitely use again.",
    "user": "Kenneth Duke"
  },
  {
    "title": "Gas Fireplace Install/Conversion",
    "content": "Pro was very professional, was on time and did an excellent job. I would totally recommend this pro.",
    "user": "Pro Referral Customer"
  },
  {
    "title": "Light Fixture Repair",
    "content": "Pro responded quickly and scheduled a mutual time to repair my light.",
    "user": "Pro Referral Customer"
  },
  {
    "title": "Bathroom Fan Repair",
    "content": "Excellent experience ... easy communication, quick response, great clean-up.",
    "user": "Elaine Farley"
  },
  {
    "title": "Exterior Lighting Replacement",
    "content": "Good overall.",
    "user": "Charles Raymond"
  },
]
