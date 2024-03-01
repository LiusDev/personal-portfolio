import AOS from "aos"
import {
    About,
    Button,
    Hero,
    SideBar,
    ThemeSwitcher,
    Works,
} from "@/components"
import { useEffect } from "react"
import "aos/dist/aos.css"
import Head from "next/head"
import { Rubik } from "next/font/google"

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
            <ThemeSwitcher />
            <SideBar />
            <main
                className={` bg-secondary dark:bg-tertiary min-h-screen xl:ml-64 overflow-hidden transition-all duration-300 ${rubik.className}`}
            >
                <Hero id="hero" />
                <About id="about" />
                <Works id="works" />
            </main>
        </>
    )
}
