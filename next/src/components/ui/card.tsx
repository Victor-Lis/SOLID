interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={`bg-zinc-800 rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 ${className}`}>
      {children}
    </div>
  );
}
