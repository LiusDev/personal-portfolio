import React, { SetStateAction, useEffect, useState } from "react"
import { Title, Button } from ".."
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "../common/ProjectCard"

const categories: string[] = ["All", "NextJS", "TailwindCSS", "Framer Motion"]

const projects = [
    {
        image: "https://quydxportfolio.netlify.app/assets/img/portfolio/theband.webp",
        name: "The Band Website",
        description:
            "A website for a band. This website is built with NextJS, TailwindCSS, and Framer Motion.",
        createdAt: "31 March 2022",
        role: "Frontend",
        techStack: ["NextJS", "TailwindCSS", "Framer Motion"],
        link: "https://quydxtheband.netlify.app",
        repo: "https://github.com/liusdev/theband",
    },
    {
        image: "https://quydxportfolio.netlify.app/assets/img/portfolio/theband.webp",
        name: "The Band Website",
        description:
            "A website for a band. This website is built with NextJS, TailwindCSS, and Framer Motion.",
        createdAt: "31 March 2022",
        role: "Frontend",
        techStack: ["Framer Motion"],
        link: "https://quydxtheband.netlify.app",
        repo: "https://github.com/liusdev/theband",
    },
    {
        image: "https://quydxportfolio.netlify.app/assets/img/portfolio/theband.webp",
        name: "The Band Website",
        description:
            "A website for a band. This website is built with NextJS, TailwindCSS, and Framer Motion.",
        createdAt: "31 March 2022",
        role: "Frontend",
        techStack: ["TailwindCSS"],
        link: "https://quydxtheband.netlify.app",
        repo: "https://github.com/liusdev/theband",
    },
]

const Works = ({ id, className }: { id: string; className?: string }) => {
    return (
        <section
            id={id}
            className={`w-full md:mt-0 px-6 md:px-8 mb-8 ${className}`}
        >
            <div className="max-w-screen-lg m-auto">
                <Title>Recent Work</Title>
            </div>
            <div className="max-w-screen-lg m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Works
