"use client";

import { useState } from "react";
import AddCartButton from "./add-cart-button";
import { SpecialOfferImage } from "./special-offer-image";
import { SpecialOfferDetails } from "./special-offer-details";
import { QuantitySelector } from "./quantity-selector";
import type { SpecialCoffeeType } from "@/_types/coffe/SpecialCoffe";

interface SpecialOfferSectionProps {
  specialCoffee: SpecialCoffeeType;
}

export default function SpecialOfferSection({
  specialCoffee,
}: SpecialOfferSectionProps) {
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    console.log(`Adicionado ${quantity}x ${specialCoffee.name} ao carrinho.`);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-2 text-amber-400">
        Oferta Especial do Dia
      </h2>
      <p className="text-zinc-400 text-center mb-8">
        A nossa seleção premium, com um desconto imperdível!
      </p>

      <div className="bg-zinc-800/50 rounded-lg shadow-xl overflow-hidden md:flex items-stretch">
        <SpecialOfferImage
          imageUrl={specialCoffee.imageUrl}
          name={specialCoffee.name}
        />

        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          <SpecialOfferDetails {...specialCoffee} />
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          <AddCartButton onClick={handleAddToCart} />

          {showAlert && (
            <div className="mt-4 text-center text-green-400 text-sm animate-pulse">
              Adicionado com sucesso!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
