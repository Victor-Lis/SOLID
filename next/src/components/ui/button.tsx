"use client";

import type { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "w-full font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-transform transform hover:scale-105";

  const variantStyles = {
    primary: "bg-amber-500 hover:bg-amber-600 text-zinc-900",
    secondary: "bg-zinc-700 hover:bg-zinc-600 text-zinc-100",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} {...props}>
      {children}
    </button>
  );
};
