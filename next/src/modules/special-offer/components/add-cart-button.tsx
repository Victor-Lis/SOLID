import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

type AddCartButtonProps = {
  onClick: () => void;
};

export default function AddCartButton({ onClick }: AddCartButtonProps) {
 return (
   <Button
     onClick={onClick}
     className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-900 font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-transform transform hover:scale-105"
   >
     <ShoppingCart size={20} />
     Adicionar ao Carrinho
   </Button>
 );
}