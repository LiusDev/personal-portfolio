import { cn } from "@/utils"
import Box from "./Box"
import Button from "./Button"
import { FaAngleRight } from "react-icons/fa"

export interface Project {
    image: string
    name: string
    description: string
    createdAt: string
    techStack: string[]
    link: string
    repo: string
}

const ProjectCard = ({
    project,
    className,
}: {
    project: Project
    className?: string
}) => {
    return (
        <Box
            className={cn(
                `flex flex-col gap-2 rounded-xl overflow-hidden ${className}`
            )}
        >
            <img
                src={project.image}
                alt={project.name}
                className="ratio-16x9 object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
                <h2 className="font-semibold text-lg line-clamp-2">
                    {project.name}
                </h2>
                <p className="w-fit text-sm mb-3 bg-primary text-secondary-dark inline-block px-2 py-[2px] rounded-md">
                    {project.createdAt}
                </p>
                <p>{project.description}</p>
                <div className="flex justify-end">
                    <Button
                        component="button"
                        variant="text"
                        className="flex items-center group"
                    >
                        View detail
                        <FaAngleRight className="text-lg group-hover:translate-x-1 transition-all duration-100" />
                    </Button>
                </div>
            </div>
        </Box>
    )
}

export default ProjectCard
