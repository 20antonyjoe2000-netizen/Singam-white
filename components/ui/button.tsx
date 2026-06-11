import { cva, type VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-widest rounded-full transition-all active:scale-95 duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-primary text-on-primary hover:opacity-90",
        secondary: "bg-surface-container-low text-primary hover:bg-surface-container-highest",
        ghost: "text-[#0071E3] hover:opacity-80",
      },
      size: {
        default: "px-xl py-md",
        sm: "px-md py-sm",
        full: "w-full py-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}
