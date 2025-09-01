import { SpecialCoffeeType } from "@/_types/coffe/SpecialCoffe";
import Image from "next/image";

type SpecialOfferImageProps = Pick<SpecialCoffeeType, "imageUrl" | "name">;

export const SpecialOfferImage = ({
  imageUrl,
  name,
}: SpecialOfferImageProps) => {
  return (
    <div className="md:w-1/2 relative">
      <Image
        src={`${imageUrl}`}
        alt={name}
        width={600}
        height={400}
        className="w-full h-full object-cover min-h-[300px]"
      />
      <div className="absolute top-4 left-4 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full animate-pulse">
        OFERTA
      </div>
    </div>
  );
};
