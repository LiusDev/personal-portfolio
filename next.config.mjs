/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    redirects: async () => {
        return [
            {
                source: "/cv",
                destination:
                    "https://drive.google.com/file/d/14OOJDMCXhpjP688G5G8sFgK6ynU2DOl0/view?usp=drive_link",
                permanent: true,
            },
        ]
    },
}

export default nextConfig
