import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className="cursor-pointer flex flex-col p-6 bg-slate-800 rounded-lg shadow-lg hover:scale-y-105 transition-transform duration-150 group"
      onMouseEnter={(e) => {
        const parent =
          (e.currentTarget.parentElement as HTMLElement) || document.body;
        Array.from(parent.children).forEach((child) => {
          if (child !== e.currentTarget) {
            (child as HTMLElement).style.opacity = "0.5";
          }
        });
      }}
      onMouseLeave={(e) => {
        const parent =
          (e.currentTarget.parentElement as HTMLElement) || document.body;
        Array.from(parent.children).forEach((child) => {
          (child as HTMLElement).style.opacity = "1";
        });
      }}
    >
      {children}
    </div>
  );
};
