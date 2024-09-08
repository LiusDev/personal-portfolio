import AOS from "aos"
import {
    About,
    Contact,
    Hero,
    SideBar,
    ThemeSwitcher,
    Works,
} from "@/components"
import { useEffect } from "react"
import "aos/dist/aos.css"
import Head from "next/head"
import { Rubik } from "next/font/google"
import { AppShell, Burger } from "@mantine/core"
import { useColorScheme, useDisclosure } from "@mantine/hooks"
import { TiThMenu } from "react-icons/ti"

const rubik = Rubik({ subsets: ["latin"] })

export default function Home() {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 100,
        })
    }, [])

    const [navbarOpened, { toggle }] = useDisclosure()
    const colorScheme = useColorScheme()
    return (
        <>
            <Head>
                <title>Đào Xuân Quý</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.webp" />
                <meta
                    name="google-site-verification"
                    content="mB8bX8ZMNfErxBvKfSWw9Nellf0U0lWrH8TC7JPbw3U"
                />
                <meta
                    name="description"
                    content="I am a software enginner with more than 1 year of experience, but the products I have made are carefully invested. I am also an active person at work, constantly learning new skills."
                ></meta>
            </Head>
            <AppShell
                navbar={{
                    width: 256,
                    breakpoint: 1280,
                    collapsed: { mobile: !navbarOpened },
                }}
                withBorder={false}
            >
                <AppShell.Navbar className="overflow-hidden bg-secondary-dark dark:bg-tertiary-dark shadow-xl dark:shadow-none transition-all duration-300">
                    <SideBar opened={navbarOpened} toggle={toggle} />
                </AppShell.Navbar>
                <AppShell.Main
                    className={` bg-secondary dark:bg-tertiary overflow-hidden transition-all duration-300 ${rubik.className}`}
                >
                    <button
                        onClick={toggle}
                        className="fixed z-40 top-5 left-5 py-2.5 px-2.5 flex dark:bg-secondary-dark bg-tertiary-dark rounded-full transition-all duration-300"
                    >
                        <TiThMenu className="dark:text-tertiary-dark text-secondary-dark text-xl xl:text-4xl" />
                    </button>
                    <ThemeSwitcher />
                    <Hero id="hero" />
                    <About id="about" />
                    <Works id="works" />
                    <Contact id="contact" />
                </AppShell.Main>
            </AppShell>
        </>
    )
}
