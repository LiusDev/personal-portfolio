import { cn } from "@/utils"

interface BoxProps {
    className?: string
    children: React.ReactNode
}

const Box = ({ className, children }: BoxProps) => {
    return (
        <div
            className={cn(
                `bg-secondary-dark dark:bg-tertiary-dark transition-all duration-300 dark:text-secondary ${className}`
            )}
        >
            {children}
        </div>
    )
}

export default Box
