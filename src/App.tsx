import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import ServiceArea from './pages/ServiceArea'
import Gallery from './pages/Gallery'
import Reviews from './pages/Reviews'
import Quote from './pages/Quote'
import Layout from './pages/Layout'

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/services' element={<Services />} />
                <Route path='/service-area' element={<ServiceArea />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/reviews' element={<Reviews />} />
                <Route path='/quote' element={<Quote />} />
            </Route>
        </Routes>
    )
}