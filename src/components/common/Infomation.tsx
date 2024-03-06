import { TfiEmail, TfiMapAlt, TfiMobile } from "react-icons/tfi"
import Box from "./Box"

const info = {
    email: "quydx.work@gmail.com",
    phone: "(+84) 978407765",
}

const Infomation = () => {
    return (
        <Box className="p-6 col-span-3 lg:col-span-1" data-aos="fade-right">
            <h2 className="text-3xl font-medium mb-4">Get in touch</h2>
            <p className="text-tertiary-dark/70 dark:text-secondary-dark/70 transition-all duration-300 mb-4">
                Always available for freelancing if the right project comes
                along, Feel free to contact me.
            </p>
            <ul>
                <li className="flex gap-4 items-center mb-3">
                    <span className="w-5">
                        <TfiEmail className="text-primary text-2xl" />
                    </span>
                    <a
                        href={` mailto:${info.email}`}
                        className="text-tertiary dark:text-secondary hover:text-primary dark:hover:text-primary transition-all duration-300 text-lg font-medium"
                    >
                        {info.email}
                    </a>
                </li>
                <li className="flex gap-4 items-center mb-3">
                    <span className="w-5">
                        <TfiMobile className="text-primary text-2xl" />
                    </span>
                    <a
                        href={` tel:${info.phone}`}
                        className="text-tertiary dark:text-secondary hover:text-primary dark:hover:text-primary transition-all duration-300 text-lg font-medium"
                    >
                        {info.phone}
                    </a>
                </li>
                <li className="flex gap-4 items-center mb-3">
                    <span className="w-5">
                        <TfiMapAlt className="text-primary text-2xl" />
                    </span>
                    <p className="text-lg font-medium transition-all duration-300">
                        Hanoi, Viet Nam
                    </p>
                </li>
            </ul>
        </Box>
    )
}

export default Infomation
