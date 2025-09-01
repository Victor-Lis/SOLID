import { CoffeeType } from "@/_types/coffe/Coffe";
import { formatPrice } from "@/_utils/format-price";
import Card from "@/components/ui/card";
import { SuggestionCard } from "./suggestions-card";

type SuggestionsSectionProps = {
  suggestions: Pick<
    CoffeeType,
    "id" | "imageUrl" | "name" | "origin" | "price"
  >[];
};

export default function SuggestionsSection({
  suggestions,
}: SuggestionsSectionProps) {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold text-center mb-8">
        Explore Outros Sabores
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {suggestions.map((coffee) => (
          <SuggestionCard key={coffee.id} {...coffee} />
        ))}
      </div>
    </section>
  );
}
