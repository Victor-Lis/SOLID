import Card from "@/components/ui/card";
import type { CoffeeType } from "@/_types/coffe/Coffe";
import { formatPrice } from "@/_utils/format-price";

type SuggestionCardProps = Pick<
  CoffeeType,
  "imageUrl" | "name" | "origin" | "price"
>;

export const SuggestionCard = ({
  imageUrl,
  name,
  origin,
  price,
}: SuggestionCardProps) => {
  return (
    <Card className="group transform hover:-translate-y-2 transition-transform duration-300">
      <div className="overflow-hidden h-48">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <h4 className="font-bold text-lg text-white truncate">{name}</h4>
        <p className="text-sm text-zinc-400">{origin}</p>
        <p className="text-lg font-semibold text-amber-400 mt-2">
          {formatPrice(price)}
        </p>
      </div>
    </Card>
  );
};
