import { TestimonyType } from "@/_types/testimony/Testimony";

export const useGetAllTestimonies = () => {
  const testimonies: TestimonyType[] = [
    {
      id: 1,
      name: "Ana Clara",
      comment:
        "O melhor café que já provei! A entrega foi super rápida e o aroma preencheu a casa toda. Recomendo o Bourbon Amarelo!",
    },
    {
      id: 2,
      name: "Marcos Vinícius",
      comment:
        "Qualidade impressionante. Sente-se que é um produto especial desde a embalagem até ao sabor. Virei cliente fiel.",
    },
  ];

  return {
    testimonies,
  };
};
