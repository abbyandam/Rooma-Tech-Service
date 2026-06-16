import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import type { NavBarProps } from "../types/types";
import { useEffect } from "react";

export default function Layout({current_page} : NavBarProps) {
    const { pathname } = useLocation()
    const [searchParams] = useSearchParams()
    const service = searchParams.get('service')

    useEffect(() => {
        if (service) {
            const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')) + 20
            const element = document.getElementById(service)
            if (element) {
                const top = element.getBoundingClientRect().top + window.scrollY - offset
                window.scrollTo({ top, behavior: 'smooth' })
            }
        } else {
            window.scrollTo(0, 0)
        }
    }, [pathname])



    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            <NavBar current_page={current_page}/> 
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}