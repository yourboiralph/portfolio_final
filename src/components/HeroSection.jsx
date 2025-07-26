import { ArrowDown } from "lucide-react";

export const HeroSection = () => {


  return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center p-4">

    <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="grid grid-cols-[2fr_1fr]">
            <div className="space-y-6 ">
                <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">Ralph Hernandez</span>
                </h1>

                <p className="text-lg md:text-lg text-muted-foreground max-w-4xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I specialize in both frontend and backend development, turning ideas into interactive experiences with modern tools and technologies. Whether it’s crafting responsive interfaces or designing robust APIs, I enjoy solving real-world problems through code.
                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View my work
                    </a>
                </div>
                
            </div>

            <div>
                <img className="scale-200" src="/projects/profile_pic.png" alt="" />
            </div>
        </div>
    </div>

    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
    </div>
  </section>;
};
