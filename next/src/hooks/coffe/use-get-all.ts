import { CoffeeType } from "@/_types/coffe/Coffe";

export const useGetAllCoffees = () => {
  const coffees: CoffeeType[] = [
    {
      id: 2,
      name: "Catuaí Vermelho",
      imageUrl: "https://placehold.co/300x200/18181b/f43f5e?text=Coffee",
      origin: "South of Minas",
      price: 48.0,
    },
    {
      id: 3,
      name: "Geisha",
      imageUrl: "https://placehold.co/300x200/18181b/8b5cf6?text=Coffee",
      origin: "Panama",
      price: 95.0,
    },
    {
      id: 4,
      name: "Mundo Novo",
      imageUrl: "https://placehold.co/300x200/18181b/22c55e?text=Coffee",
      origin: "Mogiana",
      price: 42.0,
    },
  ];

  return {
    coffees,
  };
};
