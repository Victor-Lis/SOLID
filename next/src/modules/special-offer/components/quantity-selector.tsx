import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: (updater: (q: number) => number) => void;
}

export const QuantitySelector = ({
  quantity,
  setQuantity,
}: QuantitySelectorProps) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <button
        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        className="bg-zinc-700 p-2 rounded-full hover:bg-zinc-600 transition-colors"
        aria-label="Diminuir quantidade"
      >
        <Minus size={16} />
      </button>
      <span className="text-xl font-bold w-8 text-center" aria-live="polite">
        {quantity}
      </span>
      <button
        onClick={() => setQuantity((q) => q + 1)}
        className="bg-zinc-700 p-2 rounded-full hover:bg-zinc-600 transition-colors"
        aria-label="Aumentar quantidade"
      >
        <Plus size={16} />
      </button>
    </div>
  );
};
