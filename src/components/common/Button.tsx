import { cn } from "@/utils"
import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ComponentPropsWithoutRef,
} from "react"
import { Link as ScrollLink } from "react-scroll"

type ButtonVariant = "normal" | "text" | "icon" | "none"
type ButtonComponent = "button" | "a" | "scroll"

const buttonVariants: Record<ButtonVariant, string> = {
    normal: "px-6 py-3 bg-primary tracking-[2px] text-sm text-secondary-dark shadow-button dark:shadow-button-dark cursor-pointer hover:bg-tertiary-dark dark:hover:text-primary dark:hover:bg-secondary-dark hover:shadow-button-hover dark:hover:shadow-button-hover capitalize transition-all duration-300",
    text: "text-tertiary dark:text-secondary hover:text-primary dark:hover:text-text-secondary-dark transition-all duration-300",
    icon: "group transition-all duration-300",
    none: "",
}

const buttonComponents: Record<ButtonComponent, any> = {
    button: "button",
    a: "a",
    scroll: ScrollLink,
}

type ButtonProps = {
    variant?: ButtonVariant
    component?: ButtonComponent
    leftSection?: React.ReactNode
    className?: string
    children?: React.ReactNode
} & (
    | ({
          component: "button"
      } & ButtonHTMLAttributes<HTMLButtonElement>)
    | ({
          component: "a"
          href: string
      } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({
          component: "scroll"
          to: string
      } & ComponentPropsWithoutRef<typeof ScrollLink>)
)

const Button = ({
    variant = "normal",
    component = "button",
    leftSection,
    className = "",
    children,
    ...props
}: ButtonProps) => {
    const BtnType = buttonComponents[component]

    return (
        <BtnType
            className={cn(`${buttonVariants[variant]} ${className}`)}
            {...props}
        >
            {leftSection && <span className="mr-2">{leftSection}</span>}
            {children}
        </BtnType>
    )
}

export default Button
