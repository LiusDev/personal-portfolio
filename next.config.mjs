/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    redirects: async () => {
        return [
            {
                source: "/cv",
                destination:
                    "https://drive.google.com/file/d/1mxpy850jKlHOsra874GDEauxnFQiwTkV/view",
                permanent: true,
            },
        ]
    },
}

export default nextConfig
