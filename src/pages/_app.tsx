import "@/styles/globals.css"
import { MantineProvider } from "@mantine/core"
import type { AppProps } from "next/app"
import "@mantine/core/styles.css"
import "@mantine/notifications/styles.css"
import { Notifications } from "@mantine/notifications"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider>
            <Notifications />
            <Component {...pageProps} />
        </MantineProvider>
    )
}
