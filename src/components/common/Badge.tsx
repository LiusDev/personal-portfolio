import { cn } from "@/utils"

interface BadgeProps {
    children: React.ReactNode
    className?: string
}

const Badge = ({ children, className = "" }: BadgeProps) => {
    return (
        <p
            className={cn(
                ` w-fit text-sm mb-3 bg-primary text-secondary-dark inline-block px-2 py-[2px] rounded-md ${className}`
            )}
        >
            {children}
        </p>
    )
}

export default Badge
