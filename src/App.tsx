import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import { pages } from './globals'


export default function App() {
    return (
        <Routes>
            {pages.map((page) => {
                return (
                    <Route element={<Layout current_page={page}/>}>
                        <Route path={page.link} element={page.element} />
                    </Route>
                )
            })}
        </Routes>
    )
}