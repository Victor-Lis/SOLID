import React from "react";

export const Header = () => {
  return (
    <header className="bg-slate-900/70 backdrop-blur-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          Logo<span className="text-indigo-400">.</span>
        </div>
        <ul className="flex items-center space-x-6">
          <li>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Início
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Sobre
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Contato
            </a>
          </li>
          <li>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Começar
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
