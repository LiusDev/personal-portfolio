import React, { useMemo, useState } from "react"
import Image from "next/image"
import { TfiHome, TfiIdBadge, TfiBookmarkAlt, TfiEmail } from "react-icons/tfi"
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import { Button } from ".."
import { cn } from "@/utils"

const info = {
    name: "dao xuan quy",
    avatar: "/avatar.webp",
}

const menuItems = [
    {
        name: "Home",
        href: "hero",
        icon: <TfiHome className="text-[18px]" />,
    },
    {
        name: "About",
        href: "about",
        icon: <TfiIdBadge className="text-[18px]" />,
    },
    {
        name: "My works",
        href: "works",
        icon: <TfiBookmarkAlt className="text-[18px]" />,
    },
    {
        name: "Contact",
        href: "contact",
        icon: <TfiEmail className="text-[18px]" />,
    },
]

const socialItems = [
    {
        name: "Facebook",
        icon: (
            <FaFacebook className="text-xl text-tertiary-dark dark:text-secondary-dark group-hover:text-primary dark:group-hover:text-text-secondary-dark transition-all duration-300" />
        ),
        href: "https://www.facebook.com/x.quy.203",
    },
    {
        name: "Instagram",
        icon: (
            <FaInstagram className="text-xl text-tertiary-dark dark:text-secondary-dark group-hover:text-primary dark:group-hover:text-text-secondary-dark transition-all duration-300" />
        ),
        href: "https://www.instagram.com/x.quy.203",
    },
    {
        name: "Linkedin",
        icon: (
            <FaLinkedin className="text-xl text-tertiary-dark dark:text-secondary-dark group-hover:text-primary dark:group-hover:text-text-secondary-dark transition-all duration-300" />
        ),
        href: "https://www.linkedin.com/in/xquy203/",
    },
    {
        name: "Github",
        icon: (
            <FaGithub className="text-xl text-tertiary-dark dark:text-secondary-dark group-hover:text-primary dark:group-hover:text-text-secondary-dark transition-all duration-300" />
        ),
        href: "https://github.com/LiusDev",
    },
]

const SideBar = ({ className }: { className?: string }) => {
    const [activeSection, setActiveSection] = useState("hero")
    const handleSetActive = (href: string) => setActiveSection(href)

    return (
        <aside
            className={cn(
                `w-64 fixed top-0 left-0 bottom-0 hidden xl:flex flex-col justify-between bg-secondary-dark dark:bg-tertiary-dark overflow-hidden shadow-xl dark:shadow-none transition-all duration-300 ${className}`
            )}
        >
            <div className="relative after:content-[''] after:absolute after:-top-[180px] after:-left-[45px] after:w-[310px] after:h-[310px] after:bg-primary after:rounded-full after:shadow-lg dark:after:shadow-none">
                <div className="relative mt-16 z-10 w-full flex flex-col justify-center items-center">
                    <div className="w-100 h-100 overflow-hidden rounded-full border-secondary-dark border-4">
                        <Image
                            src={info.avatar}
                            alt="Avatar"
                            width={100}
                            height={100}
                        />
                    </div>
                    <h5 className="mt-2 uppercase tracking-[3px] text-sm font-thin text-tertiary dark:text-secondary transition-all duration-300">
                        {info.name}
                    </h5>
                </div>
                <div className="mt-20">
                    <ul className="flex flex-col justify-center">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`w-full ${
                                    index !== 0
                                        ? "border-t border-tertiary-dark/5 dark:border-secondary-dark/5"
                                        : ""
                                }`}
                            >
                                <Button
                                    component="scroll"
                                    variant="text"
                                    to={item.href}
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                    onSetActive={() =>
                                        handleSetActive(item.href)
                                    }
                                    className={`w-full flex px-8 py-5 cursor-pointer transition-all duration-300 ${
                                        activeSection === item.href
                                            ? "font-semibold text-primary"
                                            : "text-tertiary-dark/60 dark:text-secondary-dark/60 dark:hover:text-secondary-dark hover:text-primary font-normal"
                                    }`}
                                    leftSection={item.icon}
                                >
                                    <span className="ml-3 text-sm uppercase tracking-[3px]">
                                        {item.name}
                                    </span>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mb-4">
                <ul className="flex justify-center items-center w-full mb-4">
                    {socialItems.map((item, index) => (
                        <li key={index}>
                            <Button
                                component="a"
                                variant="icon"
                                title={item.name}
                                target="_blank"
                                href={item.href}
                                className="inline-block px-3"
                            >
                                {item.icon}
                            </Button>
                        </li>
                    ))}
                </ul>
                <p className="flex items-center justify-center text-tertiary-dark/60 dark:text-secondary-dark/60 transition-all duration-300">
                    Last updated: Apr 28, 2024
                </p>
            </div>
        </aside>
    )
}

export default SideBar
