import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

function Button({
  className = "",
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  // Build class names based on variant and size
  const baseClasses = "btn";
  const variantClasses = {
    default: "btn-default",
    destructive: "btn-destructive",
    outline: "btn-outline",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
    link: "btn-link"
  };
  const sizeClasses = {
    default: "",
    sm: "btn-sm",
    lg: "btn-lg",
    icon: "btn-icon"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  return (
    <Comp
      data-slot="button"
      className={classes}
      {...props}
    />
  );
}

export { Button };
