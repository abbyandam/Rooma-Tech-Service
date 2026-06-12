import { useEffect, useRef, useState } from 'react'
import '../styles/gallery.scss'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export default function Gallery() {
    const images = import.meta.glob('../assets/gallery/*.{jpg,png,webp}', { eager: true })
    const srcs: string[] = Object.values(images).map((img: any) => img.default)
    const befores = srcs.filter((src) => src.includes('before'))
                        .sort((src1, src2) => {
                            const i = Number(src1.match("/\d+/")?.[0])
                            const j = Number(src2.match("/\d+/")?.[0])

                            return i - j;
                        })
    const afters = srcs.filter((src) => src.includes('after'))
                        .sort((src1, src2) => {
                            const i = Number(src1.match("/\d+/")?.[0])
                            const j = Number(src2.match("/\d+/")?.[0])

                            return i - j;
                        })
                        
    const imgCount = befores.length
    const befores_ext = [befores[imgCount - 1], ...befores, befores[0]]
    const afters_ext = [afters[imgCount - 1], ...afters, afters[0]]

    const [curImg, setCurImg] = useState(1)
    const [transition, setTransition] = useState(true)
    const [isAnimating, setIsAnimating] = useState(false);
    const carousel = useRef<HTMLDivElement>(null)
    const time = 700

    const next = () => {
        if (isAnimating) return

        setCurImg((curImg+1) % (imgCount+2))

        if (curImg === imgCount) {
            setIsAnimating(true)
            setTimeout(() => {
                setTransition(false)
                setCurImg(1)
                setTimeout(() => {
                    setTransition(true)
                    setIsAnimating(false)
                }, 50)
            }, time)
        }
    }

    const prev = () => {
        if (isAnimating) return

        setCurImg((curImg-1 + (imgCount+2)) % (imgCount+2))

        if (curImg === 1) {
            setIsAnimating(true);
            setTimeout(() => {
                setTransition(false)
                setCurImg(imgCount)
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
        }, 10000)

        return () => clearInterval(interval)
    }, [next])

    return (
        <div className="gallery">
            <div className='gap'/>
            <div className='gap'/>
            <h2>Gallery</h2>
            <div className='gap'/>
            <div className='gap'/>
            <div className='images'>
                <div 
                    className='carousel' 
                    ref={carousel} 
                    style={{transform: `translateX(-${curImg * 100}vw)`, transition: transition ? `${time}ms ease` : 'none'}}
                >
                    { befores_ext.map((_, i) => (
                        <div className='image' key={i}>
                            <img src={befores_ext[i]} loading='lazy'/>
                            <img src={afters_ext[i]} loading='lazy'/>
                        </div>
                    ))}
                </div>
                <div className='controls'> 
                    <div className='before'>
                        <button 
                            onClick={prev}
                            disabled={isAnimating}
                        >
                            <FaAngleLeft />
                        </button>
                        <h2>Before</h2>
                    </div>
                    <div className='after'>
                        <button 
                            onClick={next}
                            disabled={isAnimating}
                        >
                            <FaAngleRight />
                        </button>
                        <h2>After</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}