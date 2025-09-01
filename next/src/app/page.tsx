"use client"
import {
  Coffee,
  Star,
  ShoppingCart,
  Clock,
  Quote,
  Minus,
  Plus,
} from "lucide-react";
import { useState } from "react"; // Adicionando estado para interatividade

// --- INÍCIO: FUNÇÕES UTILITÁRIAS E DADOS FIXOS ---
// Tudo misturado no mesmo ficheiro, violando SRP e DIP.

// Função para formatar o preço - Lógica de negócio misturada com a UI.
const formatarPreco = (preco: number) => {
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

// Dados dos produtos
const produtos = {
  cafeDoDia: {
    id: 1,
    nome: "Bourbon Amarelo de Piracaia",
    imagemUrl: "https://placehold.co/600x400/18181b/eab308?text=Café+Especial",
    descricao:
      "Um café excepcional cultivado nas montanhas de Piracaia, com um processo de secagem natural que realça a sua doçura inerente e notas complexas.",
    notas: ["Chocolate", "Caramelo", "Frutas Cítricas"],
    avaliacao: 4.8,
    precoOriginal: 55.0,
    precoComDesconto: 44.0, // Lógica de desconto está fixa aqui
  },
  outrasSugestoes: [
    {
      id: 2,
      nome: "Catuaí Vermelho",
      imagemUrl: "https://placehold.co/300x200/18181b/f43f5e?text=Café",
      origem: "Sul de Minas",
      preco: 48.0,
    },
    {
      id: 3,
      nome: "Geisha",
      imagemUrl: "https://placehold.co/300x200/18181b/8b5cf6?text=Café",
      origem: "Panamá",
      preco: 95.0,
    },
    {
      id: 4,
      nome: "Mundo Novo",
      imagemUrl: "https://placehold.co/300x200/18181b/22c55e?text=Café",
      origem: "Mogiana",
      preco: 42.0,
    },
  ],
};

// Dados dos testemunhos
const testemunhos = [
  {
    id: 1,
    nome: "Ana Clara",
    comentario:
      "O melhor café que já provei! A entrega foi super rápida e o aroma preencheu a casa toda. Recomendo o Bourbon Amarelo!",
  },
  {
    id: 2,
    nome: "Marcos Vinícius",
    comentario:
      "Qualidade impressionante. Sente-se que é um produto especial desde a embalagem até ao sabor. Virei cliente fiel.",
  },
];

// --- FIM: DADOS E LÓGICA ---

// O nosso componente HomePage "faz-tudo"
export default function HomePage() {
  // Estado misturado com a lógica de apresentação
  const [quantidade, setQuantidade] = useState(1);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const handleAddToCart = () => {
    console.log(
      `Adicionado ${quantidade}x ${produtos.cafeDoDia.nome} ao carrinho.`
    );
    setMostrarAlerta(true);
    setTimeout(() => setMostrarAlerta(false), 3000); // O alerta desaparece após 3s
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* --- Responsabilidade 1: CABEÇALHO --- */}
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

      <main className="flex-grow container mx-auto px-6 py-12">
        {/* --- Responsabilidade 2: SECÇÃO "CAFÉ DO DIA" --- */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-2 text-amber-400">
            Oferta Especial do Dia
          </h2>
          <p className="text-zinc-400 text-center mb-8">
            A nossa seleção premium, com um desconto imperdível!
          </p>

          <div className="bg-zinc-800/50 rounded-lg shadow-xl overflow-hidden md:flex items-stretch">
            <div className="md:w-1/2 relative">
              <img
                src={produtos.cafeDoDia.imagemUrl}
                alt={produtos.cafeDoDia.nome}
                className="w-full h-full object-cover min-h-[300px]"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full animate-pulse">
                OFERTA
              </div>
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-white">
                  {produtos.cafeDoDia.nome}
                </h3>
                <div className="flex items-center gap-1 text-amber-400 flex-shrink-0 ml-4">
                  <Star size={20} className="fill-amber-400" />
                  <span className="font-bold text-lg">
                    {produtos.cafeDoDia.avaliacao}
                  </span>
                </div>
              </div>
              <p className="text-zinc-300 mb-6">
                {produtos.cafeDoDia.descricao}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <p className="text-xl text-zinc-400 line-through">
                  {formatarPreco(produtos.cafeDoDia.precoOriginal)}
                </p>
                <p className="text-3xl font-bold text-amber-400">
                  {formatarPreco(produtos.cafeDoDia.precoComDesconto)}
                </p>
              </div>
              {/* Repetição de lógica de UI para o contador */}
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={() => setQuantidade((q) => Math.max(1, q - 1))}
                  className="bg-zinc-700 p-2 rounded-full hover:bg-zinc-600 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="text-xl font-bold w-8 text-center">
                  {quantidade}
                </span>
                <button
                  onClick={() => setQuantidade((q) => q + 1)}
                  className="bg-zinc-700 p-2 rounded-full hover:bg-zinc-600 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-900 font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-transform transform hover:scale-105"
              >
                <ShoppingCart size={20} />
                Adicionar ao Carrinho
              </button>
              {mostrarAlerta && (
                <div className="mt-4 text-center text-green-400 text-sm">
                  Adicionado com sucesso!
                </div>
              )}
            </div>
          </div>
        </section>

        {/* --- Responsabilidade 3: SECÇÃO "OUTRAS SUGESTÕES" --- */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-8">
            Explore Outros Sabores
          </h2>
          {/* Repetição de JSX para cada cartão, violando OCP e DRY */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtos.outrasSugestoes.map((cafe) => (
              <div
                key={cafe.id}
                className="bg-zinc-800 rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={cafe.imagemUrl}
                    alt={cafe.nome}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg text-white truncate">
                    {cafe.nome}
                  </h4>
                  <p className="text-sm text-zinc-400">{cafe.origem}</p>
                  <p className="text-lg font-semibold text-amber-400 mt-2">
                    {formatarPreco(cafe.preco)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Responsabilidade 4: SECÇÃO "TESTEMUNHOS" --- */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8">
            O Que Dizem Nossos Clientes
          </h2>
          <div className="space-y-8">
            {/* Repetição de JSX para cada testemunho */}
            {testemunhos.map((t) => (
              <div
                key={t.id}
                className="bg-zinc-800/40 p-6 rounded-lg flex gap-4 items-start"
              >
                <div className="bg-amber-400 text-zinc-900 rounded-full h-10 w-10 flex-shrink-0 flex items-center justify-center font-bold text-lg">
                  {t.nome.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white">{t.nome}</p>
                  <p className="text-zinc-300 italic">"{t.comentario}"</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- Responsabilidade 5: RODAPÉ --- */}
      <footer className="bg-zinc-950/50 mt-16 border-t border-zinc-800">
        <div className="container mx-auto px-6 py-8 text-center text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} Cantinho do Café. Todos os
            direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
