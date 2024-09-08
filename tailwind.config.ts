import type { Config } from "tailwindcss"

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            primary: "#2563eb",
            secondary: {
                DEFAULT: "#fafafa",
                dark: "#f1f1f1",
            },
            tertiary: {
                DEFAULT: "#10101a",
                dark: "#0b0b13",
            },
        },
        extend: {
            boxShadow: {
                button: "4px 4px #0b0b13",
                "button-dark": "4px 4px #f5f5f5",
                "button-hover": "4px 4px #2563eb",
                box: "8px 8px #2563eb",
            },
        },
    },
    plugins: [],
}
export default config
