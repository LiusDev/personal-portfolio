/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    redirects: async () => {
        return [
            {
                source: "/cv",
                destination:
                    "https://drive.google.com/file/d/1Tf2bZOtdc2vPLzjsrTluRtsMce-EvEyB/view?usp=sharing",
                permanent: true,
            },
        ]
    },
}

export default nextConfig
