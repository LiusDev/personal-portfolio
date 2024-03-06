import { Title } from ".."
import ProjectCard from "../common/ProjectCard"
import { Project } from "@/types"

const projects: Project[] = [
    {
        image: "/projects/qizz.png",
        name: "Qizz App",
        role: "Project Manager, Fullstack Developer",
        description:
            "A web app that helps create sets of questions and use them for real-time quizzes. Used github actions to implement CI/CD pipeline.",
        createdAt: "Jan 2024",
        techStack: [
            "NextJS",
            "TailwindCSS",
            "Mantine",
            "Framer Motion",
            "Spring Boot",
            "WebSocket",
            "MySQL",
            "Cloudflare",
            "Google Cloud",
            "Docker",
            "Github Actions",
        ],
        repo: [
            "https://github.com/HN2B2/qizz-client",
            "https://github.com/HN2B2/qizz-backend",
        ],
    },
    {
        image: "/projects/js-g12.png",
        name: "JS Club's 12th Gen Membership Recruitment Landing Page",
        role: "Frontend Developer",
        description:
            "Landing page promoting the 12th generation member recruitment event of the Japanese Software Engineers Club - FPT University Hanoi",
        createdAt: "Jan 2024",
        techStack: ["NextJS", "TailwindCSS", "Cloudflare"],
        link: "https://ttv.jsclub.dev/",
    },
    {
        image: "/projects/cmed.png",
        name: "CMED.VN",
        role: "Fullstack Developer",
        description:
            "Developed and maintained official website of CMED medical business and operations consulting JSC",
        createdAt: "Nov 2023",
        techStack: [
            "NextJS",
            "React-I18N",
            "NestJS",
            "MySQL",
            "Vercel",
            "cPanel hosting",
        ],
        link: "https://www.cmed.vn",
    },
    {
        image: "/projects/ci2023.png",
        name: "JS Club's Coding Inspiration 2023 Landing Page",
        role: "Frontend Developer",
        description:
            "Official landing page of the Coding Inspiration 2023 organized by JS club",
        createdAt: "Aug 2023",
        techStack: ["NextJS", "TailwindCSS", "Cloudflare"],
        link: "https://ci2023.jsclub.dev/",
    },
    {
        image: "/projects/unitech-blog.png",
        name: "Unitech Blog",
        role: "Frontend Developer",
        description:
            "UniTech Blog offers valuable articles on software skills for programmers, providing tips and tricks for the information technology industry",
        createdAt: "Jan 2023",
        techStack: ["NextJS", "TailwindCSS", "HygraphCMS", "Vercel"],
        link: "https://unitym-blog.vercel.app/",
        repo: ["https://github.com/LiusDev/unitech-blog"],
    },
    {
        image: "/projects/personal-portfolio.png",
        name: "Personal Portfolio",
        role: "Frontend Developer",
        description: "My personal portfolio website",
        createdAt: "Jan 2023",
        techStack: ["NextJS", "TailwindCSS", "HeadlessUI", "Vercel"],
        link: "https://quydx.id.vn",
        repo: ["https://github.com/LiusDev/personal-portfolio"],
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
