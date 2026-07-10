import { useEffect, useState } from "react"
import "../styles/slideshow.scss"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface SlideshowProps {
    pages: React.JSX.Element[]
}

export default function Slideshow({ pages } : SlideshowProps) {
    const [curIdx, setCurIdx] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false);

    const next = () => { 
        setCurIdx((curIdx + 1) % pages.length) 
        setIsAnimating(true)

        setTimeout(() => {
            setTimeout(() => {
                setIsAnimating(false)
            }, 50)
        }, 400)
    }
    const prev = () => { 
        setCurIdx(((curIdx - 1) + pages.length) % pages.length) 
        setIsAnimating(true)

        setTimeout(() => {
            setTimeout(() => {
                setIsAnimating(false)
            }, 50)
        }, 400)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            next()
        }, 15000)

        return () => clearInterval(interval)
    }, [next])

    return (
        <div className="slideshow">
            { pages.map((page, i) => 
                <div 
                    className="page"
                    key={i}
                    style={{opacity: i === curIdx ? 1 : 0}}
                >
                    {page}
                </div>
            ) }
            <div className='controls'> 
                <button 
                    onClick={prev}
                    disabled={isAnimating}
                    className="left"
                >
                    <FaAngleLeft />
                </button>
                <button 
                    onClick={next}
                    disabled={isAnimating}
                    className="right"
                >
                    <FaAngleRight />
                </button>
            </div>
        </div>
    )
}