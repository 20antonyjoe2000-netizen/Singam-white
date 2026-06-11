import { InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "bg-surface-container-low border-none rounded-xl p-md focus:ring-2 focus:ring-black focus:bg-white transition-all outline-none w-full",
        className
      )}
      {...props}
    />
  )
}
