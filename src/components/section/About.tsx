import React from "react"
import Image from "next/image"
import { Title, Button, Timeline } from ".."
import { cn } from "@/utils"
import { TimelineItem } from "../common/Timeline"

const skills = [
    {
        title: "Programming languages",
        detail: "Typescript, Java, C",
    },
    {
        title: "Libraries and frameworks",
        detail: "ReactJS, NextJS, TailwindCSS, Mantine, React-I18N, NestJS, Spring Boot",
    },
    {
        title: "Tools",
        detail: "Git, Github, Docker, MySQL, Cloudflare",
    },
]

const works = [
    {
        title: "Viettel Telecom",
        time: "04/2024",
        position: "Backend Developer",
        details: [
            "Developed and maintained backend services for the company's internal systems",
            "Participated in the development of a new system for managing customer information",
        ],
    },
]

const education = [
    {
        title: "FPT University",
        time: "09/2021 - 08/2025",
        position: "",
        details: ["Bachelor of software engineering"],
    },
]

const activities = [
    {
        title: "JS Club - Japanese Software Engineers",
        time: "05/2022 - 01/2024",
        position: "Vice President gen 10 | Member Of Expertise Department",
        details: [
            "Support President in the club management and connecting with club members",
            "Delegate tasks to club officer team, ensuring they understand their responsibilities and motivating them to succeed",
        ],
    },
    {
        title: "Coding Inspiration 2023",
        time: "07/2023 - 08/2023",
        position: "Deputy Event Organizer",
        details: [
            "Led logistical planning and coordination",
            "Managed team of volunteers effectively",
            "Facilitated participant engagement and networking",
        ],
    },
]

const awards = [
    {
        title: "GenAI Hackathon 2024",
        time: "06/2024 - 07/2024",
        position: "First prize",
        details: [
            "MindGPT - An AI application designed to offer intelligent suggestions and high personalization capabilities, creating intuitive and user-specific mindmaps.",
            "Aims to improve learning efficiency, enhance creative thinking, and strengthen problem-solving skills.",
            "Contributes to advancing the quality of education and fostering an innovative learning environment for future generations.",
            "Competed against 20 teams and over 80 participants from across the country.",
            "Organizer: FUNiX",
            <a href="https://vnexpress.net/vpbank-technology-hackathon-2024-tim-ra-nha-vo-dich-4755630.html" target="_blank" rel="noopener">VPBank Technology Hackathon 2024 tìm ra nhà vô địch</a>,
            <a href="https://www.baogiaothong.vn/chung-ket-cuoc-thi-technology-hackathon-2024-hanh-trinh-kien-tao-tuong-lai-cung-vpbank-192240607102843928.htm" target="_blank" rel="noopener">Chung kết cuộc thi Technology Hackathon 2024</a>
        ],
    },
    {
        title: "VPBank Technology Hackathon 2024",
        time: "04/2024 - 06/2024",
        position: "Champion",
        details: [
            "An application designed to provide various functionalities to help users create and manage architecture design diagrams more effectively. With the power of ChatGPT 4, our application can provide users the ability to create architecture design from scratch with a more interactive and user-friendly experience.",
            "Beat over 150 teams from different Companies and Universities.",
            "Organizer: VPBank, AWS",
            <a href="https://vnexpress.net/vpbank-technology-hackathon-2024-tim-ra-nha-vo-dich-4755630.html" target="_blank" rel="noopener">VPBank Technology Hackathon 2024 tìm ra nhà vô địch</a>,
            <a href="https://www.baogiaothong.vn/chung-ket-cuoc-thi-technology-hackathon-2024-hanh-trinh-kien-tao-tuong-lai-cung-vpbank-192240607102843928.htm" target="_blank" rel="noopener">Chung kết cuộc thi Technology Hackathon 2024</a>
        ],
    },
    {
        title: "F-Talent Code 2023",
        time: "10/2023",
        position: "Consolation prizes",
        details: [
            "An algorithm contest organized by FPT University across the entire campus.",
        ],
    },
    {
        title: "FPTU Student achievement awards",
        time: "08/2023",
        position: "Excellent student",
        details: [
            "Achieved excellent student award in summer 2023 semester and participated in regular student honor ceremonies",
        ],
    },
]

const certifications: TimelineItem[] = [
    {
        title: "Coursera - Software Development Lifecycle Specialization",
        time: "12/2023",
        position: "",
        details: [
            <a
                href="https://coursera.org/share/4469b48094da0c7acf0d00c9de065046"
                target="_blank"
            >
                Certification link
            </a>,
        ],
    },
    {
        title: "Coursera - Computer Communications Specialization",
        time: "04/2023",
        position: "",
        details: [
            <a
                href="https://coursera.org/share/b6df2d9ef557bd078f6a3df601c7fb9e"
                target="_blank"
            >
                Certification link
            </a>,
        ],
    },
]

const About = ({ id, className }: { id: string; className?: string }) => {
    return (
        <section
            id={id}
            className={cn(
                `w-full md:mt-0 px-6 md:px-8 flex flex-col items-center justify-start ${className}`
            )}
        >
            <div className="flex flex-col md:flex-row items-center mb-16 justify-center max-w-screen-lg">
                <div
                    data-aos="fade-right"
                    className="w-72 md:w-1/3 mb-8 md:mb-0"
                >
                    <Image
                        src="/about.webp"
                        alt="About Image"
                        height={560}
                        width={560}
                        className="rounded-2xl"
                    />
                </div>
                <div className="md:ml-16 md:w-2/3" data-aos="fade-left">
                    <Title>about me</Title>
                    <h3 className="text-tertiary-dark dark:text-secondary-dark text-xl md:text-3xl font-medium mb-6 transition-all duration-300">
                        Skills
                    </h3>
                    <ul className="text-tertiary-dark/70 dark:text-secondary-dark/70 leading-7 transition-all duration-300 list-disc ml-8">
                        {skills.map((skill, index) => (
                            <li key={index}>
                                <span className="font-medium">
                                    {skill.title}:{" "}
                                </span>
                                <span>{skill.detail}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-10 flex justify-center md:justify-start">
                        <Button
                            component="scroll"
                            to="contact"
                            className="mr-5"
                        >
                            Contact Me
                        </Button>
                        <Button component="a" href="/cv" target="_blank">
                            Download CV
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full max-w-screen-lg gap-16">
                <div className="w-full md:w-1/2">
                    <Timeline
                        data-aos="fade-up"
                        title="Work Experience"
                        info={works}
                    />
                    <Timeline
                        data-aos="fade-up"
                        title="Education"
                        info={education}
                    />
<Timeline
                        data-aos="fade-up"
                        title="Honors & Awards"
                        info={awards}
                    />
                </div>
                <div className="w-full md:w-1/2">
                    
                    <Timeline
                        data-aos="fade-up"
                        title="Activities"
                        info={activities}
                    />
                    <Timeline
                        data-aos="fade-up"
                        title="Certifications"
                        info={certifications}
                    />
                </div>
            </div>
        </section>
    )
}

export default About
