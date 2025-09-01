import type { SpecialCoffeeType } from "@/_types/coffe/SpecialCoffe";

export const useGetSpecialCoffee = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500)); // Simula latência de rede

  const specialCoffee: SpecialCoffeeType = {
    id: 1,
    name: "Bourbon Amarelo de Piracaia",
    imageUrl: "https://placehold.co/600x400/18181b/eab308?text=Café+Especial",
    description:
      "Um café excepcional cultivado nas montanhas de Piracaia, com um processo de secagem natural que realça a sua doçura inerente e notas complexas.",
    notes: ["Chocolate", "Caramelo", "Frutas Cítricas"],
    rating: 4.8,
    price: 55.0,
    discountedPrice: 44.0,
  };

  return {
    specialCoffee,
  };
};
