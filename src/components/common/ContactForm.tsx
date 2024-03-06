import { notifications } from "@mantine/notifications"
import Box from "./Box"
import Button from "./Button"
import emailjs from "@emailjs/browser"
import { useForm } from "@mantine/form"

const ContactForm = () => {
    const contactForm = useForm({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validate: {
            name: (value) => (value.length > 0 ? null : "Name is required"),
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email",
            subject: (value) =>
                value.length > 0 ? null : "Subject is required",
            message: (value) =>
                value.length > 0 ? null : "Message is required",
        },
    })

    const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        contactForm.validate()
        if (!contactForm.isValid()) {
            notifications.show({
                title: "Error",
                message: contactForm.errors[0],
                color: "red",
            })
            return
        }
        emailjs
            .send("service_yifq0m9", "template_vrzbyop", contactForm.values, {
                publicKey: "Zs5WyP8I4BKTXWhm4",
            })
            .then(() => {
                notifications.show({
                    title: "Message sent",
                    message: "I will get back to you soon",
                    color: "teal",
                })
            })
            .catch((error) => {
                notifications.show({
                    title: "Error",
                    message: "Something went wrong",
                    color: "red",
                })
            })
    }
    return (
        <Box className="col-span-3 lg:col-span-2 p-6" data-aos="fade-left">
            <form onSubmit={handleSend}>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <input
                        type="text"
                        placeholder="Name"
                        {...contactForm.getInputProps("name")}
                        className="p-2 border border-tertiary/30 dark:border-secondary/30 bg-transparent focus:bg-transparent outline-none transition-all duration-300 grow"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        {...contactForm.getInputProps("email")}
                        className="p-2 border border-tertiary/30 dark:border-secondary/30 bg-transparent focus:bg-transparent outline-none transition-all duration-300 grow"
                    />
                </div>
                <input
                    type="text"
                    placeholder="Subject"
                    {...contactForm.getInputProps("subject")}
                    className="p-2 border border-tertiary/30 dark:border-secondary/30 bg-transparent focus:bg-transparent outline-none transition-all duration-300 w-full mb-6"
                />
                <textarea
                    placeholder="Message"
                    {...contactForm.getInputProps("message")}
                    className="p-2 border border-tertiary/30 dark:border-secondary/30 bg-transparent focus:bg-transparent outline-none transition-all duration-300 w-full h-40 mb-6"
                />
                <Button component="button" type="submit">
                    send message
                </Button>
            </form>
        </Box>
    )
}

export default ContactForm
