import React from "react"
import { Title } from ".."
import { cn } from "@/utils"

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
            className={cn(`w-full md:mt-0 px-6 md:px-8 ${className}`)}
        >
            <div className="max-w-screen-lg m-auto">
                <Title>Contact</Title>
            </div>
        </section>
    )
}

export default Contact
