import { ArrowRight, ExternalLink, Github } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "Forever Ecommerce",
        description: "A Full-stack E-commerce with Admin Panel.",
        image: "/projects/image7.png",
        tags: ["React", "TailwindCSS", "Express", "MongoDB"],
        demoUrl: "https://forever-frontend-rust-eta.vercel.app/",
    },
    {
        id: 2,
        title: "Rweb Management System",
        description: "A 3-way system for managing Social Media Maketing Team, Graphics Designer Team, Website Developers Team",
        image: "/projects/image2.png",
        tags: ["Laravel", "Laravel Blade", "TailwindCSS"],
        demoUrl: "https://rwebsystem.rwebserver.com/",
    },

]

export const ProjectsSection = () => {

    const cardsRef = useRef([]);

    useEffect(() => {
        cardsRef.current.forEach((card) => {
        gsap.fromTo(
            card,
            { y: 50, opacity: 0 },
            {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
            }
        );
        });
    }, []);

    return <section id="projects" className="py-25 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Featured <span className="text-primary">Projects</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my projects that I took part of. Each project was carefully
                crafted with attention to detail, performance, and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover" ref={(el) => (cardsRef.current[key] = el)}>
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/50 text-secondary-foreground">{tag}</span>
                                ))}
                            </div>
                        

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center relative">
                                    <div className="flex space-x-3">
                                        <a target="_blank" href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/yourboiralph" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check My Github <ArrowRight size={16} />
                </a>
            </div>
        </div>

    </section>
}