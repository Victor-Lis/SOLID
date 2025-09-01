import type { Feature } from "../../_types/features/Feature";

const ReusableIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  </svg>
);
const ModernDesignIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v11.494m-9-5.747h18"
    />
  </svg>
);
const ScalableIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

export const useGetFeatures = (): { features: Feature[] } => {
  return {
    features: [
      {
        icon: <ReusableIcon />,
        title: "Componentes Reutilizáveis",
        description:
          "Criamos componentes que podem ser usados em toda a sua aplicação.",
      },
      {
        icon: <ModernDesignIcon />,
        title: "Design Moderno",
        description:
          "Interfaces limpas e intuitivas que proporcionam uma ótima experiência.",
      },
      {
        icon: <ScalableIcon />,
        title: "Código Escalável",
        description:
          "Seguimos princípios como o SOLID para um código fácil de manter.",
      },
    ],
  };
};
