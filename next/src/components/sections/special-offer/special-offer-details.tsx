import { Star } from "lucide-react";
import type { SpecialCoffeeType } from "@/_types/coffe/SpecialCoffe";
import { formatPrice } from "@/_utils/format-price";

type DetailsProps = Pick<
  SpecialCoffeeType,
  "name" | "rating" | "description" | "price" | "discountedPrice" | "notes"
>;

export const SpecialOfferDetails = (props: DetailsProps) => {
  return (
    <>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-2xl font-bold text-white">{props.name}</h3>
        <div className="flex items-center gap-1 text-amber-400 flex-shrink-0 ml-4">
          <Star size={20} className="fill-amber-400" />
          <span className="font-bold text-lg">{props.rating}</span>
        </div>
      </div>
      <p className="text-zinc-300 mb-6">{props.description}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="text-sm font-semibold text-zinc-400 mr-2">
          Notas de Sabor:
        </span>
        {props.notes.map((nota) => (
          <span
            key={nota}
            className="bg-zinc-700 text-zinc-200 text-xs font-semibold px-3 py-1 rounded-full"
          >
            {nota}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 mb-6">
        <p className="text-xl text-zinc-400 line-through">
          {formatPrice(props.price)}
        </p>
        <p className="text-3xl font-bold text-amber-400">
          {formatPrice(props.discountedPrice)}
        </p>
      </div>
    </>
  );
};
