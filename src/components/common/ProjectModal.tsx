import { Project } from "@/types"
import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment } from "react"

interface ProjectModalProps {
    project: Project
    show: boolean
    setClose: () => void
}

const ProjectModal = ({ project, show, setClose }: ProjectModalProps) => {
    return (
        <Transition appear show={show} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={setClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center backdrop-blur-lg bg-tertiary-dark/30 dark:bg-secondary-dark/30 transition-all">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-2xl overflow-hidden text-left align-middle shadow-box transition-all bg-secondary dark:bg-tertiary text-tertiary dark:text-secondary">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full aspect-video"
                                />
                                <div className="p-6">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl leading-6 text-primary font-semibold mb-1"
                                    >
                                        {project.name}
                                    </Dialog.Title>
                                    <p className="mb-4 text-sm italic">
                                        {project.role}
                                    </p>
                                    <p className="mb-4">
                                        {project.description}
                                    </p>

                                    <ul>
                                        <li className="relative dark:text-secondary-dark mb-2 pl-4 before:absolute before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-primary before:top-2 before:left-0 transition-all duration-300">
                                            <span className="font-semibold">
                                                Created:
                                            </span>{" "}
                                            {project.createdAt}
                                        </li>
                                        <li className="relative dark:text-secondary-dark mb-2 pl-4 before:absolute before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-primary before:top-2 before:left-0 transition-all duration-300">
                                            <span className="font-semibold">
                                                Technologies:
                                            </span>{" "}
                                            {project.techStack.join(", ")}
                                        </li>
                                        {project.repo && (
                                            <li className="relative dark:text-secondary-dark mb-2 pl-4 before:absolute before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-primary before:top-2 before:left-0 transition-all duration-300">
                                                <span className="font-semibold">
                                                    Github:
                                                </span>{" "}
                                                {project.repo.map(
                                                    (repo, index) => (
                                                        <React.Fragment
                                                            key={index}
                                                        >
                                                            <a
                                                                key={index}
                                                                href={repo}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="text-primary"
                                                            >
                                                                {repo}
                                                            </a>
                                                            {index !==
                                                                project.repo!
                                                                    .length -
                                                                    1 && ", "}
                                                        </React.Fragment>
                                                    )
                                                )}
                                            </li>
                                        )}
                                        {project.link && (
                                            <li className="relative dark:text-secondary-dark mb-2 pl-4 before:absolute before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-primary before:top-2 before:left-0 transition-all duration-300">
                                                <span className="font-semibold">
                                                    Live site:
                                                </span>{" "}
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-primary"
                                                >
                                                    {project.link}
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default ProjectModal
