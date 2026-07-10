import { useEffect, useState } from "react"
import "../styles/slideshow.scss"

interface SlideshowProps {
    pages: React.JSX.Element[]
}

export default function Slideshow({ pages } : SlideshowProps) {
    const [curIdx, setCurIdx] = useState(0)

    const next = () => {
        setCurIdx((curIdx + 1) % pages.length)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            next()
        }, 15000)

        return () => clearInterval(interval)
    }, [next])

    return (<div className="slideshow">
        { pages.map((page, i) => 
            <div 
                className="page"
                key={i}
                style={{opacity: i === curIdx ? 1 : 0}}
            >
                {page}
            </div>
        ) }
    </div>)
}