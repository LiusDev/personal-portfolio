import React from "react"
import { Title } from ".."
import { cn } from "@/utils"
import Infomation from "../common/Infomation"
import ContactForm from "../common/ContactForm"

const Contact = ({
    id,
    className = "",
}: {
    id: string
    className?: string
}) => {
    return (
        <section
            id={id}
            className={cn(`w-full mb-64 md:mt-16 px-6 md:px-8 ${className}`)}
        >
            <div className="max-w-screen-lg m-auto" data-aos="fade-right">
                <Title>Contact</Title>
            </div>
            <div className="max-w-screen-lg m-auto">
                <div className="grid grid-cols-3 gap-8">
                    <Infomation />
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contact
