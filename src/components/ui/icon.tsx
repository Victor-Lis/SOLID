export const IconComponent = ({ children }: { children: React.ReactNode }) => (
  <div className="flex-shrink-0 mb-4">
    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-500 text-white">
      {children}
    </div>
  </div>
);
