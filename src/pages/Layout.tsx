import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import type { NavBarProps } from "../types/propTypes";

export default function Layout({current_page} : NavBarProps) {
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