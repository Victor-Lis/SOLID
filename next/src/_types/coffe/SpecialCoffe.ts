import { CoffeeType } from "./Coffe";

export interface SpecialCoffeeType extends Omit<CoffeeType, "origin"> {
  description: string;
  notes: string[];
  rating: number;
  discountedPrice: number;
}
