import React from "react"
import Image from "next/image"
import ReactTypingEffect from "react-typing-effect"
import { Button } from ".."
import { cn } from "@/utils"

const info = {
    name: "Đào Xuân Quý",
    job: ["Front End Web Developer", "Back End Developer", "Software Engineer"],
    description:
        "I am a software enginner with more than 1 year of experience, but the products I have made are carefully invested. I am also an active person at work, constantly learning new skills.",
    avatar: "/transparent.webp",
}

const Hero = ({ id, className = "" }: { id: string; className?: string }) => {
    return (
        <section
            id={id}
            className={cn(
                `relative w-full min-h-screen flex items-center justify-center px-6 md:px-8 after:z-0 after:content-[''] after:bg-secondary-dark dark:after:bg-tertiary-dark after:absolute after:-right-[20vh] after:-top-[20vh] after:w-[100vh] after:h-screen after:rounded-full 0 ${className}`
            )}
        >
            <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-lg z-10">
                <div className="md:w-1/2 md:mr-5 order-2 md:order-1 text-center md:text-left">
                    <h6 className="text-tertiary-dark dark:text-secondary-dark text-md lg:text-2xl font-medium mb-2 md:mb-5 transition-all duration-300">
                        Hello, I am
                    </h6>
                    <h1 className="text-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-5 transition-all duration-300">
                        {info.name}
                    </h1>
                    <span className="text-tertiary-dark dark:text-secondary-dark text-md lg:text-xl font-medium mb-3 md:mb-5 flex transition-all duration-300">
                        <ReactTypingEffect
                            staticText="I Am Passionate"
                            speed={100}
                            eraseSpeed={50}
                            eraseDelay={3000}
                            typingDelay={1000}
                            text={info.job}
                            className="m-auto md:m-0"
                        />
                    </span>
                    <p className="text-tertiary dark:text-secondary text-sm lg:text-lg mb-8 transition-all duration-300">
                        {info.description}
                    </p>
                    <Button
                        component="scroll"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        about me
                    </Button>
                </div>
                <div className="w-60 md:w-1/2 order-1 md:order-2 mb-12 md:mb-0">
                    <div className="bg-primary rounded-full overflow-hidden border-8 border-secondary-dark">
                        <Image
                            src={info.avatar}
                            alt="Avatar"
                            width={540}
                            height={540}
                            className="scale-105 align-top drop-shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
