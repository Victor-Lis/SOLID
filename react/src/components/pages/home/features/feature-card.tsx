import type { Feature } from "../../../../_types/features/Feature";
import { Card } from "../../../ui/card";
import { IconComponent } from "../../../ui/icon";

type FeatureCardProps = Pick<Feature, "icon" | "title" | "description">;

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card>
      <IconComponent>{icon}</IconComponent>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </Card>
  );
};
