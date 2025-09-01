import { Coffee } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-zinc-950/50 backdrop-blur-lg sticky top-0 z-10 border-b border-zinc-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Coffee className="text-amber-400" />
          <h1 className="text-xl font-bold text-white">Cantinho do Café</h1>
        </div>
        <ul className="flex items-center space-x-8 text-zinc-300">
          <li>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Nossos Cafés
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Sobre
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
