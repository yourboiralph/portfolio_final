import { Briefcase, ChevronDownCircleIcon, Code, GitBranch, User } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
    
    const leftRef = useRef(null)
    const rightRef1 = useRef(null)
    const rightRef2 = useRef(null)
    const rightRef3 = useRef(null)

    useEffect(() => {
        const left = leftRef.current
        const right1 = rightRef1.current
        const right2 = rightRef2.current
        const right3 = rightRef3.current

        gsap.fromTo(left,
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: left,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                },
            }
        )

        gsap.fromTo(right1,
            { x: 100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: right1,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                },
            }
        )
        gsap.fromTo(right2,
            { x: 100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: right2,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                },
            }
        )
        gsap.fromTo(right3,
            { x: 100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: right3,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                },
            }
        )
    }, [])
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6" ref={leftRef}>
                    <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>
                    <p className="text-muted-foreground">Over the years, I’ve worked on a variety of projects—from dynamic frontends using React and Tailwind CSS to scalable backend systems with Node.js, Express, and MongoDB. </p>
                    <p className="text-muted-foreground">I'm comfortable navigating both client-side and server-side development, collaborating in agile teams, and delivering features that make an impact.</p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
                        <a href="/projects/CV_Resume.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover" ref={rightRef1}>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <GitBranch className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Automations</h4>
                                <p>I know how to leverage AI to automate works. From being able to add/remove data to crm via telegram whether it be voice chat or text, to being able to generate shorts video by just a single click.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover" ref={rightRef2}>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <ChevronDownCircleIcon className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">API Confident</h4>
                                <p>Confident in handling REST APIs though Laravel or Express</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover" ref={rightRef3}>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p>Creating responsive website and web applications with modern frameworks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}