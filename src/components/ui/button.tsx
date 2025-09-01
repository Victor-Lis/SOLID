import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "medium" | "large";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "font-bold rounded-lg transition-transform transform hover:scale-105 hover:cursor-pointer";

  const variantStyles = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
    secondary: "bg-slate-700 hover:bg-slate-600 text-white",
  };

  const sizeStyles = {
    medium: "py-2 px-6",
    large: "py-3 px-8 text-lg",
  };

  const className = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
