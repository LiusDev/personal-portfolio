import { cn } from "@/utils"

interface BoxProps {
    className?: string
    children: React.ReactNode
    [key: string]: any
}

const Box = ({ className, children, ...props }: BoxProps) => {
    return (
        <div
            className={cn(
                `bg-secondary-dark dark:bg-tertiary-dark transition-all duration-300 dark:text-secondary ${className}`
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export default Box
