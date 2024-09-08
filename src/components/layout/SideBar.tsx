import React, { useMemo, useState } from "react"
import Image from "next/image"
import { TfiHome, TfiIdBadge, TfiBookmarkAlt, TfiEmail } from "react-icons/tfi"
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import { Button } from ".."
import { AppShell, Burger } from "@mantine/core"

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

const SideBar = ({
    opened,
    toggle,
}: {
    opened: boolean
    toggle: () => void
}) => {
    const [activeSection, setActiveSection] = useState("hero")

    return (
        <>
            <AppShell.Section
                grow
                className="relative after:content-[''] after:absolute after:-top-[180px] after:-left-[45px] after:w-[310px] after:h-[310px] after:bg-primary after:rounded-full after:shadow-lg dark:after:shadow-none"
            >
                <Burger
                    opened={opened}
                    onClick={toggle}
                    color="white"
                    className="block xl:hidden absolute z-50 top-5 right-5"
                />
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
                    <ul className="flex flex-col justify-center divide-y divide-tertiary-dark/5 dark:divide-secondary-dark/5">
                        {menuItems.map((item, index) => (
                            <li key={index} className="w-full">
                                <Button
                                    component="scroll"
                                    variant="text"
                                    to={item.href}
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                    onSetActive={() =>
                                        setActiveSection(item.href)
                                    }
                                    className={`w-full flex px-8 py-5 cursor-pointer transition-all duration-300 ${
                                        activeSection === item.href
                                            ? "font-semibold text-primary"
                                            : "text-tertiary-dark/60 dark:text-secondary-dark/60 dark:hover:text-secondary-dark hover:text-primary font-normal"
                                    }`}
                                    leftSection={item.icon}
                                    onClick={toggle}
                                >
                                    <span className="ml-3 text-sm uppercase tracking-[3px]">
                                        {item.name}
                                    </span>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </AppShell.Section>
            <AppShell.Section className="mb-4">
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
                    Last updated: July 2024
                </p>
            </AppShell.Section>
        </>
    )
}

export default SideBar
