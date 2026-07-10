import { useState, useRef, useEffect } from "react";
import "../styles/carousel.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import React from "react";

interface CarouselProps {
    pages: React.JSX.Element[]
}

export default function Carousel( {pages} : CarouselProps ) {
    const breakpoint = 769;
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
    if (isMobile) return pages[0];


    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const pageCount = pages.length
    const pagesExt = [pages[pageCount - 1], ...pages, pages[0]]
    const [curPage, setCurPage] = useState(1)
    const [transition, setTransition] = useState(true)
    const [isAnimating, setIsAnimating] = useState(false);
    const carousel = useRef<HTMLDivElement>(null)
    const time = 700

    const next = () => {
        if (isAnimating) return

        setCurPage((curPage+1) % (pageCount+2))

        if (curPage === pageCount) {
            setIsAnimating(true)
            setTimeout(() => {
                setTransition(false)
                setCurPage(1)
                setTimeout(() => {
                    setTransition(true)
                    setIsAnimating(false)
                }, 50)
            }, time)
        }
    }

    const prev = () => {
        if (isAnimating) return

        setCurPage((curPage-1 + (pageCount+2)) % (pageCount+2))

        if (curPage === 1) {
            setIsAnimating(true);
            setTimeout(() => {
                setTransition(false)
                setCurPage(pageCount)
                setTimeout(() => {
                    setTransition(true)
                    setIsAnimating(false)
                }, 50)
            }, time)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            next()
        }, 15000)

        return () => clearInterval(interval)
    }, [next])

    return (
        <div className="carousel-wrapper">
            <div 
                className='carousel' 
                ref={carousel} 
                style={{transform: `translateX(-${curPage * 100}vw)`, transition: transition ? `${time}ms ease` : 'none'}}
            >
                { pagesExt.map((page, i) => <React.Fragment key={i}>{page}</React.Fragment>) }
            </div>
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