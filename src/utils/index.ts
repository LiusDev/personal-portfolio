import { twMerge } from "tailwind-merge"

export const cn = (...classes: string[]) => twMerge(...classes)
