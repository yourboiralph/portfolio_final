import { useEffect, useRef, useState } from "react"
import {cn} from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
    {name: "JavaScript", level: 95, category: "Frontend"},
    {name: "React", level: 95, category: "Frontend"},
    {name: "Vue", level: 50, category: "Frontend"},
    {name: "Tailwind CSS", level: 70, category: "Frontend"},

    {name: "Express", level: 80, category: "Backend"},
    {name: "MongoDB", level: 80, category: "Backend"},
    {name: "Laravel", level: 90, category: "Backend"},

    {name: "Github", level: 80, category: "Tools"},
    {name: "Figma", level: 80, category: "Tools"},
]

const categories = ["all", "Frontend", "Backend", "Tools"]



export const SkillsSection = () => {
    const skillsRef = useRef(null)

    useEffect(()=> {
        const skillsRefVar = skillsRef.current

        gsap.fromTo(skillsRefVar,
            { y: -100,opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: skillsRefVar,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                },
            }
        )
        
    }, [])

    const [activeCategory, setActiveCategory] = useState("all")
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory )
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-fwap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button onClick={() => setActiveCategory(category)} key={key} className={cn("cursor-pointer px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                    )}>{category}</button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" ref={skillsRef}>
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover" >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg"> {skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{width: skill.level + "%"}}/>
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}