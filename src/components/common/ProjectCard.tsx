import { cn } from "@/utils"
import Box from "./Box"
import Button from "./Button"
import { FaAngleRight } from "react-icons/fa"
import { Project } from "@/types"
import { useDisclosure } from "@mantine/hooks"
import ProjectModal from "./ProjectModal"
import { useState } from "react"
import Badge from "./Badge"

const ProjectCard = ({
    project,
    className,
}: {
    project: Project
    className?: string
}) => {
    const [show, { open: setOpen, close: setClose }] = useDisclosure()

    const [modalProject, setModalProject] = useState<Project>(project)
    const handleOpenModal = () => {
        setModalProject(project)
        setOpen()
    }
    return (
        <>
            <Box
                className={cn(
                    `flex flex-col gap-2 overflow-hidden ${className}`
                )}
                data-aos="fade-up"
            >
                <img
                    src={project.image}
                    alt={project.name}
                    className="ratio-16x9 object-cover"
                />
                <div className="p-4 flex flex-col gap-2 justify-between h-full">
                    <div>
                        <h2 className="font-semibold text-lg line-clamp-2">
                            {project.name}
                        </h2>
                        <Badge>{project.createdAt}</Badge>
                        <p>{project.description}</p>
                    </div>
                    <div className="flex justify-end">
                        <Button
                            component="button"
                            variant="text"
                            className="flex items-center group"
                            onClick={handleOpenModal}
                        >
                            View detail
                            <FaAngleRight className="text-lg group-hover:translate-x-1 transition-all duration-100" />
                        </Button>
                    </div>
                </div>
            </Box>
            <ProjectModal
                project={modalProject}
                show={show}
                setClose={setClose}
            />
        </>
    )
}

export default ProjectCard
