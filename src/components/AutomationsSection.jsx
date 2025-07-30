import { useEffect, useRef, useState } from "react"
import PlayVideo from "./PlayVideo"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AutomationsSection = () => {
    const currentRef = useRef(null)
    const [play, setPlay] = useState(false)
    const [videoLink, setVideoLink] = useState("")

    const slides = [
        {
            picture: "projects/thumbnail.jpg",
            link: "https://www.youtube.com/embed/XFjpJ7UPpSk?si=9eKhUPm5CqxFjeCV"
        },
        {
            picture: "projects/thumbnail.jpg",
            link: "https://www.youtube.com/embed/XFjpJ7UPpSk?si=9eKhUPm5CqxFjeCV"
        },
        {
            picture: "projects/thumbnail.jpg",
            link: "https://www.youtube.com/embed/XFjpJ7UPpSk?si=9eKhUPm5CqxFjeCV"
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    useEffect(()=>{
        const current = currentRef.current

        gsap.fromTo(current,
            { y: -100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: current,
                    start: "top 90%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                },
            }
        )
    }, [])

    return (
        <section id="automations" className="py-25 px-4 relative z-50">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
                    Automated <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my AI projects/workflows using{" "}
                    <span className="font-bold text-primary underline">N8N</span> that I am proud of.
                </p>
                <div className="border border-primary" ref={currentRef}>
                    <Slider {...settings}>
                        {slides.map((slide, index) => (
                            <div key={index} className="relative">
                                <img
                                    onClick={() => {
                                        setPlay(true)
                                        setVideoLink(slide.link)
                                    }}
                                    src={slide.picture}
                                    className="w-full h-full z-50 cursor-pointer"
                                    alt=""
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* PlayVideo rendered OUTSIDE the slider */}
            {play && (
                <PlayVideo play={play} link={videoLink} setPlay={setPlay} />
            )}
        </section>
    )
}
